import mongoose from 'mongoose';
import validator from 'validator';

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: [3, 'FirstName must be at least 3 digits!'],
    maxlength: [30, 'FirstName contain only 30 digits!'],
  },
  lastName: {
    type: String,
    required: true,
    minlength: [3, 'lastName must be at least 3 digits!'],
    maxlength: [30, 'lastName contain only 30 digits!'],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'provide valid email'],
  },
  phone: {
    type: String,
    required: true,
    minlength: [11, 'phone number must be at least 11 digits!'],
    maxlength: [11, 'phone contain only 11 digits!'],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

export const Reservation = mongoose.model('Reservation', reservationSchema);
