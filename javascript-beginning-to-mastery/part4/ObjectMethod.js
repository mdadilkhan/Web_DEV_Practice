// >>>>>>>> How to check method of object <<<<<<<<<<<

const userObj={
    firstName:"Md Adil Khan",
    age:24
 }
 const userObj2=new Object()
 userObj2.firstName="Md adil Khan"
//both below two line is same
 console.log(Object.prototype);//It gives the prototype object from which your object inherits — which is Object.prototype
 console.log(Object.getPrototypeOf(userObj))//It gives the prototype object from which your object inherits — which is Object.prototype
 //You're inspecting the prototype object that is shared by all objects created from Object.This gives you the instance methods that every object inherits by default.
//  console.log(Object.getOwnPropertyNames(Object.prototype));
 // below line You're inspecting the Object constructor function itself (the global Object function).This gives you static methods available directly on Object, like:
 console.log(Object.getOwnPropertyNames(Object)); 



// 5 ways to crate object in js


//>>>>>>>>>>>>>>>>>>> 1. Using Object Literal (most common) <<<<<<<<<<<<<<<<
// ✅ Easiest and most readable syntax
// ✅ Best for creating single or a few objects
// ❌ Not reusable or scalable for creating multiple similar objects
const person={
    name:"Md Adil Khan",
    age:24
}
console.log(person)

//>>>>>>>>>>>>>>> 2. Using new Object() <<<<<<<<<<<<<<
// Essentially the same as object literals, just more verbose.
// ✅ Dynamically adds properties
// ❌ Rarely used, no big advantage over literals
const person1=new Object()
person1.name="Md asif Khan"
person1.age=22
console.log(person1)


//>>>>>>>>>>>>>>>>> 3. Using Constructor Function <<<<<<<<<<<<<<<<<<
// ✅ Useful for creating multiple objects with the same structure
// ✅ Each instance has its own copy of properties
// ✅ Can use prototype to share methods
// ❌ Can get messy; better replaced by class syntax in modern JS


//static contructor function
function Person(){
    this.name="Md Aamir khan"
    this.age=26
}
const person2=new Person()
console.log(person2)
//dynamic cnstructor fucntion
function Person1(name,age){
    this.name=name
    this.age=age
    this.about=function(){
        console.log(`my name ${this.name} and age is ${this.age}`);
        
    }
}
const person3=new Person1("Md Adnan Khan",18)
person3.about()





//>>>>>>>>>>>>>> 4. Using Object.create() <<<<<<<<<<<<<<<<

// it create an empty object but must have proto object paassed in create() function to attach the feature of proto object inside newly created empty object
//below line is the syntax starts
// inside protoo you can have any no of function which is available to all the obejct created 
const proto={

}
const obj = Object.create(proto);
// syntax ends


const person4={
    name:'Adil',
    age:24,
    greet:function(){
        console.log(`hii my name is ${this.name} an my age is ${this.age}`)
    },
    
}

const obj2=Object.create(person4)
console.log(">>",obj2)//this line will show you empty object bec i didnt add any key value in this objec but i have attached the proto object
console.log("__proto__",obj2.__proto__)// this line will show you the attached proto object
console.log(Object.getPrototypeOf(obj2)); // this line will also show you the attached proto object










// >>>>>>>>>>>>>> 5. Using Class (ES6+) <<<<<<<<<<<<<<<<<<




class Students {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hi, I'm ${this.name}`;
    }
  }
  
  const p1 = new Students("John", 30);
  console.log(p1.greet());
  






//   >>>>>>>>>>>>> Object Method <<<<<<<<<<<<<<<<<<<

// 1. Object.assign(target, ...sources)

//Copies properties from source objects to a target object.
// Shallow copy, not deep.

const obj3={a:1}
const obj4={b:2}
const merged=Object.assign({},obj3,obj4)
console.log(merged);




// Object.entries(obj)

const obj5 = { a: 1, b: 2 };
for (const [key, value] of Object.entries(obj5)) {
  console.log(key, value);
}
// a 1
// b 2

// Object.keys(obj5)
for(const key of Object.keys(obj5)){
    console.log(key);
    
}


// Object.values(obj)
for(const value of Object.values(obj5)){
    console.log(value);
    
}


Object.freeze(obj5)
// Makes an object fully immutable.
// only Reading existing values is allowed
//❌ Disallows:
//Disallows Adding new properties
//Disallows Deleting existing properties
//Disallows Modifying property values
//Disallows Changing property descriptors (writable, configurable, etc.)

Object.seal(obj5)
// Disallows adding/removing properties but allows value changes.


Object.preventExtensions(obj)
// Disallows:
// Adding new properties
// Allows:
// Modifying existing properties
// Deleting properties



// compares two vlaues is equal or not 
// Object.is(value1, value2)
console.log(Object.is(NaN, NaN));      // true
console.log(NaN === NaN);              // false
console.log(Object.is(0, -0));         // false


// Checks if object has own property (not from prototype).
Object.hasOwn(obj, prop)
const obj6 = { a: 1 };
console.log(Object.hasOwn(obj6, 'a')); // true

// // Deleting Properties
delete obj.age


