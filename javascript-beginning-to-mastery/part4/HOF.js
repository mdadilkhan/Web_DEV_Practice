

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






