const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Purchase = new mongoose.Schema({
  ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ad',
    required: true
  },
  user_ad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user_purchase: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

Purchase.plugin(mongoosePaginate)

module.exports = mongoose.model('Purchase', Purchase)
