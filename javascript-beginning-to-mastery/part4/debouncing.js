
// ? what is Debouncing?
// ? debouncing means delaying a fucntion call util a certain time has passsed since last time it was invoked








// ************ Interview Question ************

//! Q1.What is debouncing and how does it differ from throttling?
//? Debouncing: Executes a function after a delay once the event stops firing.
//? Throttling: Limits the function execution to once every X ms, no matter how often the event fires.
// ---------------------->OR<-------------------------------
//? Debounce: Wait for silence.
//? Throttle: Allow only one execution per time window.




//! Q2. What would happen if you don’t debounce a resize/scroll event?
//? It would call the function many times per second, which:
//? Impacts performance
//? Causes? unnecessary calculations or API calls



//! Q3. How do you ensure a debounced function still preserves this context?
//? Use func.apply(this, args) inside the debounce implementation.

//! Q4. How do you ensure a debounced function still preserves this context?
//? Use apply method to call function [func.apply(this, args)] inside the debounce implementation.

//! Q5. How do you cancel a debounce timer manually?
//? Store the timer ID and call clearTimeout(timerId).


//! Q6. Can you debounce an async function? How?
//? Yes. Just debounce it like a normal function. Awaiting inside works fine.


const debouncedFetch = customDebounce(async (query) => {
    const res = await fetch(query);
    const data = await res.json();
  }, 300);
  

//! Q7. What are the performance benefits of debouncing?
//? Reduces the number of expensive operations (API calls, DOM manipulation)
//? Improves responsiveness and efficiency
//? Prevents UI lag



//! 7Q. When would you use debounce over throttle?
//? Debounce: When you want the function to run after the user stops doing something (e.g., typing).
//? Throttle: When you want the function to run at regular intervals (e.g., scroll position updates).


//! 8Q. What are the parameters of a debounce function?
//? func: The function to debounce
//? delay: Time in milliseconds
//? (optional) options: like leading, trailing in lodash



//! 9Q. What’s the difference between trailing and leading debounce?
//? Leading: Triggers at the beginning of the delay
//? Trailing: Triggers after the delay
//? You can configure both in lodash



//! 10Q. What is the purpose of clearTimeout() inside debounce?
//? To cancel the previous timer, so the function only runs once after the final delay.
//? Without it, the function would run multiple times.



//! 11Q. Why is it important to return the same debounced function inside event listeners?
//? If you recreate the debounce on every call, the timer resets — debounce doesn’t work. Keep the reference outside the listener.


//! 12Q. How to cancel a debounce if the user changes their mind (e.g., clears input)?
//? Call clearTimeout(timerId) inside your event listener if input is empty.
//? Or with lodash:
//? const debounced = _.debounce(fetchData, 300);
//? if (input === '') debounced.cancel();






//* Debouncing Implementation

// * example of debouncing 
function customDebounce(func,delay){
    let timerid;

    return function(...args){
      console.log("hello>>>",args)
      if(timerid)clearTimeout(timerid)

        timerid=setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}


const handleChange=async(query,name,coleg)=>{
  console.log("handle change",query,name,coleg);
  
   const res=await fetch('https://api.github.com/users/mdadilkhan')
   const data= await res.json();
   console.log("result>>",data);
   

}

const debouncedFucntion=customDebounce(handleChange,1000)
// console.log(debouncedFucntion);

document.getElementById("search").addEventListener("input",(e)=>{
  console.log("event listener",e.target.value);
  const query=e.target.value
    debouncedFucntion(query,"adil","jmi")
})