// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files (optional if using a public folder)
app.use(express.static('public'));

// Route to serve HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Adjust path if needed
});

// Handle form submission
app.post('/pokemon', (req, res) => {
    const { name } = req.body;
    console.log("Pokemon name submitted:", name);
    res.send(`Form submitted successfully! You entered: ${name}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
