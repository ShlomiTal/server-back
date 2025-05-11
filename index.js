// Add this at the end of your file (before app.listen):
console.log('🔌 Connecting to database...');
console.log(`📡 API Routes:
  POST /api/signal
  POST /api/train
  GET /api/candles`);

app.listen(process.env.PORT || 3000, () => {
  console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
  console.log(`🔗 Base URL: ${process.env.RAILWAY_STATIC_URL || 'http://localhost:' + (process.env.PORT || 3000)}`);
});