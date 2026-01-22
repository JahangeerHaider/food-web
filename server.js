import express from 'express';
import cors from 'cors';

const app = express();

// Allow your frontend to access backend
app.use(
  cors({
    origin: process.env.Frontend_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use(express.json());

// your routes
app.use('/api/v1/reservation', reservationRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running');
});
