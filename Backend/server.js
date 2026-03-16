import express from "express";
import {config} from "dotenv";
import mongoose from "mongoose";
import { doctorRoute } from "./Apis/doctorApi.js";
import { patientRoute } from "./Apis/patientApi.js";
import { appointmentRoute } from "./Apis/appointmentApi.js";
import { authRoute } from "./Apis/authApi.js";
import { prescriptionRoute } from "./Apis/prescriptionApi.js";

config()
const app=express()
app.use(express.json())

//connect APIs
app.use("/doctor-api",doctorRoute)
app.use("/patient-api",patientRoute)
app.use("/appointment-api",appointmentRoute)
app.use("/auth-api",authRoute)
app.use("/prescription-api",prescriptionRoute)

//connect to db
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("DB connection sucess")

        //start http server
        app.listen(process.env.PORT,()=>console.log(`server started on port ${process.env.PORT}`))
    }
    catch(err){
        console.log("Err in DB connection",err)
    }
}
connectDB();



//dealing with invalid path
app.use((err, req, res, next) => {

  console.log("Error name:", err.name);
  console.log("Error code:", err.code);
  console.log("Full error:", err);

  // mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // mongoose cast error
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "error occurred",
      error: err.message,
    });
  }

  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  if (err.status) {
    return res.status(err.status).json({
      message: "error occurred",
      error: err.message,
    });
  }

  // default server error
  res.status(500).json({
    message: "error occurred",
    error: "Server side error",
  });
});
