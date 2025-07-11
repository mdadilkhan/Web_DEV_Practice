// ## Definition ##
//Polyfill is a piece of code that adds support for a feature that is not natively available in a browser
//                OR
//A Polyfill is backup plan that mimics a missing feature in older browswer

//it will print all the method like call appy bind which is a function property in js


// >>>>>>>>>>>>>>> polyfill for forEach <<<<<<<<<<<<<<<<<
console.log(Object.getOwnPropertyNames(Function.prototype));

const num=[1,2,3,4,5,6]
const ans10=[]
Array.prototype.myForEach=function(callback,){
  console.log(this)
  if(typeof callback !== 'function'){
    throw new TypeError(callback + "is not a function")
  }
  
  for(let i=0;i<this.length;i++){
    if(i in this){
          callback.call(this[i], i, this);
    }
  }
  
}


num.myForEach((item,ind,arr)=>{
   ans.push(item*3);
})
console.log(ans10)

// >>>>>>>>>>>>>>> polyfill for map <<<<<<<<<<<<<<<<<
// map function takes input array and perfom some logic then return a new array with the new data
console.log(Object.getOwnPropertyNames(Array.prototype));


const arr2=[2,,4,6,8,10]
Array.prototype.myMap=function(callback){
      if(typeof callback !=='function'){
    throw new TypeError(callback+ "is not a function")
  }
    console.log(this); // 👈 logs the array calling myMap → arr2
    console.log(callback); // 👈 logs the function passed
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(i in this){
            temp.push(callback(this[i],i,this));
        }
    }
    console.log(temp);
    return temp;
}
// item → the current element from the array
// index → index of the current item
// array → the original array (in this case, arr2) that called myMap
const res2=arr2.myMap((item,index,array)=>{
    return item*4
},)
console.log(res2);

const names=["adil","amir","asif","adnan"];
const ansNames=names.myMap((item)=>{
  let temp= item + " khan"
  return temp
})
console.log(ansNames)


// >>>>>>>>>>>>>>> polyfill for filter <<<<<<<<<<<<<<<<<

// The filter method creates a new array with all elements that pass the test implemented by the provided function.


const evenOdd=[2001,,312312,34434,3123,4234234,31221,2312312]
Array.prototype.myFilter=function(callback){
    console.log(this)
    console.log(callback)

    let temp=[];

    for(let i=0;i<this.length;i++){
        if(i in this){
            if(callback(this[i],i,this)) temp.push(this[i])
        }
    }
    return temp;
}

const even=evenOdd.myFilter((item,index,array)=>{
    return item%2===0
})
const odd=evenOdd.myFilter((item,index,array)=>{
    
    return item%2!==0
})

console.log("even>>",even);
console.log("odd>>",odd);



// >>>>>>>>>>>>>>> polyfill for reduce <<<<<<<<<<<<<<<<<


const price=[10,20,30,40,50];
Array.prototype.myReduce=function(callback,initialValue){
    console.log(this);
    console.log(callback);
    console.log(initialValue);
    let acc=initialValue
    // let acc=initialValue || this[0]
    for(let i=0;i<this.length;i++){
        if(i in this){
            acc = (acc !== undefined) ? callback(acc, this[i], i, this) : this[i];
            console.log(acc);
            
        }
    }
    
    return acc
}


const ans=price.myReduce((acc,item)=>{
    return acc+=item
 },0)
 
 console.log("total price>>",ans);

 const user=[
    {
        model:"Samsung S20",
        price:50,
        address:"Bihar"
    },
    {
        model:"Samsung S21",
        price:100,
        address:"Bihar"
    },
    {
        model:"Samsung S22",
        price:200,
        address:"Bihar"
    },
    {
        model:"Samsung S23",
        price:500,
        address:"Bihar"
    }
 ]

 const totalPirceiOfUser=user.myReduce((acc,item)=>{
     return acc+=item.price
 },0)

 console.log("totalPirceiOfUser",totalPirceiOfUser);
 


// >>>>>>>>>>>>>>>>> polyfill for call method <<<<<<<<<<<<<<<<<<<
const person={
    name:"Aamir Ashraf",
    coleg:"JMI",
    adress:"sitamarhi"
}
function printDetails(firstCompany,secondCompany){
    //we can return anything from here
    console.log(`My Name is ${this.name} and coleg is ${this.coleg} and adress is ${this.adress} 1st company ${firstCompany} second company ${secondCompany}`);
    return `My Name is ${this.name} and coleg is ${this.coleg} and adress is ${this.adress} 1st company ${firstCompany} second company ${secondCompany}`
}
Function.prototype.myCall=function(context={},...args){
    console.log(context);
    console.log(this);
    console.log(args);
    
    if(typeof this !== 'function'){
        throw new Error(this + " is not a Function");
    }

    context.fn=this // my function is attached to the context object whic is here person object which is temporary
    const result=context.fn(...args)
    delete context.fn // now cleaning up the attached function if not done cleaning then it will presnt in th eperson object 
    return result
    
}
const res=printDetails.myCall(person,"Janitri","kukuFm")
console.log(res);


// >>>>>>>>>>>>>>>>> polyfill for apply method <<<<<<<<<<<<<<<<<<<
const person1={
    name:"Faizan Khan",
    coleg:"St Jospeh",
    adress:"Biharsharif"
}
function about(factory,profit){
    console.log(`My name is ${this.name} and my coleg is ${this.coleg} and adress is ${this.adress}. I have a ${factory} facotry having profit of ${profit}`)
}

Function.prototype.myApply=function(context={},args){
     if(typeof this !=='function'){
        throw new Error(this + "is not a function")
     }

     if(!Array.isArray(args)){
        throw new TypeError(args + "must be an array")
     }

     context.fn=this
     const result=context.fn(...args)
     delete context.fn
     return result
}

console.log(about.apply(person1,["Cloth Manufacturing",1000000]));




// // >>>>>>>>>>>>>>>>> polyfill for bind method <<<<<<<<<<<<<<<<<<<


const person2={
    name:"Adnan Khan",
    coleg:"Nalanda",
    adress:"Biharsharif"
}


Function.prototype.myBind=function(context={},...args){
       if(typeof this !== "function"){
        throw new Error(this + " is not a function")
       }

       context.fn=this
       return function(...newArgs){
            const result = context.fn(...args,...newArgs)
            delete context.fn
            return result
       }
}


const newFunc=about.myBind(person2)
newFunc("Plastic Bottle Factory",500000)



// // >>>>>>>>> polyfill for once method <<<<<<<<<<<<<<<<<

// function once(calback){
//     let ran=false;
//     let result;
//     // console.log("once this",this);
//     // console.log("once calback",calback);
    
//     return function(...args){
//         // console.log("args",args);
        
//         if(!ran){
//           result=calback.apply(this,args)
//           ran=true
//        }
//        return result;
//     }
// }

// const callOnce=once((name)=>{
//     console.log(`Hello ${name}, only once!`);
//     return "✅ Greeted";
    
// })

// callOnce("adil")
// callOnce("adil")
// callOnce("adil")
// callOnce("adil")
// callOnce("adil")



// // >>>>>>>>>> polyfil for Memoize fucntion <<<<<<<<<<<<<<<<<<<


// function myMemoize(fn) {
//     const cache = {};
  
//     return function(...args) {
//       let argCache = JSON.stringify(args);
  
//       if (!cache[argCache]) {
//         cache[argCache] = fn.call(this, ...args);
//       }
  
//       return cache[argCache];
//     };
//   }
  
//   const expensiveFunc = (num1, num2) => {
//     let output = 1;
//     for (let i = 0; i <= 10000000; i++) {
//       output += i;
//     }
  
//     return num1 + num2 + output;
//   }
  
//   const memoizeFunc = myMemoize(expensiveFunc);
  
//   console.time();
//   console.log(memoizeFunc(1, 2));
//   console.timeEnd();
  
//   console.time();
//   console.log(memoizeFunc(1, 2));
//   console.timeEnd();





// //   >>>>>>>>>>>>>> Promise polyfilll <<<<<<<<<<<<<<<<
// // besr resource for custom Promise https://medium.com/@code_it_right/polyfill-promises-part-1-a3a110fe115f
// function PromisePolyFill(executor){
//     let onResolve,onReject,isCalled = false, 
//     isFulfilled = false, isRejected = false, output, err;

//     // console.log(this);
//     // console.log(this===window);
//     // console.log(executor);
    
    

//     function resolve(data){
//          // Mark the isFulfilled flag as true since the executor work isFulfilled 
//          // and store result in output
//         console.log("data>>",data);
    
//         isFulfilled=true;
//         output=data;
//             // Calling the resolve function with data
//         if(typeof onResolve === 'function' && !isCalled){
//             isCalled=true;
//             onResolve(data)
//         }
   
//     }
//     function reject(error){
//         // Mark the isRejected flag as true since the executor work isFulfilled 
//         // and store result in output
//         isRejected = true;
//         err = error;
    
//        // Calling the reject function with error
//        if(typeof onReject === 'function' && !isCalled){
//          isCalled = true;
//          onReject(error);
//        }
//     }


//     //this refers to the newly created object and returning this means you can chain it
//     this.then=function(callback){
//         // Storing resolve callback function
//         onResolve=callback

//         // Check if the promise has not yet resolved/rejected and executor isFulfilled
//         if(!isCalled && isFulfilled) {
//             // Mark the promise as resolved
//             isCalled = true;
//             onResolve(output);
//           }
//         return this; //this help in do chaining of then and catch 
//     }
//     this.catch=function(callback){
//         // Storing reject callback function
//         onReject=callback;
//         // Check if the promise has not yet resolved/rejected and executor isRejected
//         if(!isCalled && isRejected) {
//             // Mark the promise as rejected
//             isCalled = true;
//             onReject(err);
//           }
//         return this; //this help in do chaining of then and catch 
//     }

//     //executor is a function which is created while creatign a promise 
//     // and expecting two fucntion reoslve and reject which i creaded just above
//     executor(resolve,reject)
// }

// //in pr1 object is returning with property then and catch PromisePolyFill is a contructor function using new will create and expty object
// const pr1=new PromisePolyFill((resolve,reject)=>{
//     setTimeout(()=>{
//         let bool=true
//         if(bool){
//             resolve("custom promise resolved")
//         }else{
//             reject("custom promise rejected")
//         }

//     },1000)
// })
// console.log(pr1);

// pr1.then((res)=>{
//     console.log(res);
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// //understand the flow of promise 
// // when promise is creayed it calls contructor funciton and taked a callback function 
// // which directly call executor function with that calback function then it waits for few sec bec of setTimeout or async task
// // then it will call resolve method or reject method 


// //   >>>>>>>>>>>>>> Promise.all() polyfilll <<<<<<<<<<<<<<<<

// // const promise1=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         let status=true
// //         if(status){
// //             resolve("1st Promise resolved")
// //         }else{
// //             reject("1st Promise rejected")
// //         }
// //     },3000)
// // })
// // const promise2=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         let status=true
// //         if(status){
// //             resolve("2nd Promise resolved")
// //         }else{
// //             reject("2nd Promise rejected")
// //         }
// //     },3000)
// // })
// // const promise3=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         let status=false
// //         if(status){
// //             resolve("3rd Promise resolved")
// //         }else{
// //             reject("3rd Promise rejected")
// //         }
// //     },3000)
// // })
// // const promise4=new Promise((resolve,reject)=>{
// //     setTimeout(()=>{
// //         let status=true
// //         if(status){
// //             resolve("4th Promise resolved")
// //         }else{
// //             reject("4th Promise rejected")
// //         }
// //     },3000)
// // })



// // Promise.all([promise1,promise2,promise3,promise4]).then((res)=>{
// //     console.log(res);
    
// // }).catch((err)=>{
// //     console.log(err);
    
// // })

// // Promise.myLog = function () {
// //   return this.then((res) => {
// //     console.log("myLog:", res);
// //     return res; // to allow chaining
// //   }).catch((err) => {
// //     console.error("myLog Error:", err);
// //     throw err; // keep error bubbling
// //   });
// // };
// // console.log(Object.getOwnPropertyNames(Promise));
