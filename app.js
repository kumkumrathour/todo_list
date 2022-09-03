// selectors
const todoInput=document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList=document.querySelector('todo-list');



// event Listener
todoButton.addEventListener('click',addTodo);




// Function
function addTodo(event){
    // event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newLi=document.createElement("li");
    newLi.innerText = "delete or check"
    newLi.classList.add("todo-item");
    todoDiv.appendChild(newLi);    
    // create mark button
    const markButton=document.createElement("button");
    markButton.innerHTML= `<i class="fa-solid fa-check-to-slot"></i>`;
    markButton.classList.add("complete-btn");
    todoDiv.appendChild(markButton);
    //create delete button
    const delButton=document.createElement("button");
    delButton.innerHTML =` <i class="fa-solid fa-trash-arrow-up"></i>`;
    delButton.classList.add("delete-button");
    todoDiv.appendChild(delButton);
    // to append the list
    todoList.appendChild(todoDiv)

}