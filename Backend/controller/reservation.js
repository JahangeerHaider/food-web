import ErrorHandeler from '../error/error.js';
import { Reservation } from '../models/reservationSchema.js';

export const sendReservation = async (req, res, next) => {

  
  const { firstName, lastName, email, phone, time, date } = req.body;

  if (!firstName || !lastName || !email || !phone || !time || !date) {
    return next(new ErrorHandeler('Please fill the full form', 400));
  }

  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      time,
      date,
    });

    res.status(200).json({
      success: true,
      message: 'Reservation successfully sent!',
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandeler(messages.join(', '), 400));
    }
    return next(error);
  }
};
