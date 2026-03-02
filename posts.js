const loadPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((json)=>displayPost(json))
};
//receiving array of object
 const displayPost=(posts)=>{
    //1.get the container
  const postContainer=document.getElementById('post-container');
  postContainer.innerText='';
  //console.log(postContainer);

    posts.forEach(post=>{
        console.log(post.title);
        //create HTML element
        const li=document.createElement('li');
        li.innerText=post.title;
        console.log(li);

        //3.add li into container

        postContainer.appendChild(li);
    })
    // for(let post of posts){
    //     console.log(post);
    // }
    // for(let i =0;i<=posts.length;i++){
    //     console.log(posts[i]);
    // }
    }
    
