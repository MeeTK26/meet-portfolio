/**
 * Static file server for portfolio deployment.
 * Serves the built React app from client/dist. No APIs, no database.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React build
const clientBuildPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientBuildPath));

// SPA fallback: all routes serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
});
