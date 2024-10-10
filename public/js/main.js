const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');
const form = document.querySelector('#add-post-form');


async function getPosts() {
try{
    const res= await fetch('http://localhost:8000/api/posts');
    if(!res)
    {
        throw new Error('Failed to fetch api');

    }
    const posts=await res.json();

    output.innnerHTML ='';

    posts.forEach((post)=>{

        const postEl = document.createElement('p');
        postEl.textContent = post.title;
        output.appendChild(postEl);

    })
}
catch(err){
    console.log("Error fetching the api ",err);
}
}







async function addPost(e){
    e.preventDefault()
const formData =new FormData(this);
const title =formData.get('title');


    try{
const res =await fetch('http://localhost:8000/api/posts',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({title}),
})


if(!res.ok)
{
    throw new Error("Error in fetching ");
}
const newPost = await res.json();
console.log(newPost);
alert('New Post added');
    }
    catch(err)
    {
        console.log('Error creating a post',err);
    }

}













button.addEventListener('click',getPosts);
form.addEventListener('submit',addPost);