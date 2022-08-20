// JavaScript Prototype

// -- Prototypes are the mechanism by which JavaScript objects inherit features from one another. In JavaScript, every function and object has a property named prototype by default.

// 1. Prototypes
// create the constructor function
function Todo() {
  (this.title = "Working out"), (this.description = "Every morning workout");
}

//make the objects
const task1 = new Todo();
const task2 = new Todo();

Todo.prototype.title = "Task 1";

console.log(task1.title);
//Working out
console.log(task2.title);
//Working out

task1.title = "Going to work";
task2.description =
  "When we take care of ourselves, we are sending messages to our brains that sculpt our self-worth. Taking care of yourself mentally and physically should be non-negot";
console.log(task1.title);
//Going to work
console.log(task2.description);
//When we take care of ourselves, we are sending messages to our brains that sculpt our self-worth. Taking care of yourself mentally and physically should be non-negot

//2. You can also add PROPERTY TO THE CONSTRUCTOR FUNCTIONS

//create constructor
function Todos() {
  (this.title = "Working out"), (this.description = "Every morning workout");
}

//make the objects
const task_1 = new Todos();
const task_2 = new Todos();

//add property
Todos.prototype.iscompleted = false;

console.log(task_1.iscompleted);
//false

task_1.iscompleted = true;
console.log(task_1.iscompleted);
//true
