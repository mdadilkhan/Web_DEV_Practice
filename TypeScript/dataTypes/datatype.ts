// Array

// String array
let fruits: string[] = ['Apple', 'Banana', 'Orange'];

// Number array
let numbers: number[] = [1, 2, 3, 4, 5];

// Boolean array
let flags: boolean[] = [true, false, true];


// Empty array with type declaration
let emptyStrings: string[] = [];
let emptyNumbers: Array<number> = [];


// Alternative syntax using Array<T>
let colors: Array<string> = ['Red', 'Green', 'Blue'];
let primes: Array<number> = [2, 3, 5, 7, 11];



// Immutable array
const readOnlyFruits: readonly string[] = ['Apple', 'Banana'];
// readOnlyFruits.push('Orange'); // Error - readonly



let squares: number[] = new Array(1, 4, 9, 16);
let empty: string[] = new Array(5); // Creates array with length 5


// Tuple

// Simple tuple with string and number
let person: [string, number] = ["Alice", 30];

// Tuple with multiple types
let mixed: [string, number, boolean] = ["Hello", 42, true];


// Last element is optional
let optionalTuple: [string, number?] = ["Bob"]; // OK
optionalTuple = ["Bob", 25]; // Also OK



// Immutable tuple
const readOnlyTuple: readonly [string, number] = ["Alice", 30];
// readOnlyTuple[0] = "Bob"; // Error - readonly


// destructuring tuples
let rgb: [number, number, number] = [255, 0, 128];

// Destructure into variables
let [red, green, blue] = rgb;
console.log(red); // 255



// Enums

// enum StatusCode {
//   Success = 200,
//   BadRequest = 400,
//   Unauthorized = 401,
//   NotFound = 404
// }


// enum LogLevel {
//   Error = "ERROR",
//   Warn = "WARN",
//   Info = "INFO",
//   Debug = "DEBUG"
// }







// Any, Unknown, Void, Null, Undefined, Never

// this is string type
let coleg:string = "PUSA"

// >>> Any <<<
// if you dont provide any type then its a any type of variable
// you can assing anything into this like number string
// dont make any type of varibale then what is the purpose of using ts you are writing js
let a;
a="cjsdbcjs"
a=12312
// a.toUpperCase()
// if type any then you can do anythign with that varibalee
// above is valid vode 

// >>> UnKnown <<<
// but when type is unknown then you cannot directly use method WakeLockSentinel

let stud:unknown
stud=312312
stud="cjbsdc"
// stud.toUpperCase()// this line will give error bec ts says you cannot use upperCase() method even your last value is string
// but you can check type first then you can use
if(typeof stud==='string'){
    stud.toUpperCase()
}
// now the above line is valid and this is called type narrwoing
// unknown says you can store any thing in varibale but 
// if u want to work with that varibale you have to check type 
// of that varibale then you can do any operation


//>>> void <<<
// if a fucntion is not returning anything then you have to mention its return type void
// this ufcniton is not returning anything so put void in return type
function greeting(): void{
    console.log("hello world");
}

function getUserName(): string{
    return "Md Adil Khan"
}

function isFlagged(): boolean{
    return false
}




//>>>> null <<<<<

// user name can be string or null except these two it will give error
//  bec i used two datatype to decalre this varibale seperated by union(|)
let userName:string | null
userName=null
userName="Md Adil Khan"
//userName=1212 // give error

let userId:string | number | null
userId=3123123
userId="3123123"
userId=null
//userId=[1,2,3,4,5,6] //give error 


// >>>>> undefined <<<<<
// if you dont give any value to any varibale then it is undefined
let adil: undefined


// >>>> never <<<<<
// mainly used when it never returns 
//example

function abcd():never{
    while(true){

    }
}

abcd()
console.log("hey");
// above line execute only when abcd() function execution is ended
// if we put 'never' return type of abcd() function then console.log("hey") will never execute



