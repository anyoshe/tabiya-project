// routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JobSeeker = require('../models/jobSeeker');
const generateToken = require('../utils/generateToken'); // Import the function
const User = require('../models/jobSeeker');

require('dotenv').config();

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { username, phone, email, password, confirmPassword } = req.body;
    
    // Validate password match
    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newJobSeeker = new JobSeeker({
            username,
            phone,
            email,
            password: hashedPassword,
        });
        
        await newJobSeeker.save();
        res.status(201).json({ message: "Account created successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Error creating account", error });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { loginCredential, loginPassword } = req.body;
    console.log(req.body);


    try {
        // Check if email or phone is used to login
        const jobSeeker = await JobSeeker.findOne({
            $or: [{ email: loginCredential }, { phone: loginCredential }]
        });
        console.log(jobSeeker);
        if (!jobSeeker) {
            return res.status(404).json({ message: "User not found!" });
        }

        // Validate password
        const isMatch = await bcrypt.compare(loginPassword, jobSeeker.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password!" });
        }
        console.log(isMatch);

        // Generate JWT using the utility function
        const token = generateToken(jobSeeker);
        res.status(200).json({ token, message: "Login successful!" });
        console.log(token);

    } catch (error) {
        // res.status(500).json({ message: "Login failed", error });
        res.status(500).json({ message: "Login failed", error: error.message }); // Return the error message
    }
});

// Route to get job seeker by ID
// Route to get job seeker by ObjectId
router.get('/jobseekers/:id', async (req, res) => {
    try {
      // Validate ObjectId
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: 'Invalid ObjectId' });
      }
  
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
