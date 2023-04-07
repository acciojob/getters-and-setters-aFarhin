class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

const john = new Teacher('John', 40);
console.log(john.name); // 'John'
john.age = 45;

const alice = new Student('Alice', 20);
console.log(alice.name); // 'Alice'
alice.age = 22;

john.teach(); // 'John is teaching'
alice.study(); // 'Alice is studying'

