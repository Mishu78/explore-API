const loadTodo=()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>res.json())
    .then((json)=>displayTodo(json))
}
const displayTodo =(todos)=>{
    const todoContainer=document.getElementById('todo-container');
    todoContainer.innerText='';
    
    todos.forEach(todo=>{
console.log(todo);
    })
}
loadTodo();