//  apply js in form

console.log("Hello World");

const todoForm = document.querySelector(".form-todo") ;
const todoInput = document.querySelector(".form-todo input[type ='text']") ;
const todoList = document.querySelector(".todo-list");

// console.log(todoInput) ;
todoForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    const newTodoText = todoInput.value ;
    const newLi = document.createElement("li") ;
    const newLiInnerHtml = `
        <span>${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div> ` ;
    newLi.innerHTML = newLiInnerHtml ;
    // console.log(newLi) ;
    todoList.append(newLi);
    todoInput.value = "";
})

//Done and Remove button work
todoList.addEventListener("click", (e) =>{
    // console.log(e.target) ;
    // if use click done
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling ;
        liSpan.style.color = "red" ;

    }
    if(e.target.classList.contains("remove")){
        const liTarget = e.target.parentNode.parentNode ;
        // console.log(liTarget) ;
        liTarget.remove();
    }
})






















































