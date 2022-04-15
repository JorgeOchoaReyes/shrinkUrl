import express from "express";
import cors from "cors";
import { urlencoded, json } from "body-parser";
const createUrl = require('./src/mutations/createUrl');
const deleteUrl = require('./src/mutations/deleteUrl');
const redirect = require('./src/queries/redirect');
import mongoose from "mongoose"; 

const app = express(); 
require('dotenv').config();
const uri = process.env.DB_URI as string;

mongoose.connect(uri)
.then(() => console.log('You have Successfully Connected MongoDb!'))
.catch((err: any) => console.error("There was an error connecting with mongoose: " + err));


app.use(json()); 
app.use(cors()); 
app.use(urlencoded({extended: true}));
app.use('/createUrl', createUrl);
// app.use('/deleteUrl', deleteUrl); 
app.use('/', redirect)

app.listen(3001, () => {
    console.log("Listening on port 3001");
})
