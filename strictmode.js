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