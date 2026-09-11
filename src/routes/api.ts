import express from 'express';

const router = express.Router();
let apiKey = 'a4a0fbc0-255f-42d2-89d4-2201158e7180'; // Default API key

// Route to get the current API key
router.get('/key', (req, res) => {
  res.json({ apiKey });
});

// Route to set a new API key
router.post('/key', (req, res) => {
  const { key } = req.body;
  if (key) {
    apiKey = key;
    res.status(200).json({ message: 'API key updated successfully' });
  } else {
    res.status(400).json({ message: 'API key is required' });
  }
});

export default router;