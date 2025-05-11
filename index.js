import express from 'express';
import cors from 'cors';

const app = express();

// 1. Enable CORS for all routes
app.use(cors());

// 2. Add root route for testing
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// 3. Simplified Signal Endpoint
app.post('/api/signal', express.json(), (req, res) => {
  console.log('Received request with:', req.body);
  
  // Immediate test response
  res.json({
    status: 'success',
    signal: 'BUY',
    confidence: 75,
    pair: req.body.pair || 'none'
  });
});

// 4. Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});