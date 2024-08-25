import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationsRoute from "./routes/applications.route.js";


dotenv.config({});

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
}

//middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extented: true }));
app.use(cookieParser());


const PORT = process.env.PORT || 3000;

//apis 
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationsRoute);







app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
})