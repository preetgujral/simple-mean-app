var mongoose = require('mongoose');

module.exports = mongoose.model('Movie', {
  name: {
    type: String,
    default: ''
  },
  length: {
    type: Number,
    default: ''
  },
  source: {
    type: String,
    default: ''
  },
  isArchived: {
    type: Boolean,
    default: false
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});
