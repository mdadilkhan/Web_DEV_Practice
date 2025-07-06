// async is a keyword used to define an asynchronous function that always returns a Promise.
// Inside an async function, we can use the await keyword, which pauses the execution of the function until the awaited Promise is resolved or rejected.
// await can only be used inside an async function 

//  note 
// if async function doesnot have any promise to return or you are sinply returning any data or value objects array anything 
// then async function will wrap this data into promise and then you have to resolved this promise to get the data


// note 
// using then().catch()
// js engine doesnot wait for the promsie to resolve using then and catch it simply register the promise nad code execution goes forweard

// using async await
// js engine waiting to promise to be resolved but actually it doesnot wait it doesnot block the call stack it appears to be waiting
// when ever any async fucntion encounter in callstack it check there are promise to resolved then it suspend the exuxution of that fucntion
// when the promise is resolved these fucntion is pulled back to the call stack then execute it from where it left.
// if any more await encounter it suspend then resolve it then start executing from there where it suspend

// this is open 3 p1,p2,p3 promise creation 
// then using async fucncition to resolve these promise with await adn return result
const p1=new Promise((res,rej)=>{
    setTimeout(()=>{
        const bool=false
        if(bool){
            rej("Rejected P1")
        }
        res("Resolved P1");
    },2000)
})



const p2=new Promise((res,rej)=>{
    setTimeout(()=>{
        const bool=false
        if(bool){
            rej("Rejected P2")
        }
        res("Resolved P2");
    },5000)
})

const p3=new Promise((res,rej)=>{
    setTimeout(()=>{
        const bool=false
        if(bool){
            rej("Rejected P3")
        }
        res("Resolved P3");
    },10000)
})


async function handlePromise(){
    try{  
      console.log("called")
      const pr1=await p1;  
      console.log("pr1")
      const pr2=await p2;  
      console.log("pr2")
      const pr3=await p3;
      console.log("pr3")

      
    //   console.log("all promise reoslved",pr1,pr2,pr3)
    //   return {pr1,pr2,pr3} // these return object will convert inot promise bec fucntion is async
    }catch(err){
        console.log(err)
    }
}
handlePromise()







// promise builtin method with async await

const p4=new Promise((res,rej)=>{
    setTimeout(()=>{
        const bool=true
        if(bool){
            rej("Rejected P1")
        }
        res("Resolved P1");
    },2000)
})


const p5=new Promise((res,rej)=>{
    setTimeout(()=>{
        const bool=false
        if(bool){
            rej("Rejected P2")
        }
        res("Resolved P2");
    },3000)
})

const p6=new Promise((res,rej)=>{
    setTimeout(()=>{
        const bool=false
        if(bool){
            rej("Rejected P3")
        }
        res("Resolved P3");
    },5000)
})


async function handlePromise(){
    try{  
        
     const ans1 = await Promise.all([p4,p5,p6]);
     const ans2 = await Promise.allSettled([p4,p5,p6]);
     const ans3 = await Promise.race([p4,p5,p6]);
     const ans4 = await Promise.any([p4,p5,p6]);
      
      console.log("all promise reoslved",ans1,ans2,ans3,ans4)
    }catch(err){
        console.log("error>>",err)
    }
}


handlePromise()


// async await using fetch
async function getGithubUserDetaisl(){
    try {

        // fetch is a promise when it resolved it returns a response object
        // and this response object has a body which is a readable stream
        // to convert this readable stream into json you have use .json() with response body
        // this .json() is again a promise which must be reoslvec to get the data
        const user= await fetch("https://api.github.com/users/mdadilkhan")
        console.log(user);
        
        const data= await user.json();
        console.log(data)
    } catch (error) {
        console.log("error",error)
    }
}

getGithubUserDetaisl()








console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Object.prototype))




// >>>>> ✅ Interview Question <<<<<<<<<<<

// >>>>> ✅ Beginer Level <<<<<
// 2. How is async/await different from Promises with .then()?
// async/await is syntactic sugar over Promises. It provides a cleaner and easier-to-read alternative to chaining .then() and .catch().

// 3. What does an async function always return?

// An async function always returns a Promise, regardless of the value you return.

// 4. What happens when you use await inside an async function?

// Execution of the async function is paused until the awaited Promise resolves, then it continues.

// 5. Can we use await outside an async function?
// No, await can only be used inside async functions. However, in modern environments (e.g., top-level await in ES2022), it is allowed in modules.

// 6. What happens if the awaited Promise rejects and there's no try/catch block?

// The rejection will cause an unhandled Promise rejection error.


// // >>>>> ✅ Intermediate <<<<<
// 1. How does JavaScript handle await under the hood?

// await returns control to the event loop and schedules the remaining function execution as a microtask.



// 2. What happens if multiple await calls are written sequentially?

// They are executed one after another. The second one waits for the first to finish.


// 5. Can you use await inside a loop? What’s the drawback?

// Yes, but it causes sequential execution. Use Promise.all to run in parallel.

// 10. Can you await a non-Promise value?

// Yes, it wraps it in Promise.resolve(value) and proceeds.



// // >>>>> ✅ Advanced Level <<<<<
// 1. What happens to the call stack when await is used?

// The function is paused and removed from the call stack. It resumes from the microtask queue once the Promise resolves.

// 4. Performance implications of using await in a loop?

// It serializes execution. Use batching or Promise.all() for better performance
// 5. Can an async function be recursive?

// Yes, just like any other function:

// async function recursive(n) {
//   if (n === 0) return;
//   await doSomething();
//   return recursive(n - 1);
// }