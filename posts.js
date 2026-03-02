const loadPost = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((json)=>displayPost(json))
};
//receiving array of object
//  const displayPost=(posts)=>{
//     //1.get the container
//   const postContainer=document.getElementById('post-container');
//   postContainer.innerText='';
//   //console.log(postContainer);

//     posts.forEach(post=>{
//         console.log(post.title);
//         //create HTML element
//         const li=document.createElement('li');
//         li.innerText=post.title;
//         console.log(li);

//         //3.add li into container

//         postContainer.appendChild(li);
//     })
//     // for(let post of posts){
//     //     console.log(post);
//     // }
//     // for(let i =0;i<=posts.length;i++){
//     //     console.log(posts[i]);
//     // }
//  }


// {
//     "userId": 5,
//     "id": 50,
//     "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
//     "body": "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
// }
const displayPost =(posts)=>{
    const postContainer = document.getElementById('post-container');
    postContainer.innerText='';
 posts.forEach(post=>{
    const postCard=document.createElement('div');
    postCard.innerHTML=`
    <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
        //3.add to the container

        postContainer.append(postCard);
 })
}
loadPost();
    
