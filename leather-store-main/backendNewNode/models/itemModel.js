const mongoose = require('mongoose');
const slugify = require('slugify');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Title required'],
    unique: true,
    trim: true,
    // minLength: [10, 'The title is too short'],
  },
  slug: String,
  type: {
    type: String,
    required: [true, 'Item type must be specified'],
    enum: {
      values: [
        'Wallets and cardholders',
        'Cases for glasses',
        'Passport covers',
      ],
      message: 'Specify an existing product type',
    },
  },
  description: {
    type: String,
    required: [true, 'Description required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  imageCover: {
    type: String,
    required: [true, 'The product must have a cover'],
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

itemSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
