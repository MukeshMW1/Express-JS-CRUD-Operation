// const express = require('express');
import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url'
// const path = require('path'); 
const app = express();
const port = process.env.PORT || 8000;
// const posts = require('./routes/posts');
import posts from './routes/posts.js';
import logger from  './middleware/logger.js';
import errorHandler from './middleware/error.js';
import notFound from './middleware/notFound.js';


const __filename= fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
//setup static folder
app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{

//  res.sendFile(path.join(__dirname,'public','index.html'))

// });

// app.get('/about',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','about.html'));
// })
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger);
app.use('/api/posts',posts);
app.use(notFound);
app.use(errorHandler);
// app.use('/api/games',games);







app.listen(port,()=>console.log(`server is running in port ${port}`));