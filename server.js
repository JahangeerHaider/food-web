import express from "express";
import cors from "cors";
import reservationRouter from "./routes/reservationRouter.js";

const app = express();

// CORS
app.use(
  cors({
    origin: process.env.Frontend_URL, // use env variable
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Make sure OPTIONS requests work
app.options("*", cors());

// Body parser
app.use(express.json());

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
