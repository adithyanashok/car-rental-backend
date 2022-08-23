import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import carRouter from "./routes/cars.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import orderRouter from "./routes/order.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();
// MONGODB CONNECTION
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected To Database");
  } catch (err) {
    throw err;
  }
};

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/api/cars", carRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/order", orderRouter);

// Error Handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

// Server
app.listen(8800, () => {
  connect();
  console.log("Backend Server Running...");
});
