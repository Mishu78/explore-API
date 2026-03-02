const loadTodo=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>res.json())
    .then((json)=>displayTodo(json))
}
const displayTodo =(todos)=>{
    const todoContainer=document.getElementById('todo-container');
    todoContainer.innerText='';
    
    todos.forEach(todo=>{
//console.log(todo);
const todoCard=document.createElement('div');
todoCard.innerHTML=
`
<div class='todo-card'>
<p>${todo.completed}</p>
<h2>${todo.title}</h2>
</div>
`;
todoContainer.append(todoCard);
    });
};
loadTodo();