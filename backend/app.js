import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import { connectDB } from "./DB/Database.js";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
import adminRoute from "./Routers/adminRouter.js";

// Load env
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

console.log("Loaded MONGO_URL:", process.env.MONGO_URL);

// Connect DB
connectDB();

/* ============================================
   ✅ CORS FIX — DYNAMIC ORIGIN CHECK
=============================================== */
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:3001",
  "https://expensemanagingapp.netlify.app",
  // Add your Netlify/Vercel frontend URL here later
  // "https://your-frontend.netlify.app"
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  // If no origin (e.g., mobile apps, postman), skip CORS check
  if (!origin) return next();

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET,POST,PUT,DELETE,OPTIONS"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    // Preflight request
    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }

    return next();
  } else {
    console.warn("❌ BLOCKED ORIGIN:", origin);
    return res.status(403).json({
      success: false,
      message: "CORS Error: This origin is not allowed",
    });
  }
});

/* ============================================
   Middleware
=============================================== */
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* ============================================
   Routes
=============================================== */
app.use("/api/v1", transactionRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

/* ============================================
   Start Server
=============================================== */
app.listen(port, () => {
  console.log(`🚀 Server is listening on http://localhost:${port}`);
});
