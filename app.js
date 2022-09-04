// selectors
const todoInput=document.querySelector('.todo-input');
const todoButton =document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');
const filterOp=document.querySelector('.filter')

// event Listener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteClick);
filterOp.addEventListener('click',filterTodo);


// Function
function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newLi=document.createElement("li");
    newLi.innerText = todoInput.value;
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
    todoInput.value ='';
}
function deleteClick(e){
    e.preventDefault();
    const item = e.target;
    if(item.classList[0]==="delete-button"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend",function(){
            todo.removw;
        })
    }
    if(item.classList[0]==="complete-btn"){
        const todo =item.parentElement;
        todo.classList.toggle("complated");
    }
}
function filterTodo(e){
    e.preventDefault();
    const todoes=todoList.childNodes;
    todoes.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display="flex"
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display ="flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
        }
    })

}
