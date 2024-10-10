let posts = [

    {
        id:1,
        title:"post 1"
    },
    
    {
        id:2,
        title:"post 2"
    },
    
    {
        id:3,
        title:"post 3"
    },
    
    ]


// GET create post

export const getPosts =(req,res)=>{
    const limit = parseInt(req.query.limit);
    
    if( !isNaN(limit) && limit >0 )
    {
        return  res.json(posts.slice(0,limit));
    }
    
      res.json(posts);
    
    }


//GET one post


export const getPost =(req,res,next)=>{
    
    const id = parseInt(req.params.id);
    const rpost = posts.find((post)=> post.id === id);
    
    console.log(rpost);
    if(!rpost)
    {
        const err = new Error('The required post was not found');
        return next(err);
    }
    
return res.json(rpost);
    }



//create a post

export const createPost =(req,res)=>{
    const newPost ={
        id:posts.length+1,
        title:req.body.title
    }
    if(!newPost && !body.title)
    {
        let err =new Error("The info is not sufficient");
        err.status(501);
        next(err);
    }
    posts.push(newPost);
    res.status(201).json(posts);
    }



// update a post
export const updatePost =(req,res)=>{
    const id = parseInt(req.params.id);
    const updatePost = posts.find((post)=>post.id === id);
if( !updatePost){
    return res.status(400).json({message:`The post with id ${id} is not found`});
}
updatePost.title = req.body.title;

res.status(201).json(posts);


}










//delete a post
export const deletePost = (req,res,next)=>{
    const id = parseInt(req.params.id);
    console.log(id);
    const post=posts.find((post)=>post.id === id);
    
    if(!post)
    {
    let error = new Error('The required post was not found');
    next(err);
    }
    
    posts = posts.filter((post)=>post.id !== id);
    res.status(200).json(posts);
    }