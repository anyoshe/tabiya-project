// routes/employerAuth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Employer = require('../models/Employer');
const generateToken = require('../utils/generateToken');
const router = express.Router();

// Employer Sign Up
router.post('/signup', async (req, res) => {
    const { businessName, fullName, contact, email, location, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
        const existingEmployer = await Employer.findOne({ $or: [{ email }, { contact }] });
        if (existingEmployer) {
            return res.status(400).json({ message: "Employer with this email or contact already exists" });
        }

        const employer = new Employer({ businessName, fullName, contact, email, location, password });
        await employer.save();

        const token = generateToken(employer);
        res.status(201).json({ token, message: "Sign up successful!" });
    } catch (error) {
        res.status(500).json({ message: "Error signing up", error });
    }
});

// Employer Login
router.post('/login', async (req, res) => {
    const { contact, password } = req.body;

    try {
        const employer = await Employer.findOne({ contact });
        if (!employer) {
            return res.status(404).json({ message: "Employer not found!" });
        }

        const isMatch = await bcrypt.compare(password, employer.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password!" });
        }

        const token = generateToken(employer);
        res.status(200).json({ token, message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
});

module.exports = router;
