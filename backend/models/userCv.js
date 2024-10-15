const mongoose = require('mongoose');

// Experience Schema
const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  startDate: Date,
  endDate: Date,
  responsibilities: [String]
});

// Education Schema
const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  startDate: Date,
  endDate: Date
});

// Main User (Job Seeker) Schema
const userSchema = new mongoose.Schema({
  username: String,
  phone: String,
  email: String,
  password: String,
  experience: [experienceSchema],
  education: [educationSchema],
  skills: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
