import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import userRouter from './Routes/user.js'
import contactRouter from './Routes/contact.js'
import { config } from "dotenv";

const app = express();

app.use(bodyParser.json());

// .evn setup
config({path:'.env'})

// user Router
app.use("/api/user",userRouter);

// contact Router 
app.use('/api/contact',contactRouter)


// home route
app.get("/", (req, res) => {
  res.json({ message: "This is home route working" });
});



mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "NodeJs_Mastery_Course",
  })
  .then(() => console.log("MongoDb Connected..!"))
  .catch((err) => console.log(err));

const port = process.env.PORT;
app.listen(port, () => console.log(`server is running on port ${port}`));