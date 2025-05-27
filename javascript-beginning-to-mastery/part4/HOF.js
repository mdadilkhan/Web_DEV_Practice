

// Higher ordr fucntion of Array (HOF)

// for finding first and last value and index of an array 
// all four function will return a single value either element or index

// find() return value of first matching elemnt based on condition
// findIndex() retutrn index of first matching element based on conditon
// findLast() return value of last matching condition
// findLastIndex() return index of last matching elemnt based on condition

const users=[
    {
        name:"Adil",
        coleg:"JMI",
        age:25,
        course:"CSE"
    },
    {
        name:"Aamir",
        coleg:"NIT",
        age:26,
        course:"CSE"
    },
    {
        name:"Asif",
        coleg:"PUSA",
        age:24,
        course:"AGRI"
    },
    {
        name:"Adnan",
        coleg:"NEET",
        age:18,
        course:"CBSE"  
    },
    {
        name:"Nlofer",
        coleg:"NIT",
        age:26,
        course:"CSE"
    },
    {
        name:"Sania",
        coleg:"JMS",
        age:26,
        course:"BCA"
    },
    {
        name:"Adil",
        coleg:"JMI",
        age:25,
        course:"CSE"
    },
]


console.log(users.find((val)=> val.age===25))
console.log(users.findIndex((val)=> val.age===25))

console.log(users.findLast((val)=>val.coleg==="JMI"));
console.log(users.findLastIndex(val=>val.coleg==="JMI"));





console.log(Object.getOwnPropertyNames(Array.prototype))


// flatMap(fun)

// first maps each element using a mapping function, and then flattens the result one level deep.
// Step-by-step:
// 1. Loops over each element of the array.

// 2. Applies the callbackFn to it.

// 3. The callback returns an array (or a single value).

// 4. flatMap() then flattens the results by 1 level.


// if calculataion of callback fucntion return an array then needs to flatten then flatMap can be used
const arr=[1,2,3,4,5,6,7]
const result=arr.flatMap((val)=>[val,val*2])
console.log(result);


const sentences = ["hello world", "how are you"];
const letters=sentences.flatMap((val)=>val.split(""))
const words=sentences.flatMap((val)=>val.split(" "))
console.log(letters);
console.log(words);




const students = [
    { name: "Alice", hobbies: ["Reading", "Swimming"] },
    { name: "Bob", hobbies: ["Gaming"] },
  ];


  const allHobbies=students.flatMap((val)=>val.hobbies)
  console.log(allHobbies);

  const allHobbiesWithName=students.flatMap((val)=>val.hobbies.map(hobby=> `${val.name}: ${hobby}`))
  console.log(allHobbiesWithName);
  
  
