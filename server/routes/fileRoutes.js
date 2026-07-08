const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

const {
  uploadFile,
  getFiles,
  downloadFile,
  deleteFile,
} = require("../controllers/fileController");

// Upload File (Protected)
router.post(
  "/upload",
  auth,
  upload.single("file"),
  uploadFile
);

// Get Files (Protected)
router.get("/", auth, getFiles);

// Download File (Protected)
router.get("/download/:id", auth, downloadFile);

// Delete File (Protected)
router.delete("/:id", auth, deleteFile);

module.exports = router;