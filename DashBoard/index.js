import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import generalRoutes from './routes/general.js'

// models
import User from './models/User.js';

import { dataUser } from './data/index.js';

// configuration

dotenv.config();
const app = express();
app.use(express.json);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// Routes

app.use("/general",generalRoutes);

// mongoose setup
const PORT = process.env.PORT;
// const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/dashboard').then(()=>{
    app.listen(PORT,()=>{console.log("mongodb connected")});
    // User.insertMany(dataUser);

}).catch((err)=>{console.log(`${err}`)});
