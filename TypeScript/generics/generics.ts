// Generics
// Generic fucntion
// Generic Classes
//Generic Interface

// Generics are a way to create reusable components that work with any data type while keeping type safety.
// Instead of specifying a specific type, you use a placeholder (like T) that gets filled in later.

function abcd<T>(a:T){
    console.log(typeof a);
    
}


// in calling time you dont need to specify explicitly let TS infer it
abcd<string>("Md Adil Khan")
abcd<number>(50)
abcd<boolean>(false)
abcd(false)

// same this with arrow function

const hello=<T>(a:T)=>{
    console.log(a);
    
}

hello<string>("Md Adil Khan")
hello<number>(50)
hello<boolean>(false)


// Example 1
function printAndRetunrGEnerics<T,U,V>(a:T,b:U,c:V):T{
   return a
}

printAndRetunrGEnerics("Adil",24,false)


// Example 2
function printAndRetunrGEnerics1<T>(a:string,b:number,c:T):T{
    let sum=Number(a)+b
    console.log(sum);
    console.log(c);
    
    // both below line of code is called as type assertion both are same thing way is diff
    // return sum as T
    return  <T>sum
}

const ans=printAndRetunrGEnerics1("12",10,"hello my name is Adil")
console.log(ans);



//Example 3

function multipleGenerics<T,U>(a:T,b:U,prefix:string):[T,U]{
    console.log(`${prefix}:`, a, b);
    // returning combilned generic type in array
    return [a,b]
}

// Usage:
const merged1 = multipleGenerics("Adil", 25, "User Info");
const merged2 = multipleGenerics(true, "Available", "Status");


console.log(merged1); // ["Adil", 25]
console.log(merged2);






// generics with interfaces

// in interface we can make filed generic type but where ever you use interface you have to tell the field of that generic type
interface User<T,U>{
    name:string,
    coleg:string,
    info:T,
    profile:U
}



function log(obj:User<string,string>):User<string,string>{
    console.log(obj);
    return obj
}


const ans1=log({name:"md adil khan",coleg:"JMI",info:"Passes out in Batch 19-23",profile:"mypic.jpeg"})
console.log(ans);




// complete generic fucntion with interface
function log1<T, U>(obj: User<T, U>): User<T, U> {
  console.log(obj);
  return obj;
}


const ans2 = log1({
  name: "Md Adil Khan",
  coleg: "JMI",
  info: "Passed out in Batch 19–23",
  profile: "mypic.jpeg",
});

console.log(ans1);





// generic class


class BottleMaker<T>{
    constructor(public name:T,public age:number){}

}

const b1=new BottleMaker("Md Adil Khan",32)
const b2=new BottleMaker(false,32)

console.log(b1);
console.log(b2);
