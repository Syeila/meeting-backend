const express = require('express');
const Room = require('../models/Room');
const router = express.Router();

// CREATE
router.post('/', async (req, res) => {
  const room = new Room(req.body);
  try {
    await room.save();
    res.status(201).json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// READ
router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// UPDATE
router.put('/:id', async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(room);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Room deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
