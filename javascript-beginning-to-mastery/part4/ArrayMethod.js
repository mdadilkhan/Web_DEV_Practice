
// 5 ways to crate Array in js


// 1. Using Array Literals (Most common)
const arr1=[1,2,3,4,5,"Adil","Aamir","Asif","Adnan"]

// 2. Using Spread Operator
const arr2=[...arr1]
const str="mdadilkhan"
const arr3=[...str]

// 3. Using new Array() Constructor
const arr4=new Array(10);//created 10 size of empty array
console.log(arr4);
const arr5=new Array(1,2,3,4,5)
console.log(arr5);


// 4. Using Array.of()
const arr6=Array.of(1,23,4,56)
console.log(arr6);

// 5. Using Array.from()
//from is used to convertt iterables into array using from method
const str1="adil"
const arr7=Array.from(str1)
console.log(arr7);


// 6. Using fill() to initialize values
const arr8=new Array(5).fill(10);
console.log(arr8);





// const number=new Array(1,2,3,4)
// console.log(number);
// //both below two line is same
// console.log(Array.prototype);//It gives the prototype object from which your array inherits — which is Array.prototype
// console.log(Object.getPrototypeOf(number))//It gives the prototype object from which your array inherits — which is Array.prototype
// console.log(Object.getOwnPropertyNames(Array));//This gives the static methods and properties of the Array constructor itself.
console.log(Object.getOwnPropertyNames(Array.prototype)); //This gives instance methods and properties that all arrays inherit.




//Practice Array method

// length is not a method its a property of js array
const nums=[1, 2, 3, 4, 5];
console.log(nums.length);


//constructor
// constructor - returns the array's constructor
console.log(nums.constructor); // [Function: Array]

// at method 
// it return the elment with given index
console.log(nums.at(3),nums.at(2));


//concat
// it downsot modify the same array it return another array with merged value
const nums1=[6,7]
const newArr=nums.concat(nums1)
console.log(newArr);


//copyWithin
//copies part of array
// it mutate the origina array by overriding the array values
//it takes three agruments
// target,start,end
// target means where you start pasting the copied Element
// start where you start copying element 
// end where you stop copying element 

console.log(">>>",newArr.copyWithin(0,3,7));



// search based method

//fill is same as Array().fil()
// fill method cal be used with array literals or array constructor using dot operator 
//fill method fills the array value 
const value=[1,2,3,4]
value.fill(0)
console.log(value);



//lstIndexOf(value)
// it return the index of matching elemnt which is in the last 
const str2=["Adil","Asif","Aamir","Adnan","Asif","Adil"]
const value2=[4,1,2,4,3,4,5,6,3]
console.log(str2.lastIndexOf("Asif"));
console.log(value2.lastIndexOf(4));


// indexOf
//it returns the index of first matching elemnt

console.log(str2.indexOf("Asif"));
console.log(value2.indexOf(3));




// pop push  shift unshift
// this all method is to manipulate array like adding and removing element from starting and ending
//it is used as a stack and queue

// use as a stack
const st=[]
//pushing in the stack
st.push("4")
st.push("6")
st.push("15")
st.push("10")
console.log(st);

// checking peek element
console.log(st[st.length-1]);


// removing from last or poping the stack

st.pop()
console.log(st);
st.pop()
console.log(st);
st.pop()
console.log(st);


// use as a Queue

const q=[]

q.push(10)
q.push(15)
q.push(20)
q.push(30)
console.log(q);


// checking peek element

console.log(q[0]);

//removing from first from the array or queue

q.shift()
console.log(q);
q.shift()
console.log(q);
q.shift()
console.log(q);
q.shift()
console.log(q);



//unshift will add the elemnt from begining of array
const val=[10,15,20,25]
val.unshift(5)
console.log(val);



// reverse 
//this method mutate original array and return 
const rev=[1,2,3,4,5,6]
console.log(rev);
//below line here doesnot need to initlize in the varible bec it mutuates original array 
const reversed=rev.reverse() // this reverse mehtod mutates the original array and returns a reference to the same reversed array

console.log(rev===reversed);

// toReverse
// it will return the new array with reversed value

const revrsed1=rev.toReversed()
console.log("reve>>",revrsed1);




//slice
// it doenot mutate original array used to copy of a portion of an array into a new array object.
// take two argument start(optional) index and end(optional) index
// if u dont give any argiment then it will copy everything into new array 
// if u give only start index then it will copy the element from that index 
//if u give both index then it will copy elemnt from start(included) to end(excluded)
const sl=[1,2,3,4,5,6]
const ans=sl.slice()
const ans1=sl.slice(3)
const ans2=sl.slice(1,4)
console.log("ans>>",ans);
console.log("ans1>>",ans1);
console.log("ans2>>",ans2);



// sort() and toSorted()
// sort mutate original array and toSorted return an array of modified value
// toSorted() return new array after sorrting and it is immutabe
// sort basically Converts elements to strings, then compares lexographically 
// due to this behaviour it doenot give correct output for integer value unless a compare function is provided.



// Strings (Default behavior is fine for alphabetic sort):
const fruits = ['banana', 'apple', 'mango'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'mango']


// Numbers (Wrong without comparator):
const number = [1, 30, 4, 21, 100000];
number.sort();
console.log(number); // [1, 100000, 21, 30, 4] 😬 (string comparison)


//for numbers doenot give correct output so we use comparator
// in Ascending 
number.sort((a,b)=>a-b)
console.log(number);
// in Descending 
number.sort((a,b)=>b-a)
console.log(number);


// Sorting Objects by key

//using integer key
const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 22 }
  ];
  // ASCENDING
  people.sort((a, b) => a.age - b.age);
  console.log(people);
  // DESCENDING
  people.sort((a, b) => b.age - a.age);
  console.log(people);
  
  //using string key

  people.sort((a,b)=>a.name.localeCompare(b.name))
  console.log(people);
  people.sort((a,b)=>b.name.localeCompare(a.name))
  console.log(people);
  
  

  // splice() modify original array or spliced() return new array
 // It is used to add, remove, or replace elements in an array in-place 
 // it takes 3 argument start index, delete count(optional) and item
 // start index(included) from which it start changing the array. If negative, it counts from the end (e.g., -1 means last element).
 // deleteCount (optional):The number of elements to remove from the array starting from start. If 0, no elements are removed.
 // it return array of deleted element it no element is deleted then return [] 
// for adding value you can pass array but should use spread operator you cannot directly passa an array

 //Remove elements
 const sp=[1, 2, 3, 4, 5]
 const removed = sp.splice(2, 2); //remove two slement from 2th position and return array
 console.log(removed,sp);


//  Add elements
const sp1 = [1, 2, 5]; 
sp1.splice(1,0,10,15)
console.log(sp1);

// Replace elements

const sp2=[1,2,3,4,5]
sp2.splice(1,2,'a','b')
console.log(sp2);


// Remove all elements from an index

const sp3=[1,2,3,4,,5,6,7]
sp3.splice(3)
console.log(sp3);


// Using negative index
const sp4 = [1, 2, 3, 4, 5];
sp4.splice(-2, 1); // Remove 1 element from the second last position
console.log(sp4); // [1, 2, 3, 5]


// includes()
// return true false if value matches 

console.log(sp4.includes(3))
console.log(sp4.includes(4))


// join() and split( its a method of string)
// it is used to join multiple string into one
// by default it joins string using (,) but you pass argiment like empty string "" or space seperated " " or with "|"

const vegies=["apple","banana","Orange"]
const joined=vegies.join()
console.log(joined);

// join have a relation with split method of string
// undestand with the help pf example
const string="adil.aamir.khan.adil.khan.asif.khan "
const names=string.split(".") // it will return an array of after removing . from the string 
console.log(names);
// now we can join all the names in one string
const joinedNames=names.join(" ")
console.log(joinedNames);



// with() it replaces a value from given index
// takes two arguments index andf value
// doesnot modify original array and return new array
const primeNo=[1,3,5,7,13]
const newValue=primeNo.with(3,11)
console.log(newValue);




// flat(dept) methos is used to flaten nested array into single level array
// it takes argument dept it tells the fucntion how dept you wan to flaten the array
// defualt dept is 1
// return new array
// it can flaten infintly nested array just pass the Infinity in arguments
//it can remove empty slot in the array
const flat=[1, [2, 3]];
const falten=flat.flat()
console.log(falten);


const deepArr = [1, [2, [3, [4, 5]]]];
console.log(deepArr.flat(2)); // [ 1, 2, 3, [ 4, 5 ] ]
console.log(deepArr.flat(3)); // [ 1, 2, 3, 4, 5 ]


const veryDeepArr = [1, [2, [3, [4, [5]]]]];
console.log(veryDeepArr.flat(Infinity)); // [1, 2, 3, 4, 5]


const emptySLot = [1, , 3, [4, , 6]];
console.log(emptySLot.flat()); // [1, 3, 4, 6]


const strArr = ["abc", ["befg", ["chi"]]];
console.log(strArr.flat(2)); // ["a", "b", "c"]


const arr = [1, [2, null], [3, undefined]];
console.log(arr.flat()); // [1, 2, null, 3, undefined]

// real world example
const apiResponse = [
    ["item1", "item2"],
    ["item3"],
    ["item4", "item5"]
  ];
  console.log(apiResponse.flat()); 
  // ["item1", "item2", "item3", "item4", "item5"]
  




// iterator function of array
// keys() // return iterator of index and should be spread out in array [...arr.keys()]
// values()
// entries()

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



console.log([...users.keys()]); //[0, 1, 2, 3,4, 5, 6]
console.log([...users.values()]); // return values on an array
console.log([...users.entries()]); // return index with value insinde an array [[0,value],[1,value],[2,value]]






// how to convert json to string and string to json
// JSON.stringify(jsondata) used to convert json into stringify
// JSON.parse(stringData) used to convert stringify data into json 
const jsondata=[
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 28 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "David", age: 22 },
    { id: 5, name: "Eva", age: 27 }
  ];
  
const stringify=JSON.stringify(jsondata)
console.log("string", stringify);
const parse=JSON.parse(stringify)
console.log("parsed",parse);


const longJosn={
    "user": {
      "id": "u1234567890",
      "username": "mdadilkhan",
      "email": "adil.khan@example.com",
      "passwordHash": "$2b$10$abc123xyz",
      "isActive": true,
      "role": "admin",
      "createdAt": "2023-07-01T12:30:45Z",
      "updatedAt": "2024-05-21T11:00:00Z",
      "profile": {
        "firstName": "Md",
        "lastName": "Adil Khan",
        "gender": "male",
        "dob": "1995-06-15",
        "nationality": "Indian",
        "languages": ["English", "Hindi", "Urdu"],
        "bio": "Full Stack Developer with a passion for scalable backend systems and elegant frontends.",
        "avatar": {
          "url": "https://example.com/images/user/u1234567890.jpg",
          "thumbnail": "https://example.com/images/user/u1234567890_thumb.jpg"
        }
      },
      "contact": {
        "phone": {
          "mobile": "+91-9876543210",
          "alternate": "+91-8765432109"
        },
        "address": {
          "street": "H-23, Azad Nagar",
          "city": "Delhi",
          "state": "Delhi",
          "country": "India",
          "postalCode": "110001"
        },
        "social": {
          "linkedin": "https://linkedin.com/in/mdadilkhan",
          "github": "https://github.com/mdadilkhan",
          "twitter": "@mdadilkhan"
        }
      },
      "employment": {
        "current": {
          "company": "TechDev Pvt Ltd",
          "position": "Senior Full Stack Developer",
          "startDate": "2023-01-01",
          "isRemote": true,
          "skills": ["Node.js", "React", "MongoDB", "Docker", "AWS"]
        },
        "previous": [
          {
            "company": "CodeBrew",
            "position": "Full Stack Engineer",
            "startDate": "2021-05-01",
            "endDate": "2022-12-15"
          },
          {
            "company": "Freelancer",
            "position": "Web Developer",
            "startDate": "2019-08-01",
            "endDate": "2021-04-30"
          }
        ]
      },
      "preferences": {
        "theme": "dark",
        "language": "en-US",
        "notifications": {
          "email": true,
          "sms": false,
          "push": true
        },
        "privacy": {
          "profileVisibility": "public",
          "showOnlineStatus": false,
          "shareActivity": false
        }
      },
      "devices": [
        {
          "deviceId": "dev001",
          "type": "mobile",
          "os": "Android",
          "lastUsed": "2024-05-20T08:00:00Z",
          "ip": "103.122.44.10"
        },
        {
          "deviceId": "dev002",
          "type": "laptop",
          "os": "macOS",
          "lastUsed": "2024-05-21T10:45:00Z",
          "ip": "192.168.1.102"
        }
      ],
      "activityLog": [
        {
          "action": "login",
          "timestamp": "2024-05-21T10:45:00Z",
          "location": "Delhi, India",
          "ip": "192.168.1.102"
        },
        {
          "action": "update_profile",
          "timestamp": "2024-05-20T13:10:00Z"
        },
        {
          "action": "logout",
          "timestamp": "2024-05-20T13:15:00Z"
        }
      ],
      "subscriptions": {
        "plan": "Pro",
        "status": "active",
        "renewalDate": "2025-07-01",
        "features": {
          "projects": 50,
          "storage": "1TB",
          "support": "24/7"
        },
        "paymentMethod": {
          "type": "credit_card",
          "last4": "1234",
          "billingAddress": {
            "street": "H-23, Azad Nagar",
            "city": "Delhi",
            "country": "India"
          }
        }
      }
    }
  }
  

  const longString=JSON.stringify(longJosn)
  console.log(longString);
  const longStringParsed=JSON.parse(longString)
  console.log(longStringParsed);
  
  