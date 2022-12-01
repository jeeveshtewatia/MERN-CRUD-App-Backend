const dotenv = require("dotenv").config();
const express = require("express");
// const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
// const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8000;

//Middlewares
app.use(cors());
app.use(express.json()); // will show the data //get rid of undefined

app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", taskRoutes);

// const logger = (req, res, next) => {
//   console.log("middleware working");
//   console.log(req.method);
//   next();
// };

//ROUTES
app.get("/", (req, res) => {
  res.send("home  ");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`server is running in ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// const startServer = async (req, res) => {
//   try {
//     await connectDB();
//     app.listen(PORT, (req, res) => {
//       console.log(`server is running in ${PORT}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// startServer();
