// ✅ Beginner-Level Questions
// Q1.What is a closure in JavaScript?
//  Function bind togetehr its legical environemnt is called closure.
//  and fucntion also have the ability to remmeber its lexical environemtn

// Q2. Can you give a real-world example of a closure?

// Example: Counter, private variables, setTimeout inside loops, etc.

// closure example
function outest(){
   return function outer(b){
       let a=5; //when this line is below the  fucntion declaration the also form the closure
       function inner(){
           console.log(a,b);
       }
    //    let a=5;
       return inner
   }
}
let a=100
const Outfn=outest()
const fn=Outfn("hello adil")
fn()

// counter fucntion
// also example of data hiding and encapsulation
function Counter(){
    let count=0;
    return function(){
      count++
      console.log(count);
      
    }
}

const count1=Counter()
count1()
count1()
count1()
const count2=Counter()
count2()
count2()
count2()
// above counter is not scalable and much modular 

function CouterFn(){
    let count=0;
    this.increment=function(){
        count++;
        console.log(count);
        
    }
    this.decrement=function(){
       count--;
       console.log(count);
       
    }
}

const newCounter=new CouterFn();
newCounter.increment()
newCounter.increment()
newCounter.increment()
newCounter.increment()
newCounter.decrement()
newCounter.decrement()
newCounter.decrement()
newCounter.decrement()


// solve the belwo code snippet it is printing 3 always
// 1st way to solve this using let instead of var
// 2nd way to solve this using closure
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

function correct(){
   console.log("correct");
   for (var i = 0; i < 3; i++) {
      function closure(i){
       setTimeout(() => console.log(i), 1000);
      }
      closure(i)
   }
}

correct()


// Q3. Why are closures useful?
//    Data privacy, maintaining state, currying, etc.




// ✅ Intermediate to Advanced
// Q4 What is the difference between closure and lexical scope?
    //lexical scope referes the scope of fucntion and varible is determined by the position of functions
    //A closure is a function that "remembers" variables from its lexical scope even after the outer function has finished executing.

// Q5. How do closures help in data encapsulation or creating private variables?
       // Closures are perfect for creating private state in JavaScript 
       // above increment fucntion is ots example
// Q6. How are closures used in event handlers or callbacks?
       //Closures preserve access to outer variables, even after the function where they're defined has finished executing.
function setupButton() {
  let clickCount = 0;
  document.getElementById("btn").addEventListener("click", () => {
    clickCount++;
    console.log(`Clicked ${clickCount} times`);
  });
}
setupButton();

// Q7. What is a memory leak caused by closures and how to avoid it?

   //A closure retains references to its outer variables. If those references hold large objects or DOM nodes, and are never cleared, they won't be garbage-collected — causing memory leaks.
function leaky() {
  let hugeData = new Array(1000000).fill('data');
  return function inner() {
    console.log(hugeData[0]); // retains entire array
  };
}

const ref = leaky(); // `hugeData` is never released

// Solution:
// Avoid retaining closures unnecessarily.
// Null out references when done:
ref = null; // GC can now clean up

// Q8. What is the output and why?

const arr = [];
for (var i = 0; i < 3; i++) {
  arr.push(() => i);
}


console.log(">",arr[0]()); // ?
console.log(">",arr[1]()); // ?
console.log(">",arr[2]()); // ?



// ✅ Real-World Use Case Questions
// Q9. How would you use a closure to debounce a button click?
    //this is solved debouncing section
// Q10. How would you implement a once() function (that runs a function only once) using closures?
   //this is solved in polyfill section
// Q11. Can you write a custom implementation of bind() using closures?
   // this is also solved in polyfil section
// Q12. How are closures used in module patterns (IIFE, revealing module pattern)?
   // counterFn method is the example of modular pattern




// Advantage of closure 
   //it is used in module pattern,deboudning, throttling,function currying ,Higher order fucntion, moizing function like once,datahinding and encapsulation
// disadvantage is overconsumption of memeory and it hold the space so due to this garbage collector cannot collect those memory whic is bind with the closure