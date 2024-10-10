// const express = require('express');
import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../.vscode/controller/postController.js';
const router = express.Router();
    
    
    //get all posts
    router.get('/',getPosts);
    
    
    ///get a single posts
    
    
    router.get('/:id',getPost);

// body parser/create a post
router.post('/',createPost);

//Put request


router.put('/:id',updatePost);


//Delete request

router.delete('/:id',deletePost);






    // module.exports = router;
    export default router;