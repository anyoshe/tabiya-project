// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const employerRoutes = require('./routes/employerAuth');
const jobSeekerRoutes = require('./routes/jobSeekerRoutes');
app.use('/api', jobSeekerRoutes); // Adjust the path as needed

const cors = require('cors');
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;




// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/auth', authRoutes);

app.use('/employer', employerRoutes);

app.use('/api', jobSeekerRoutes); // Adjust the path as needed

// MongoDB Connection
// server.js
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection failed:', err));


// Example route
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

