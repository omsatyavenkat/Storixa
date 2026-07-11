const File = require("../models/File");
const fs = require("fs");
const path = require("path");

// ================= Upload File =================
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

      // Store a consistent relative path
      filePath: `uploads/${req.file.filename}`,

      uploadedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "File uploaded successfully",
      file: newFile,
    });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= Get Files =================
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
    console.error("GET FILES ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= Download File =================
const downloadFile = async (req, res) => {
  console.log("\n========== DOWNLOAD REQUEST ==========");
  console.log("Requested File ID:", req.params.id);
  console.log("Logged In User:", req.user);

  try {
    const file = await File.findOne({
      _id: req.params.id,
      uploadedBy: req.user.id,
    });

    console.log("Database File:", file);

    if (!file) {
      return res.status(404).json({
        success: false,
        message: "File not found in database",
      });
    }

    // Absolute path to the file
    const fullPath = path.join(__dirname, "..", file.filePath);

    console.log("Resolved Path:", fullPath);
    console.log("File Exists:", fs.existsSync(fullPath));

    if (!fs.existsSync(fullPath)) {
      return res.status(404).json({
        success: false,
        message: "Physical file not found",
      });
    }

    return res.download(fullPath, file.originalName);

  } catch (error) {
    console.error("DOWNLOAD ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= Delete File =================
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

    const fullPath = path.join(__dirname, "..", file.filePath);

    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
    }

    await File.findByIdAndDelete(file._id);

    res.status(200).json({
      success: true,
      message: "File deleted successfully",
    });

  } catch (error) {
    console.error("DELETE ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadFile,
  getFiles,
  downloadFile,
  deleteFile,
};