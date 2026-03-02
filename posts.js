const loadPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((json)=>displayPost(json))
};

 const displayPost=(posts)=>{
    // posts.forEach(post=>{
    //     console.log(post);
    // })
    // for(let post of posts){
    //     console.log(post);
    // }
    for(let i =0;i<=posts.length;i++){
        console.log(posts[i]);
    }
    }
    
