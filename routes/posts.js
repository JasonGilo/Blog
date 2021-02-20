const express = require('express');
const Posts = require('../models/Post');
const router = express.Router();

router.get('/', async (req, res)=>{
    //res.send('On route POSTS');
    try{
        const posts = await Posts.find();
        res.json(posts)
    }catch(err){

    }
})

router.get('/:id', async (req, res)=>{
    //res.send('On specific post!');
    console.log(req.params.id);
    try{
    const post = await Posts.findById(req.params.id);
    res.json(post);
    }catch(err){
        res.json({message: err})
    }
})


//Submit Post
router.post('/', async (req, res)=>{
    
    const Post = new Posts({
        title: req.body.title,
        description: req.body.description
    })
    try{
    const savedPost = await Post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message:err})
    }
})

//Delete Post
router.delete('/:id', async (req, res)=>{
    //res.send('On specific post!');
    try{
    const post = await Posts.remove({_id:req.params.id})
    res.json(post);
    }catch(err){
        res.json({message: err})
    }
})

//Patch Post
router.patch('/:id', async (req, res)=>{
    //res.send('On specific post!');
    try{
    const post = await Posts.updateOne({_id:req.params.id}, {$set: {title: req.body.title}})
    res.json(post);
    }catch(err){
        res.json({message: err})
    }
})


module.exports = router;