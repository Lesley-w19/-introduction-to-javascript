const btnAdd = document.querySelector(".btn-add");

class Todo {
  constructor(name, about) {
    this.name = name;
    this.about = about;
  }
}
const todoData = [];
var selectedRow = null;

// creating the new todoitem
const createTodo = () => {
  const title = document.querySelector(".todo-title").value;
  const about = document.querySelector(".todo-about").value;
  const todoItem = new Todo(title, about);
  const todo = {
    id: Math.random().toString(36).substring(2, 15),
    title: todoItem.name,
    about: todoItem.about,
  };
  todoData.push(todo);
  //   console.log(todoData);

  // saving the todo item in the API of localStorage
  saveTodo(todo);

  //reset the form fields
  resetForm();

  //read to generate the list of tasks
  readTodoList();
};

const saveTodo = (todo) => {
  try {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify(todoData));
    } else {
      let storage = JSON.parse(localStorage.getItem("todoList"));
      storage.push(todo);
      localStorage.setItem("todoList", JSON.stringify(storage));
      console.log(storage);
    }
  } catch (error) {
    console.log(error);
  }
};

// function reset form
const resetForm = () => {
  document.querySelector(".todo-title").value = "";
  document.querySelector(".todo-about").value = "";

  selectedRow = null;
};

// read the todoList
const readTodoList = () => {
  const todoList = document.querySelector(".todo-list");
  const listData = JSON.parse(localStorage.getItem("todoList"));

  const list = listData
    .map((data) => {
      return `<div class="col-sm-12 todo-abt">
       <div class="mb-3">
         <h5 class="title">${data.title}</h5>
         <p class="description">${data.about}</p>
       </div>
       <div>
         <button class="btn btn-edit text-primary" >
           <i class="fa fa-pencil-square" aria-hidden="true"></i>
         </button>
         <button class="btn text-danger">
           <i class="fa fa-trash" aria-hidden="true"></i>
         </button>
       </div>
     </div>
       `;
    })
    .join("");

  //   console.log(listData);

  if (listData.length >= 1) {
    todoList.innerHTML += list;
  } else {
    todoList.innerHTML += `<div class="col-sm-12 todo-abt">
  <div class="mb-3 text-center">
    <h4 class="title">No records of todos</h4>
  </div>
</div>
  `;
  }

  return todoList;
};
readTodoList();

//update the todolist
