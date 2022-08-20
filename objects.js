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
