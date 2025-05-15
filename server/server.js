const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// Enable CORS for development
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// API routes
app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

// Serve static files from the monorepo build directory in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../monorepo/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../monorepo/dist/index.html'));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});