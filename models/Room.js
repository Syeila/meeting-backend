const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  unit: String,
  meetingRoom: String,
  capacity: Number,
  meetingDate: Date,
  startTime: String,
  endTime: String,
  participants: Number,
  consumptionType: [String],
  consumptionCost: Number,
});

module.exports = mongoose.model('Room', RoomSchema);
