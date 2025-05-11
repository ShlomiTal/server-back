const express = require('express');
const path = require('path');
const app = express();

// Serve static files from public/
app.use(express.static('public'));

// API Endpoint
app.post('/api/signal', express.json(), (req, res) => {
  res.json({ 
    signal: "BUY", 
    confidence: 80,
    pair: req.body.pair || "BTCUSDT" 
  });
});

// All other routes -> frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));