

const formInput = document.querySelector(".form-Input");
const buttonSum= document.querySelector(".btn-summit");
const todoList = document.querySelector(".todo-list");
// const todoValue= document.querySelector(".todo")

buttonSum.addEventListener('click',addFunTodo())






function addFunTodo(e){
    // e.preventDefault();
    const todoValuDiv =document.createElement('div');
    todoValuDiv.classList.add('todo');

    const newTodo=document.createElement('li');
    newTodo.innerText ='click';
    newTodo.classList.add('todo-items');
    todoValuDiv.appendChild(newTodo);

    const complButton=document.createElement('button');
    complButton.innerHTML=`<i class="fa-solid fa-check-to-slot"></i>`;
    complButton.classList.add('compl-button');
    todoValuDiv.appendChild(complButton);

    const removebutton=document.createElement('button');
    removebutton.innerHTML=`<i class="fa-solid fa-trash"></i>`;
    removebutton.classList.add('remove-button')
    todoValuDiv.appendChild(removebutton);

    todoList.appendChild(todoValuDiv);



}