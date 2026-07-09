const File = require("../models/File");
const fs = require("fs");

// Upload File
const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const newFile = await File.create({
      fileName: req.file.filename,
      originalName: req.file.originalname,
      fileType: req.file.mimetype,
      fileSize: req.file.size,
      filePath: req.file.path,

      // Logged-in user's ID
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file: newFile,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get Only Logged-in User Files
const getFiles = async (req, res) => {
  try {
    const files = await File.find({
      uploadedBy: req.user.id,
    }).sort({ createdAt: -1 });

    const totalStorage = files.reduce(
      (sum, file) => sum + file.fileSize,
      0
    );

    res.status(200).json({
      success: true,
      files,
      stats: {
        totalFiles: files.length,
        totalUploads: files.length,
        storageUsed: totalStorage,
      },
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Download User File
const downloadFile = async (req, res) => {
  try {
    const file = await File.findOne({
      _id: req.params.id,
      uploadedBy: req.user.id,
    });

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    res.download(file.filePath, file.originalName);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Delete User File
const deleteFile = async (req, res) => {
  try {
    const file = await File.findOne({
      _id: req.params.id,
      uploadedBy: req.user.id,
    });

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    if (fs.existsSync(file.filePath)) {
      fs.unlinkSync(file.filePath);
    }

    await File.findByIdAndDelete(file._id);

    res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });

  } catch (error) {
  console.error("UPLOAD ERROR:", error);

  return res.status(500).json({
    success: false,
    message: error.message,
    stack: process.env.NODE_ENV !== "production" ? error.stack : undefined,
  });
}
};

module.exports = {
  uploadFile,
  getFiles,
  downloadFile,
  deleteFile,
};