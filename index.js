import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
const app = express();

import bodyParser from "body-parser";
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(cors());
app.use(express.json());
app.use("/books", booksRoute);
// app.use(
//   cors({
//     origin: "http://localhost:5173", // You can specify the allowed origin here
//     methods: "GET,POST,PUT,DELETE,OPTIONS", // Specify the allowed methods
//     allowedHeaders: "Content-Type, Authorization", // Specify the allowed headers
//   })
// );
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN Stack Tutorial");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
