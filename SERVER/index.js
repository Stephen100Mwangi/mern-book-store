// Import express framework
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import book route
// import router from './Routes/booksRoutes.js';
import booksRouter from './Routes/booksRoutes.js'

// Import Book Model
import { Book } from './Models/BookModel.js';

// initialize app
const app = express();
dotenv.config();

// To allow JSON content
app.use(express.json());
app.use(cors());
// Path and callback function parameters
app.get("/", (req,res)=>{
    res.status(200).send("Welcome to MERN Book Store");

})

app.use("/books", booksRouter);
// To connect to mongoose
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Successful connection to database");

    // The app should only listen to PORT when connection is successful

    // Listen to PORT
app.listen(process.env.PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})


}).catch((error) => {
    console.log("Connection to database Failed" + error);
})