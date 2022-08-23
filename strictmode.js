//JavaScript Use Strict

// -- it  defines that javascript should be executed in strict mode.
// *** With strict mode, you can not, for example, use undeclared variables.

// Strict mode is declared by adding "use strict" to the beginning of a script.

//--- When declared at the beginning of a script, it has global scope. It specifies that all code in the script will execute in strict mode:

"use strict";
 const create = () =>{
     return;
 } 
 // -- the above has global scope

 const create1 = () =>{
  "use strict";
  //code
 }
 // -- the above has local scope as it is declared inside a function.

 
//NB: ensures all variables in your code are declared



btnEdit.addEventListener("click", (e) => {
    e.preventDefault();
    editTask(e);
  });
  const editTask = (event) => {
    const task_id = event.currentTarget.parentNode.parentNode.getAttribute("id");
    const listData = JSON.parse(localStorage.getItem("todoList"));
  
    //find the task that matches the id
    const taskData = listData.find((tasks) => {
      // console.log(tasks.id);
      return tasks.id === task_id;
    });
    // console.log(taskData);
  
    //add the information to be edited to the form fields
    document.querySelector(".todo-title").value = taskData.title;
    document.querySelector(".todo-about").value = taskData.about;
  
    //show the update button
    document.querySelector(".btn-add").classList.add("hidebtn");
    document.querySelector(".btn-update").classList.remove("hidebtn");
  
    //call the update function
    updateTodo(task_id);
  };
  
  //update the task data
  const updateTodo = (id) => {
    const btnUpdate = document.querySelector(".btn-update");
    const updated_title = document.querySelector(".todo-title").value;
    const updated_about = document.querySelector(".todo-about").value;
    const updatedTodo = {
      id,
      updated_title,
      updated_about,
    };
    btnUpdate.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(updatedTodo);
      // saveTodo(updatedTodo);
    });
  };






  ////////////////
  let todoList = document.querySelector(".todo-list");

class Todo {
  constructor(name, about) {
    this.name = name;
    this.about = about;
  }
}
const todoData = [];

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

  //reset the form fields
  resetForm();

  //read the list and map
  readTodoList();
};

// function reset form
const resetForm = () => {
  document.querySelector(".todo-title").value = "";
  document.querySelector(".todo-about").value = "";
};

// read the todoList
const readTodoList = () => {
  const list =
    todoData &&
    todoData
      .map((data) => {
        return `<div class="col-sm-12 todo-abt" id=${data.id}>
       <div class="mb-3" >
         <h5 class="title text-light">${data.title}</h5>
         <p class="description">${data.about}</p>
       </div>
       <div>
         <button class="btn btn-edit text-primary" id="btnEdit" onclick="editTodo(this)">
           <i class="fa fa-pencil-square" aria-hidden="true"></i>
         </button>
         <button class="btn text-danger btnDelete" >
           <i class="fa fa-trash" aria-hidden="true"></i>
         </button>
       </div>
     </div>
       `;
      })
      .join("");

  // console.log(listData);
  todoList.innerHTML = list;

  return todoList;
};

//update the todo list
const editTodo = (e) => {
  const todoId = e.parentElement.parentElement;
  console.log(todoId);
};
