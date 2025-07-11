// 'use strict'
//definition of this
// (this) is keyword in js whose value depends on how the function is called(run time binding)
// console.log(this)

  //in strict mode this is undefined isnide a fucntion
  //but in non strict mode this is global object
  //this is happening bec of (this substitution) it is a phenomena
  //if the value of this is undefined or null then js  will  replcaed the value of this with  global object only in non-strict mode
function x(){
    //value of this inside fucntion depends on strict/non strict mode
    console.log(this)
}

//by calling fucntion like this this is undefined in strict mode bec no refrence is attached
x()
// but when u call a function using window keyword then the value of this will be replaced with the global object in strict mode

//here i have attached the function x with window object so the value of this will be replaced with the global object
window.x()
console.log(this===window);





const obj={
    name:"Adil",
    age:23,
    greet:function(){
        console.log(this)
        console.log(this.name)
    }
}


obj.greet()


const user={
    name:"adil",
    age:24,
    about:function(){
        console.log("1st",this)
        console.log(`my name is ${this.name} and age is  ${this.age}`)
        const arrow=()=>{
            console.log(this)
        }
        arrow()
    }
}

const user1={
    name:"Asif",
    age:22,
   
}


user.about.call(user)
const func=user.about.bind(user1)

func()


// >>>>>>>>> this in arrow fucntion <<<<<<<<<<<

// arrow fucntion doesnot have binding of this so the value if this keyword inside arrow fucntion is thier lexcial environment
const people={
    name:"adil",
    age:24,
    getDetails:function(){

        const func=()=>{
            console.log("inside",this); //lexical environemt is varibale and method of fucntion getDetails 
            
        }
        func()
        console.log("outside",this); // the value of this is its lexical scope if its a arrow fucntion so for this lexical scope is global spcae that is window
        
        console.log(`my name is ${this.name} and age is ${this.age}`);
        
    }
}
people.getDetails()


// >>>>>>>>>>>> this in Dom <<<<<<<<<<<<<<
// this in dom refers to refrence of current elemnt with the help of this we can get targetName and related things of that element


// >>>>>>>>>>>> call() apply() and bind(). <<<<<<<<<<<<<<

// All three are methods available on functions in JavaScript to explicitly set the value of this when the function is invoked.

// ✅ 1. call() — Immediately calls the function with a given this and arguments
// you can pass n no of arguments
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: "Adil" };
greet.call(person, "Hello", "!"); 
// Output: Hello, Adil!


// ✅ 2. apply() — Similar to call(), but arguments are passed as an array

greet.apply(person, ["Hi", "."]);
// Output: Hi, Adil.

//  ✅ 3. bind() — Returns a new function with this bound, but doesn’t call it immediately

const greetAdil = greet.bind(person, "Hey");
greetAdil("?");
// Output: Hey, Adil?
















// ! >>>>>>>>>>>>>>__proto__ vs prototype <<<<<<<<<<<<<<<<<<<<<

// *✅ What is prototype?

// "Yes, exactly — in JavaScript, when we create a class (or a constructor function), all the methods defined inside the class are automatically stored on the class’s prototype object.
// This prototype is then shared by all instances, which allows method reuse and saves memory."
// so i can say it belong to the property of contructor
// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     return `Hello, ${this.name}`;
//   }
// }

// const user1 = new User("Adil");
// const user2 = new User("Khan");

// console.log(user1.greet()); // Hello, Adil
// console.log(user1.greet === user2.greet); // true ✅ (shared method)

//* ✅  Whats is __proto__?

// "__proto__ is a property on every JavaScript object that holds a reference to the prototype object of its constructor.
// That prototype object (Constructor.prototype) contains all the shared methods and properties."
// so i can say it belong to the property of instance 

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHello = function () {
//   return `Hello, ${this.name}`;
// };

// const p1 = new Person("Adil");

// console.log(p1.__proto__ === Person.prototype); // ✅ true
// console.log(p1.sayHello()); // ✅ Accessed through __proto__
