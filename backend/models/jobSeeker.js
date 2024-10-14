// models/JobSeeker.js
const mongoose = require('mongoose');

const jobSeekerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('JobSeeker', jobSeekerSchema);
