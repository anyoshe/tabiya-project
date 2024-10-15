const express = require('express');
const multer = require('multer');
const JobSeeker = require('../models/jobSeeker'); // Import JobSeeker model
const router = express.Router();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route to upload profile image
router.post('/jobseeker/profile-image', upload.single('profileImage'), async (req, res) => {
  const userId = req.user._id; // Assuming user authentication is set up

  try {
    const updatedJobSeeker = await JobSeeker.findByIdAndUpdate(
      userId,
      { $set: { profileImage: req.file.path } }, // Save image path
      { new: true }
    );

    res.status(200).json({ message: 'Profile image updated successfully', updatedJobSeeker });
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile image', error: err.message });
  }
});

module.exports = router;
