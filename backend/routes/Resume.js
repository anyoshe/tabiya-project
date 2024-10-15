const express = require('express');
const router = express.Router();
const User = require('../models/userCv'); // Assuming the schema is saved as 'user.js' in the models folder

// Route to get job seeker by ID
router.get('/jobseekers/:id', async (req, res) => {
  try {
    const jobSeeker = await User.findById(req.params.id);
    if (!jobSeeker) {
      return res.status(404).json({ message: 'Job seeker not found' });
    }
    res.json(jobSeeker);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job seeker data', error });
  }
});

module.exports = router;
