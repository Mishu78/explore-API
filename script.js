const loadData=()=>{
fetch('https://jsonplaceholder.typicode.com/todos/1')
//promise of response
      .then(response => response.json())
      .then(data => console.log(data))
};

const loadPost=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((json)=>displayPost(json))
};
const displayPost =(posts)=>{
    posts.forEach(post=>{
        console.log(post);
    })
}
