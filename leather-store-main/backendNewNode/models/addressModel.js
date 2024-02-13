const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, 'Please enter a city'],
  },
  address: {
    type: String,
    required: [true, 'Please provide full address'],
  },
  zipcode: {
    type: String,
    required: [true, 'Enter index'],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'The address must belong to the user'],
  },
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
