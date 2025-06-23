// fucntions
// fucntion types
// optional and default parameter
// rest parameter
// overloads


// this is valid syntax of fucntion
function abcd(){

}
const abcd1=()=>{

}
// function with its return type
function call():void{

}
const call1=():void=>{

}
 

// function with paramter and its return type
function bind(name:string):string{
  return "hellow"
}
const bind1=(name:string):string=>{
    return "hello" 
}



// ways to pass fucntion in fucntion with its type argument and type aliases


// ✅ 1. Using Inline Arrow Function (Most Common)
function greetUser(name:string,cb:(msg:string)=>void){
     const message=name
     cb(message)    
}

greetUser("Md Adil Khan",(msg)=>{
    console.log(`hello ${msg}`);
    
})



// ✅ 2. Using Named Function as Callback

function logMessage(msg:string):void{
   console.log(msg);
   
}


function greetUser1(name:string,cb:(msg:string)=>void){
    cb(name)
}
greetUser1("Md Adil Khan",logMessage)



// ✅ 3. With Function Type Alias (Reusable Type)


type callBackFn=(name:string)=>void

function greet(name: string, cb: callBackFn) {
  cb(`Welcome, ${name}`);
}

greet("Asif", (text) => console.log(text));



//  4. With Interface (Good for OOP & classes)

interface MessageCallback{
   (msg: string): void;
}


function notifyUser(name: string, cb: MessageCallback) {
  cb(`Hey ${name}, you have a new message!`);
}


notifyUser("Adil", (m) => console.log(m));







// rest parameter
// here it is working as rest parameter
function max(name:string,...args:number[]){
  console.log(name);
  
  // here it is working as spread operator 
    return Math.max(...args)
}


const ans=max("Saniya Atique",1,2,3,4,5,6,67,7,323,312)
console.log(ans);


