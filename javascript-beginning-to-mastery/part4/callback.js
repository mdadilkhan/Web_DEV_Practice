
// console.log("start")
// function start(){
//     setTimeout(() => {
//         console.log("inside timeout")
//     }, 1000);
// }

// start()
// console.log("end");

// 1. ❓ What is a callback function in JavaScript?
// Expected Answer: A callback is a function passed as an argument to another function, to be invoked after the parent function completes.

// 2. ❓ What is the difference between a callback and a normal function?
// Expected Answer: A normal function is executed when called directly, while a callback is passed to another function and executed later (e.g., after an event or operation finishes).

// 3. ❓ Can you give a simple example of a callback function?

function greet(name, callback) {
  console.log(`Hi, ${name}`);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Adil", sayBye); // Outputs: Hi, Adil \n Bye!


// 4. ❓ How are callbacks different from promises?
// Expected Answer: Callbacks are functions passed as arguments, whereas promises are objects representing future completion. Promises provide better error handling and chaining.

// 5. ❓ How do you avoid callback hell?
// Expected Answer:
// Use named functions
// Modularize code
// Use Promises or async/await
// Use control flow libraries (like async.js)


// 6. ❓ What is callback hell and Inversion of Controll? Provide an example.
// 1 - Callback hell
// When a function is passed as an argument to another function, it becomes a callback function. This process continues and there are many callbacks inside another's Callback function.
// This grows the code horizontally instead of vertically. That mechanism is known as callback hell. 



// loginUser("adil", (user) => {
//   getProfile(user.id, (profile) => {
//     updateStatus(profile, () => {
//       console.log("Done!");
//     });
//   });
// });
// this is called as callback hell when code start growing horizontally instead of vertically
// const cart=["shoes","kurta","pants"]
// cretaeOrder(cart,()=>{
//   payment("paumentId",()=>{
//     orderSummary("details",()=>{
//       updateWallet()
//     })
//   })
// })



// 2 - Inversion of control
// Inversion of code is when you loose your controll of your code when using callback.

// cretaeOrder(cart,()=>{
//   payment()
// })


// we gave our program control to createOrder api now it the the responsibility of create order api to execute my code but 
// there is posiblity that create order api have bugs and our piece of code is important it may posbile that out never execute
// so this is giving controll of our program to some other program called as inversion of controll


// 7. ❓ What’s the difference between synchronous and asynchronous callbacks?
// Expected Answer:

// Synchronous: Called immediately (e.g., Array.prototype.map)

// Asynchronous: Called later (e.g., setTimeout, API callbacks)



// 8. ❓ How does setTimeout use callbacks?


setTimeout(() => {
  console.log("Executed after delay");
}, 1000)


// 9. ❓ What is the role of callback in functional programming?
// Expected Answer: Callbacks enable higher-order functions like map, filter, reduce to receive behavior (logic) as arguments.


// 10. ❓ How do you handle errors in callback functions?



// 11. ❓ How is a callback different from an event listener?
// Expected Answer: A callback is passed directly to a function to be executed once, while an event listener waits for an event and can be triggered multiple times.


// 12. ❓ What are pitfalls of callbacks in large applications?
// Harder to read/maintain (callback hell)

// Difficult error propagation

// Can lead to tight coupling

// Stack overflow if improperly handled in recursion



// Example code 1
function asyncFibonacci(n, callback) {
    console.log(n,callback)
    setTimeout(()=>callback(n), 0);
    console.log("ans")
}

console.log("Start...");
function print(n){
    let a = 0, b = 1, temp;
        for (let i = 2; i <= n; i++) {
            temp = a + b;
            a = b;
            b = temp;
        }

       console.log("Fibonacci number is:", b);
}
asyncFibonacci(10, print);
console.log("End...");




// Example code 2
const attachAddEventListener = () => {

    let count=0;
    const btn=document.getElementById("btn")
    const event=btn.addEventListener("click",function called(){
        console.log(++count)
    })
    console.log(event);
    

   btn.removeEventListener("click",event)

}


attachAddEventListener()



// Example code 3
function createOrder(orderId,callback){
  console.log(callback);
  
  setTimeout(()=>{
    console.log("orderCreated");
     callback()
  },1000)
}

function proceedToPayment(callback){
  console.log(callback);
  
    setTimeout(()=>{
      console.log("processing payment");
     callback()
    },1000)
}

function updateWallet(callback){
  console.log(callback);

  setTimeout(()=>{
    console.log("updating wallet");
    callback()
  })
}


function sednNotificatin(callback){
  console.log(callback);

   setTimeout(()=>{
    console.log("sednNotificatin");
    callback()
   })
}

createOrder("order_1212v13hbj313vg1231",function(){
  proceedToPayment(function(){
    updateWallet(function(){
      sednNotificatin(function(){
        console.log("notification sent");
        
      })
    })
  })
})

