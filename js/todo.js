const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const picture = document.getElementById("header_img");
const topIMG = document.getElementById("top_img");

const toDoAdd = document.getElementById("todo-list-add-btn");
const toDoInput = document.getElementById("todo-list-input");
const toDoList =document.getElementById("todo-list");
const inputCheckbox = document.getElementsByClassName("checkbox");


const listWrapper = document.querySelector(".list-wrapper");

toDoAdd.addEventListener("click", handleToDoSubmit);
toDoList.addEventListener("change", onchange);


const JWT_KEY = "JWT";
const jwt = localStorage.getItem(JWT_KEY);
if (jwt != null){
    getGoogleData(jwt);
}else{
    window.location.href = "login.html";
}


let todos = [];
let completedTodos = [];
const TODOS_KEYS = JSON.parse(jwt).email;

function getGoogleData(jwt){
    const jwtJson = JSON.parse(jwt);
    fullName.innerText = `${jwtJson.given_name + jwtJson.family_name}`;
    email.innerText = `${jwtJson.email}`;
    const pic = `${jwtJson.picture}`;
    topIMG.src = pic;
}


function saveToDo(){
    localStorage.setItem(TODOS_KEYS, JSON.stringify(todos));
}

function handleToDoSubmit(event){
    event.preventDefault();

    const newTodo = toDoInput.value
    toDoInput.value = "";

    const newTodoObj = {
        id: Date.now(),
        text: newTodo,
        complete: false,
        date: getTime()
    } 

    // <h4 class="card-title">2022-8-15</h4>

    todos.push(newTodoObj);
    addTodo(newTodoObj);
    saveToDo();
}


function addTodo(item){
    console.log(item);
    const li = document.createElement("li");
    li.id = item.id;
    const div = document.createElement("div");
    div.className='form-check';
    const label = document.createElement("label");
    label.textContent = item.text;
    label.className = 'form-check-label';
    const input = document.createElement("input");
    input.className = "chec";
    input.value = item.id;
    input.type = 'checkbox';
    if(item.complete === true){
        input.checked = true;
        li.className = "completed";
    }
    const inputHelper = document.createElement("i");
    inputHelper.className = 'input-helper';
    const i = document.createElement("i");
    i.classList = 'remove mdi mdi-close-circle-outline';
    i.addEventListener("click", deleteTodo);

    label.appendChild(input);
    label.appendChild(inputHelper);
    div.appendChild(label);
    li.appendChild(div);
    li.appendChild(i);
    toDoList.appendChild(li);
}

function deleteTodo(event){
    const deleteli = event.target.parentElement;
    deleteli.remove();
    todos = todos.filter((value)=> value.id !== parseInt(deleteli.id)); // string으로 변환 필요
    saveToDo();
} 


function paintTodos(){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    let compTodos = [];
    let uncompTodos = []
    parsedToDos.forEach((value)=>{
        if(value.complete === true){
            compTodos.push(value);
        }else{
            uncompTodos.push(value);
        }
    });
    const orderedTodos = compTodos.concat(uncompTodos);
    orderedTodos.forEach(addTodo);
}

const savedToDos = localStorage.getItem(TODOS_KEYS);

if(savedToDos != null){
    paintTodos();
}



function onchange(event){
    const changeli = event.target.value;
    const li = document.getElementById(changeli);
    if(event.target.checked){
        li.className = "completed";
        todos.forEach((value)=>{
            if (value.id === parseInt(changeli)){
                value.complete = true;
            }
        })
        
    }else{
        li.className="";
        todos.forEach((value)=>{
            if (value.id === parseInt(changeli)){
                value.complete = false;
            }
        })

    }
    saveToDo();
    location.reload(true);
}

