// Create web server using Express
const express = require('express');
const app = express();
const port = 3000;

// Import the comments from the comments.json file
const comments = require('./comments.json');

// Use the Express static middleware to serve static content from the "public" directory
app.use(express.static('public'));

// Use the Express json middleware to parse the request body
app.use(express.json());

// Route: GET /comments
app.get('/comments', (req, res) => {
  // Send the comments back as JSON
  res.json(comments);
});

// Route: POST /comments
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  const comment = req.body;
  // Add the comment to the array of comments
  comments.push(comment);
  // Send the comment back as JSON
  res.json(comment);
});

// Start the web server
app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});