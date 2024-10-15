// // models/JobSeeker.js
// const mongoose = require('mongoose');

// const jobSeekerSchema = new mongoose.Schema({
//     username: { type: String, required: true },
//     phone: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model('JobSeeker', jobSeekerSchema);

const mongoose = require('mongoose');

// Experience Schema
const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  responsibilities: [String]
});

// Education Schema
const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date }
});

// Main Job Seeker Schema
const jobSeekerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  experience: [experienceSchema], // Embedding experience schema
  education: [educationSchema],   // Embedding education schema
  skills: [String],               // Array of skills
  profileImage: {                 // Profile image field
    type: String,                 // Store image URL or path
    required: false
  },
  jobSeekerLocation: { type: String, required: false},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JobSeeker', jobSeekerSchema);

