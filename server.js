import express from "express";
import cors from "cors";
import reservationRouter from "./routes/reservationRouter.js";

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "https://food-web-nu-black.vercel.app", // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // include OPTIONS
    allowedHeaders: ["Content-Type", "Authorization"], // allow these headers
    credentials: true,
  })
);

// Handle preflight OPTIONS requests globally
app.options("*", cors());

// Body parser
app.use(express.json());

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Start server
app.listen(process.env.PORT || 8080, () => {
  console.log("Server running on port", process.env.PORT || 8080);
});
