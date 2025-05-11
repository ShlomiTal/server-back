import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Enhanced CORS configuration
app.use(cors({
  origin: [
    'agile-delight-production.up.railway.app', // Your frontend URL
    'http://localhost:3000'               // For local testing
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'running', version: '1.0.0' });
});

// Signal endpoint
app.post('/api/signal', async (req, res) => {
  try {
    const { pair } = req.body;
    // Simulated response - replace with real logic
    res.json({ 
      signal: "STRONG_BUY", 
      confidence: 85,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});