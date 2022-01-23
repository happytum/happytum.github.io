const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const savedToDos = localStorage.getItem(TODOS_KEY);

let toDos = [];


function onDisplayDelIcon(event) {
    console.log(event.target);
    const i = event.target.parentElement.childNodes[1];
    i.classList.remove("hidden");
}
function offDisplayDelIcon(event) {
    const i = event.target.parentElement.childNodes[1];
    i.classList.add("hidden");
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // key, value  
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    const targetIndex = toDos.findIndex(i => i.id == li.childNodes[0].id);
    // // toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)) ; // targetId와 다른 것만 true
    li.remove();
    toDos.splice(targetIndex, 1);
    saveToDos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.id = newTodoObj.id;
    span.innerText = `${newTodoObj.text}\u00a0\u00a0`;
    
    const i = document.createElement("i");
    i.setAttribute("class", "fas fa-backspace");
    i.classList.add("hidden");
    // span.innerHTML = '<i class="fas fa-backspace"></i>'
    i.addEventListener("click", deleteToDo);
    li.addEventListener("mouseover", onDisplayDelIcon);
    li.addEventListener("mouseout", offDisplayDelIcon);

        
    li.appendChild(span);
    li.appendChild(i);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // item 하나 하나에 각각 함수 적용
    //parsedToDos.forEach((item) => {function}) 같음
}

