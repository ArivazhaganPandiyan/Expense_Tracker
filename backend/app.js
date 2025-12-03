import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

import { connectDB } from "./DB/Database.js";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import adminRoute from "./Routers/adminRouter.js";

// ✅ Load environment variables
dotenv.config();

const app = express();

// ✅ Debug log to confirm env loaded
console.log("Loaded MONGO_URL:", process.env.MONGO_URL);

const port = process.env.PORT || 5000;

// ✅ Connect Database
connectDB();

// ✅ Allowed origins for CORS
const allowedOrigins = [
  "http://localhost:3001",
  // add more frontend URLs here (like Netlify or Vercel later)
];

// ✅ Middleware
app.use(express.json());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ✅ Routes
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoute);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server is listening on http://localhost:${port}`);
});
