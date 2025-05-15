// server/server.js
const express = require('express');
const app = express();

// your routes/middleware here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'hi' });
});

module.exports = app;
