// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to 2024');
});

// Start the server
const port = process.env.PORT || 3000;

// Use the port provided by the environment or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


