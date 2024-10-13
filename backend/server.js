const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Backend is working');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
