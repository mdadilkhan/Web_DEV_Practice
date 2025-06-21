// Interface and type aliases
// ->Defining interface
// ->using interface to define objects
// ->extending interface
// ->type aliases
// ->intersection type

// interface is used to define the structure of objects or shape of the object


// in this interface all fileds are mandatory bec we didnt provide ?: to any field
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  dob: string;
  phone: string;
}

function getUSerDetails(obj:User): User {
  return {
    id: obj.id || 1,
    name: obj.name || "Md Adil Khan",
    email: obj.email || "mdadilakhtar8@gmail.com",
    dob: obj.dob || "12/12/2000",
    phone: obj.phone || "9122672094",
    password: obj.password || "cgsjbcwegcyg928374",
  };
}

const value: User = getUSerDetails({id:1,name:"Md Aamir Khan",email:"mdaaamirkhan@gmail.com",dob:"12/12/1998",phone:"8252250400",password:"cgwiciwubec",});
console.log(value);





interface User1 {
  id: number;
  name: string;
  email: string;
  password: string;
  dob: string;
  phone: string;
}

function getUSerDetails1(obj:User1): User1 {
  return {
    id: obj.id ?? 1,
    name: obj.name ?? "Md Adil Khan",
    email: obj.email ?? "mdadilakhtar8@gmail.com",
    dob: obj.dob ?? "12/12/2000",
    phone: obj.phone ?? "9122672094",
    password: obj.password ?? "cgsjbcwegcyg928374",
  };
}

const value1: User1 = getUSerDetails1({id:1,name:"Md Aamir Khan",email:"mdaaamirkhan@gmail.com",dob:"12/12/1998",phone:"8252250400",password:"cgwiciwubec",});

console.log(value1);



// Both || (OR operator) and ?? (nullish coalescing operator) provide default values,
// but they behave differently in edge cases:

// "" || "Default"        // "Default" (empty string is falsy)
// 0 || "Default"         // "Default" (0 is falsy)
// false || "Default"     // "Default"
// null || "Default"      // "Default"
// undefined || "Default" // "Default"


// "" ?? "Default"        // "" (preserved)
// 0 ?? "Default"         // 0 (preserved)
// false ?? "Default"     // false (preserved)
// null ?? "Default"      // "Default"
// undefined ?? "Default" // "Default"





// if we make filed oiptional then we can pass empty object 
// when calling function or with any no of filed 

interface User2 {
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  dob?: string;
  phone?: string;
}

function getUSerDetails2(obj:User2={}): User2 {
  return {
    id: obj.id ?? 1,
    name: obj.name ?? "Md Adil Khan",
    email: obj.email ?? "mdadilakhtar8@gmail.com",
    dob: obj.dob ?? "12/12/2000",
    phone: obj.phone ?? "9122672094",
    password: obj.password ?? "cgsjbcwegcyg928374",
  };
}

const value2: User2 = getUSerDetails2({});

console.log(value2);






// without making filed optional then you cannot pass empty object or with any no of field
//  if u want to do this make fucntion argumnet Partial
interface User3 {
  id: number;
  name: string;
  email: string;
  password: string;
  dob: string;
  phone: string;
}

function getUSerDetails3(obj:Partial<User3>): User3 {
  return {
    id: obj.id ?? 1,
    name: obj.name ?? "Md Adil Khan",
    email: obj.email ?? "mdadilakhtar8@gmail.com",
    dob: obj.dob ?? "12/12/2000",
    phone: obj.phone ?? "9122672094",
    password: obj.password ?? "cgsjbcwegcyg928374",
  };
}

const value3: User3 = getUSerDetails3({id:1213});

console.log(value3);


// >>>> Extedning Interface <<<<<<


interface User4{
  name:string,
  email:string,
  password:string,
}

interface Admin extends User4{
  role:string
}



interface Person{
  name:string,
  age:number
}
interface Employee extends Person{
  employeeId:number,
  department:string,
}

const worker:Employee={
    name:"Md Adil Khan",
    age:24,
    employeeId:1,
    department:"IT"
}
console.log(worker);




// Merging Interfaces (Declaration Merging)
// same name of interface will merge in one and have all filed of both interface
// example

interface abcd{
  name:string
}

interface abcd{
  email:string
}

const obj:abcd={
  name:"mdadilkhan",
  email:"mdadilakhtar8@gmail.com",
  // id:"cbksbdcjhsdc" // give error bec this property is not present in interface
}





// Multiple Interface Extension
// use , between multiple interface for extending
interface A{
  name:string
}
interface B{
  age:number
}
interface C extends A,B{
   coleg:string
}


const obj1:C={
  name:"mdadilakhtar8",
  age:24,
  coleg:"PUSA"
}




// Overriding Properties
interface Base {
  id: number | string;
}

interface Derived extends Base {
  id: number; // Narrowing the type
  additionalProp: boolean;
}



// interface with functions
// in interface we can only declare method and its return type
//  does not define the body in interface
// method can have without parameter with parameter 
// function can be arrow or normal function
interface Students{
  name:string,
  age:number,
  // Method (traditional syntax)
  greet():string
  // Method with parameters
  getAge(year: number):number
  //Arrow Function Syntax
  add: (a: number, b: number) => number;
  // method which is optional(normal and arrow function)
  // if you dont inpkement these two below method then it will not give error bec its optional
  debug?(message: string): void; 
  log?:(message: string)=> void;
}

//now implement above interface with actual data

const john:Students={
  name:"John Doe",
  age:25,
  greet(){
     return `Hello i am ${this.name}, How are you`
  },
  getAge(year){
   return new Date().getFullYear() - year;
  },
  add:(a,b)=>{
    return a+b
  },
  debug(message){
    console.log(message);
  },
  log: (message)=>{
    console.log(message);
  }
  
}

console.log("your age is ->", john.getAge(2000))
console.log("sum of two no is -> ",john.add(5,10));
// john.debug("Authentication Failed")
// john.log("Hello World")




// Extension with Generics
// Remaining





// Intersection type (|,&)

type num=number | string;
// any varibale having type num can store string and number both
let x:num=5
x="5"


type val=number & string

let y=123



// Example
type AB = { a: number };
type BC = { b: string };

type Combined = AB & BC; // { a: number, b: string }


let z:Combined={
  a:3123,
  b:"chbsvdjcsd"
}