const mongoose = require("mongoose");

// url =
//   "mongodb+srv://jeeevshtewatia:surender0@cluster0.kg0ibqs.mongodb.net/TaskManager?retryWrites=true&w=majority";
const connectDB = async (req, res) => {
  try {
    const connect = mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB COnnected : ${connect}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;

//Will put in server.js to connect DB

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
