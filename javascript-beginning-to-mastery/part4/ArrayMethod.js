
// 5 ways to crate object in js


// 1. Using Array Literals (Most common)

// 2. Using Spread Operator

// 3. Using new Array() Constructor

// 4. Using Array.of()

// 5. Using Array.from()

// 6. Using fill() to initialize values



const number=new Array(1,2,3,4)
console.log(number);

//both below two line is same
console.log(Array.prototype);//It gives the prototype object from which your array inherits — which is Array.prototype
console.log(Object.getPrototypeOf(number))//It gives the prototype object from which your array inherits — which is Array.prototype
console.log(Object.getOwnPropertyNames(Array));//This gives the static methods and properties of the Array constructor itself.
console.log(Object.getOwnPropertyNames(Array.prototype)); //This gives instance methods and properties that all arrays inherit.

