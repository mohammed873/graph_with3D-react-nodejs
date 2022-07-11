const mongoose = require("mongoose");

// connect our database:
const connectDB = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("mongoDB connected");
};

module.exports = connectDB;