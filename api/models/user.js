const mongoose = require('mongoose')
const Assignment = require('./assignment')

const schema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: /\S+@\S+\.\S+/,
    required: true
  },
  password: {
    type: String,
    minlength: 8,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  },
  assignments: [Assignment]
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

module.exports = mongoose.model('User', schema)