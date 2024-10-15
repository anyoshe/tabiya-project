// models/Employer.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employerSchema = new mongoose.Schema({
    businessName: { type: String, required: false },
    fullName: { type: String, required: true },
    contact: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true });

// Hash the password before saving
employerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const Employer = mongoose.model('Employer', employerSchema);

module.exports = Employer;
