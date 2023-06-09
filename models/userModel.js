const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name!'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter your email!'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter your password!'],
    },
    role: {
      type: Number,
      default: 0, // 0 = user, 1 = admin
    },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/dhbn0fate/image/upload/v1639032523/fanor/fanor.jpg',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Users', userSchema);
