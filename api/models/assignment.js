const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  link: {
    type: String,
    required: true
  },
  score: Number,
  scorePossible: Number  
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = schema