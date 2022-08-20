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

const saveTodo = (todo) => {
  try {
    if (localStorage.getItem("todoList") === null) {
      localStorage.setItem("todoList", JSON.stringify(todoData));
    } else {
      let storage = JSON.parse(localStorage.getItem("todoList"));
      storage.push(todo);
      localStorage.setItem("todoList", JSON.stringify(storage));

      listData = [...listData, todo];
      readTodoList();
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

  selectedRow = null;
};

// read the todoList
const readTodoList = () => {
  const list =
    listData &&
    listData
      .map((data) => {
        return `<div class="col-sm-12 todo-abt" id=${data.id}>
       <div class="mb-3" >
         <h5 class="title text-light">${data.title}</h5>
         <p class="description">${data.about}</p>
       </div>
       <div>
         <button class="btn btn-edit text-primary" id="btnEdit" >
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
    todoList.innerHTML += `<div class="col-sm-12 todo-abt  mt-2 text-center">
  <div class="mb-3  todo-err">
    <h6 class="title text-danger font-italic text-center">No records of todos</h6>
  </div>
</div>
  `;
  }

  return todoList;
};

//read to generate the list of tasks
readTodoList();

//update the todolist
if (listData.length > 0) {
  const btnEdit = document.getElementById("btnEdit");

  btnEdit.addEventListener("click", (e) => {
    e.preventDefault();
    const task_id = e.currentTarget.parentNode.parentNode.getAttribute("id");

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
  });
}

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
    saveTodo(updatedTodo);
  });
};

// sync task
const syncTask = () => {
  window.localStorage.setItem("todoList", JSON.stringify(todoData));
  listData = JSON.parse(window.localStorage.getItem("todoList"));
};

// delete function
const deleteTodo = (event) => {
  const deleteData = event.currentTarget.parentNode.parentNode;
  const task_id = deleteData.getAttribute("id");
  todoList.removeChild(deleteData);
  listData.forEach((lstData, i) => {
    if (lstData.id === task_id) {
      listData.splice(i, 1);
    }
  });
  // console.log(listData);
  syncTask();
};

// remove the task data
const btnDelete = document.querySelector(".btnDelete");
btnDelete.addEventListener("click", (e) => deleteTodo(e));
