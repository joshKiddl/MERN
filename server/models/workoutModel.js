const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  operator: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
}, { timestamps: true })

module.exports = mongoose.model('Workout', workoutSchema)