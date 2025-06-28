import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { tableRouter } from "./routes/tableRouter.js";

const app = express();

// ✅ Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ EJS Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
app.use("/", tableRouter);

export default app;
