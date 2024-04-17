import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import generalRoutes from './routes/general.js'
import StudentsRoutes from './routes/Student.js'

// models
import User from './models/User.js';
import Courses from "./models/Courses.js"
import CourseStat from "./models/CourseStat.js"
import { dataUser, dataCourse ,dataCourseStat } from './data/index.js';

// configuration

const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// Routes
app.use("/student",StudentsRoutes);
app.use("/general",generalRoutes);


// mongoose setup
const PORT = 5001;

// const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://07muskangupta:EDUTRACK07@cluster0.mkjxrnb.mongodb.net/?retryWrites=true&w=majority')
// mongoose.connect('mongodb://127.0.0.1:27017/dashboard')
.then(()=>{
    app.listen(PORT,()=>{console.log("mongodb connected")});
    // Courses.insertMany(dataCourse);
    // CourseStat.insertMany(dataCourseStat);
    // User.insertMany(dataUser);

})
.catch((err)=>{console.log(`${err}`)});

