"use strict"

function asyncFibonacci(n, callback) {
    console.log(n,callback)
    setTimeout(()=>print(n), 0);
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

const attachAddEventListener = () => {

    let count=0;
    const btn=document.getElementById("btn")
    btn.addEventListener("click",function called(){
        console.log(++count)
    })

   btn.removeEventListener("click")

}


attachAddEventListener()
const cart=["Apple","Bananna","Papaya"]
function createOrder(cart,callback){
    console.log(cart,callback)
    setTimeout(()=>{

       callback() 
       console.log("created orer successfully")
    },0)

}

function proceedToPayment(callback){
    setTimeout(()=>{
   
        callback()
        console.log("payment started")
    },0)
}


function OrderSummary(callback){
    setTimeout(()=>{

       callback()
       console.log("printing order summary");
    },0)
}

function updateWallet(){
    setTimeout(()=>{
       console.log("updating wallet");
    },0)
}


createOrder(cart,function(){
    proceedToPayment(function(){
        OrderSummary(function (){
            updateWallet()
        })
    })
})




const API="https://api.github.com/users/mdadilkhan";

const promise=fetch(API)

promise.then((res)=>{
    console.log(res)
    return res.json()
}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})





const cart=["Apple","Bananna","Papaya"]

const promise= new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (cart.length >= 3) {
                console.log("✅ Order created successfully!");
                resolve("OrderID_12345");
            } else {
                reject("❌ Cart is empty. Order creation failed.");
            }
        })
    })



promise.then((res)=>{
    console.log(res)

}).catch((err)=>{
    console.log(err)
})








const product={
    productId:"001",
    productName:"Iphone",
    price:99999,
    stock:1
}


function createOrder(product){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(product.stock>=1){
                console.log("created order")
                res({productId:product.productId,order_id:"orderId123456"})
            }else{
                const err=new Error("This product is out of stock")
                rej(err)
            }
        },0)
    })
}

function proceedTopayment(order){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(order.order_id){
                  console.log("Paymwent done")
                res({payment_id:"pay_1dq2d3qwd21",summary:`Done payment of this order_id${order.order_id}`})
            }else{
                rej("payment Failed")
            }
        },0)
    })
}


 createOrder(product)
 .then((res)=>{
     console.log(res)
     return proceedTopayment(res);
 }).then((res)=>{
     console.log(res);
 }).catch((err)=>{
     console.log("err->",err);
 })









// promise method
// all
// allsettled
// race
// any
 const p1=new Promise((res,rej)=>{
    setTimeout(()=>{
        
        const bool=true;
        if(bool){
        const err=new Error("Promise P1 failed")
           rej(err) 
        }
        
        res({message:"P1 data retrived successfully"})
    },1000)
})
const p2=new Promise((res,rej)=>{
    setTimeout(()=>{
                
        const bool=true;
        if(bool){
            const err=new Error("Promise P2 failed")
           rej(err) 
        }
        
        res({message:"P2 data retrived successfully"})
    },5000)
})
const p3=new Promise((res,rej)=>{
    setTimeout(()=>{

        const bool=true;
        if(bool){
              const err=new Error("Promise P3 failed")
           rej(err) 
        }
        res({message:"P3 data retrived successfully"})
    },2000)
})


Promise.any([p1,p2,p3])
.then((res)=>{
    console.log("ans>>",res)
}).
catch((err)=>{
    console.log("err>>",err.errors);
})



 

//async await

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
    },3000)
})

const p3=new Promise((res,rej)=>{
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
      console.log("pr1")
      const pr1=await p1;  
      console.log("pr2")
      const pr2=await p2;  
      console.log("pr3")
      const pr3=await p3;
      
      console.log("all promise reoslved",pr1,pr2,pr3)
    }catch(err){
        console.log(err)
    }
}


handlePromise()

// promise method with async await

const p1=new Promise((res,rej)=>{
    setTimeout(()=>{
        const bool=true
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
    },3000)
})

const p3=new Promise((res,rej)=>{
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
        
     const ans1 = await Promise.all([p1,p2,p3]);
    //  const ans2 = await Promise.allSettled([p1,p2,p3]);
    //  const ans3 = await Promise.race([p1,p2,p3]);
    //  const ans4 = await Promise.any([p1,p2,p3]);
      
      console.log("all promise reoslved",ans1,ans2,ans3,ans4)
    }catch(err){
        console.log("error>>",err)
    }
}


handlePromise()


async await using fetch
async function getGithubUserDetaisl(){
    try {
        const user= await fetch("https://api.github.com/users/mdadilkha")
        const data= await user.json();
        console.log(data)
    } catch (error) {
        console.log("error",error)
    }
}

getGithubUserDetaisl()





const p1=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise resolved1")
    },5000)
})
const p2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("promise resolved2")
    },1000)
})

async function promiseResolver(){
    try{
        console.log("adil1")
       const pr1=await p1;
       console.log(pr1);
       console.log("adil2")
       const pr2=await p2;
       console.log(pr2);
    }catch(err){
        console.log(err)
    }
}
promiseResolver()

console.log("after function")



console.log(Object.getOwnPropertyNames(Array.prototype))
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Object.prototype))




//definition of this
// (this) is keyword in js whose value depends on how the function is called(run time binding)
// console.log(this)

  //in strict mode this is undefined isnide a fucntion
  //but in non strict mode this is global object
  //this is happening bec of this substitution it is a phenomena
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


