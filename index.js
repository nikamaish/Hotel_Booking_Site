import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotel.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from 'cookie-parser';
import cors from "cors";
// npm install cors

// what we do in this whole mern folder, we create api name folder in that folder we add crete subfolders named controllers, modelsm, routes so if we create express folder then node modules and index.js file will be created they are out of api folders so to do that we need to add package lock and only json files  in api folder and also add index file and node modules  in api folders but for that we need make change in json file 
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1",
//   "start": "NODE_OPTIONS='--experimental-specifier-resolution=node' node src/index.js"
// },

// and also before all of this we need 


const app = express();
// const cors = require('cors'); 
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1/expressnode');
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);




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

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});