require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db_config/db");

const app = express();
app.use(express.json());

//using cors
app.use(cors());

//connect to mongoDB
connectDB();

//youngPeopleRouter router
const youngPeopleRouter = require("./routes/youngPeopleRoute");
app.use("/youngPeople", youngPeopleRouter);

// sentences router
const sentencesRouter = require("./routes/genZRoute");
app.use("/sentences", sentencesRouter);

//starting server
const server = app.listen(process.env.PORT, () =>
  console.log(`the server is running on port ${process.env.PORT}`)
);