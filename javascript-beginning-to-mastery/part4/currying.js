// 1. What is currying in JavaScript? 
// //Answer: Currying is a technique where a function with multiple arguments is transformed into a series of functions each taking one argument.

// Q.What is Pure Function
//A pure function is a function that always returns the same output for the same input, and it does not cause any side effects (like changing variables outside the function or interacting with the DOM, API calls, etc.).

// 2. Can you explain currying with a simple example?

function add(a){
    return function (b){
        return a+b;
    }
}

console.log(add(5)(15));


// 3. Convert a function sum(a, b) to a curried version.


function sum(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(100)(200));




// 4. What will be the output of add(2)(3) if add is a curried function?

// Answer: The output will be 5.




// 5. Why and where would you use currying in real-world applications?
//Answer: Currying helps in function reuse and creating more readable and maintainable code.
//  Useful in event handling, functional programming




// 8. How would you curry a function that accepts more than two arguments, like sum(a, b, c)?

function sum1(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(sum1(10)(20)(30));


// 9. Write a curried function to multiply three numbers.

function multiply(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}
console.log(multiply(10)(20)(30))



// 11. What is the role of closures in currying?
// Answer: Closures store the arguments passed to outer functions, so each inner function has access to those values when it's eventually called.



// 12. What is the difference between currying and binding (.bind)?
// Answer: .bind creates a new function with preset arguments and a specific this context. Currying transforms functions to accept arguments one at a time.


// 13. What happens if you curry a function and not all arguments are eventually passed?
// Answer: The function remains in a partially applied state and won’t execute until all arguments are provided.



// 14. Can you write a curried function that calculates total cost given price, quantity, and tax?

function calculate(price){
    return function(quantity){
        return function(tax){
            return price*quantity+(price*quantity*tax/100)
        }
    }
}

console.log(calculate(50)(10)(10));

// 15. What will be the output?
function add(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
  }
//   console.log(add(1)(2)(3)); // 6
//   console.log(add(1, 2)(3)); // TypeError: add(...) is not a function



  //currying with arrow function
  const func=(a)=>(b)=>(c)=>a+b+c;

  console.log("hello",func(10)(10)(10))



  function evalute(operation){
     return function(a){
        return function(b){
            if(operation==='SUM'){
                return a+b
            }else if(operation==="MULT"){
                return a*b
            }else if(operation==='DIV'){
                return a/b
            }else if(operation==='SUB'){
                return a-b
            }else{
                return "Invalid Operation"
            }
        }
     }
  }

  console.log((evalute("SUM")(10)(5)));
  


  // infinite currying


  function add(a){
     return function(b){
        if(b){
            return add(a+b)
        }else{
            return a
        } 
     }
  }


  console.log(add(4)(10)());



  // partial application

  function mult(a){
      return function(b,c){
        return a*b*c
      }
  }

  console.log(mult(10)(10,10));



  // Real world Exapple
  //Dom Manupulation



  function updateElementText(id){
    return function(content){
        document.querySelector("#"+id).textContent=content
    }
  }



  updateElementText("heading")("Currying Practice")




  // Important INterview Question
  //How to convert normal function into currying function
  //.length property of a function returns the number of parameters it’s declared with (NOT the number of arguments passed in during call time).


  
  function curry(func){
    console.log("hello2",func.length);
    return function curriedFunction(...args){
        console.log("hello>>",args.length,func.length);
        
        if(args.length>=func.length){
            return func(...args)
        }else{
            console.log("else called");

            return function(...next){
                return curriedFunction(...args,...next)
            }
        }
    }
  }



  const addition=(a,b,c)=>a+b+c


  const totalSum=curry(addition);
  console.log(totalSum(5)(10)(20));
  

  const nums=[1,23,4,5]
  console.log(nums.__proto__);
  console.log(nums.__proto__===Array.prototype);

  const obj={
    name:"Md adil"
  }

  console.log(Object.getPrototypeOf(obj));
  console.log(Object.getOwnPropertyNames(Object.prototype));
  
  function x(){
    
  }


  console.log(Object.getPrototypeOf(x));
  
  