const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Note = require('./models/Note');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Essential for reading JSON bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.error("Connection Error:", err));

// --- API ROUTES ---

// 1. CREATE a Note
app.post('/notes', async (req, res) => {
  const { title, description } = req.body;

  // Manual Validation
  if (!title || !description) {
    return res.status(400).json({ error: "Title and description are required" });
  }

  try {
    const newNote = new Note({ title, description });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. VIEW all Notes
app.get('/notes', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. UPDATE a Note
app.put('/notes/:id', async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true } // Returns the modified document rather than the original
    );
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. DELETE a Note
app.delete('/notes/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Root route for testing
app.get('/', (req, res) => res.send("Dnyx Notes API is running!"));

// Export for Vercel
module.exports = app;

// Listen (only for local development)
if (process.env.NODE_ENV !== 'production') {
  const PORT = 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}