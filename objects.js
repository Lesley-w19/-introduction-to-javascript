// ENCAPSULATION
// --  is the ability of an object to be a container for its member properties ie variables or methods.
// -- only restricts users to the function in the setter methods
// -- also is a form of hiding some properties. by making data members private using  var keyword.

class Person {
  constructor() {
    var name;
  }

  // facilitates write only acces
  setName(name) {
    this.name = name;
  }

  // facilitates read only access
  getName() {
    return this.name;
  }
}

var child = new Person();
child.setName("John");
console.log(child.name);
//John

// INHERITANCE
// where properties form the parents are inherited by the child
// uses the keyword extends
class Parent {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.child_age = age;
  }
}

const details = new Child("Jacob", 67);
details.greet();
console.log(details.child_age);

let todoList = document.querySelector(".todo-list");
let listData = JSON.parse(localStorage.getItem("todoList"));

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

  // saving the todo item in the API of localStorage
  saveTodo(todo);

  //reset the form fields
  resetForm();
};

// saving the todo item in the API of localStorage
const saveTodo = (todo) => {
  try {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify(todoData));
    } else {
      let storage = JSON.parse(localStorage.getItem("todoList"));
      storage.push(todo);
      localStorage.setItem("todoList", JSON.stringify(storage));
      listData = [...listData, todo];
      // console.log(storage);
    }
  } catch (error) {
    console.log(error);
  }
};

// function reset form
const resetForm = () => {
  document.querySelector(".todo-title").value = "";
  document.querySelector(".todo-about").value = "";
};

// read the todoList, display the todo list contents in page
const readTodoList = () => {
  const list =
    listData &&
    listData
      .map((data) => {
        return `<div class="col-sm-12 todo-abt" id=${data.id}>
       <div class="mb-3" >
         <h5 class="title">${data.title}</h5>
         <p class="description">${data.about}</p>
       </div>
       <div>
         <button class="btn btn-edit text-primary" id="btnEdit" onclick = "editTodo">
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

  if (listData && listData.length >= 1) {
    todoList.innerHTML += list;
  } else {
    todoList.innerHTML += `<div class="col-sm-12 todo-abt mt-2 text-center">
  <div class="mb-3 text-center">
    <h6 class="title text-danger font-italic ">No records of todos</h6>
  </div>
</div>
  `;
  }

  return todoList;
};

//read to generate the list of tasks
window.addEventListener("DOMContentLoaded", () => readTodoList());

//update the todolist
() => {
  const btnEdit = document.getElementById("btnEdit");
  const editTodo = btnEdit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.currentTarget.parentNode);
  });
};

// sync task

// delete function
const deleteTodo = (event) => {
  const deleteData = event.currentTarget.parentNode.parentNode;
  const task_id = deleteData.getAttribute("id");
};

// remove the task data
const del = () => {
  const btnDelete = document.querySelector(".btnDelete");
  btnDelete.addEventListener("click", (e) => deleteTodo(e));
};
