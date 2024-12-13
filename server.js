const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const roomRoutes = require('./routes/roomRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/rooms', roomRoutes);

// MongoDB Connection
mongoose
  .connect('mongodb://127.0.0.1:27017/meeting_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
