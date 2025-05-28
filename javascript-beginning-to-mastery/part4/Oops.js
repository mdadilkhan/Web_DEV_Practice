//Expample -? 1
function personInfo(){
    // console.log("this>>",this)
    console.log(`Hii i am ${this.name} my age is ${this.age} and studying in ${this.college} University`)



}


const person1={
    name:"Md Aamir Khan",
    age:26,
    college:"NIT", 
    about:personInfo
}
const person2={
    name:"Md Adil Khan",
    age:24,
    college:"JMI", 
    about:personInfo
}
const person3={
    name:"Md Asif Khan",
    age:22,
    college:"PUSA", 
    about:personInfo
}


person1.about()
person2.about()
person3.about()


// //  Example - 2 
const obj={
    name:"Md Adil Khan",
    age:24,
    college:"JMI",
    about: function(){
        console.log(`Hii i am ${this.name} my age is ${this.age} and studying in ${this.college} University`)
    },
}


const obj2={
    name:"Md Asif Khan",
    age:24,
    college:"PUSA",

}


obj.about()
obj.about.call(obj2)
const func=obj.about.bind(obj2)

func()





// >>>>>>>>>>>>>>>>>>>>> OOPS <<<<<<<<<<<<<<<<<<<<<<<<<

// proto,prototype,new keyword, class


const user={
    firstName:"Md Adil",
    lastName:"Khan",
    email:"mdadilakhtar8@gmail.com",
    age:24,
    address:"New Delhi Okhla",
    about: function(){
        return `My name is ${this.firstName} ${this.lastName} and age is ${this.age}`
    },
    isMajor:function(){
        return this.age>=18
    }
}

// suppose we need millions of user just like above then it is tedious task to create this much user so we need method for this
//1. create function 
//2. add key value pair
//3. and return object


function createUser(firstName,lastName,age,email,address){
    const obj={}
    obj.firstName=firstName
    obj.lastName=lastName
    obj.age=age
    obj.email=email
    obj.address=address
    obj.about=function(){
        // console.log(this);
        
        return `My name is ${this.firstName} ${this.lastName} and age is ${this.age}`
    }
    obj.isMajor=function(){
        // console.log(this);
        
        return this.age>=18
    }

    return obj;
}

const person4=createUser("Md Adil","Khan",18,"mdadilakhtar8@gmail.com","New Delhi")
const person5=createUser("Md Asif","Khan",16,"mdadilakhtar8@gmail.com","Biharsharif")
console.log(person4.isMajor())
console.log(person5.isMajor())



// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//in the above method when ever we create an object which is basically user then we are creating method for every object which takes space 
//so we have to adapt better approach which is bascially seperate object which consist of method and store the refrence of method inside createObject fcuntion 
//below is the better approach but also have one problem like if i have 1000 method in method object then we have to write refernce of all the fucntion inside the create Object fucntion


const createUser1Method={
    about:function(){
        // console.log(this);
        return `My name is ${this.firstName} ${this.lastName} and age is ${this.age}`
    },
    isMajor:function(){
        // console.log(this);
        return this.age>=18
    }
}

function createUser1(firstName,lastName,age,email,address){
    const obj={}
    obj.firstName=firstName
    obj.lastName=lastName
    obj.age=age
    obj.email=email
    obj.address=address
    obj.about=createUser1Method.about
    obj.isMajor=createUser1Method.isMajor
    return obj;
}
// console.log(createUser1());
const person6=createUser1("Md Adil","Khan",24,"mdadilakhtar8@gmail.com","New Delhi")
const person7=createUser1("Md Asif","Khan",17,"mdadilakhtar8@gmail.com","New Delhi")
console.log(person6)
console.log(person6.about())
console.log(person6.isMajor())
console.log(person7.about())
console.log(person7.isMajor())



//above problem can be solved using proto chaining
// just do minor changes in the above approach just remove method refrence from createUser1 method
// and instead of creating empty object literal use object.create() mwthod with parameter with object containing method
//this way all the method which is written inside an object it will attach in the proto of newly created object
//below is the corrected approach

const method={
    about:function(){
        // console.log(this);
        return `My name is ${this.firstName} ${this.lastName} and age is ${this.age}`
    },
    isMajor:function(){
        // console.log(this);
        return this.age>=18
    }
}

function createUser2(firstName,lastName,age,email,address){
    const obj=Object.create(method)
    obj.firstName=firstName
    obj.lastName=lastName
    obj.age=age
    obj.email=email
    obj.address=address


    return obj
}

const user1=createUser2("Md Adil","Khan",24,"mdadilakhtar8@gmail.com","New Delhi")
const user2=createUser2("Md Asif","Khan",17,"mdadilakhtar8@gmail.com","New Delhi")
console.log(user1.about())
console.log(user2.about())
console.log(user1.isMajor())
console.log(user2.isMajor())




// >>>>>>>>>>>>>>>>>>>> protoype <<<<<<<<<<<<<<<<<<<<

// In JavaScript, functions are first-class objects.
// This means you can add properties to a function just like you would to any object.
// So when you write myFunc.age = 24, you're assigning a property named age directly to the function object name.
//fucntion can work as a fucntion and as an object both so function gives us free space 
// these free space is nothing but an object and it is called prototype.
//only fucntons can provide prototype property
// Arrow function doensot have prototype property but still you can attach properties
// You’re attaching properties like .myname, .age, and .about directly to the function object — not its prototype.
// Only normal functions have a prototype


//using normal fucntion
function myFunc(){
    return "adil"
}
myFunc.prototype.myname = "Md adil Khan";
myFunc.prototype.age = 24;
myFunc.prototype.city = "Delhi";
myFunc.prototype.country = "India";
myFunc.prototype.hobby = "Coding";
myFunc.prototype.language = "JavaScript";
myFunc.prototype.framework = "React";
myFunc.prototype.level = "Intermediate";
myFunc.prototype.interest = "AI";
myFunc.prototype.goal = "Master JS";
myFunc.prototype.colege = "Master JS";
myFunc.prototype.about=function(){
    return `hello ${this.myname}`
}
console.log(myFunc)
console.log(myFunc.prototype.about())

//using arrow function
const  myFunc1=()=>{
    return "Asif"
}
myFunc1.myname = "Md Asif Khan";
myFunc1.age = 24;
myFunc1.city = "Delhi";
myFunc1.country = "India";
myFunc1.hobby = "Coding";
myFunc1.language = "JavaScript";
myFunc1.framework = "React";
myFunc1.level = "Intermediate";
myFunc1.interest = "AI";
myFunc1.goal = "Master JS";
myFunc1.colege = "Master JS";
myFunc1.about=()=>{
    return `hello ${this.myname}`
}
console.log(myFunc1)
//you cannot see properties of arrow function bec it is not attached in prototype so we have to use console.dir()
console.log(myFunc1.prototype)// undefiend bec no prototype bec arrwo function is an object 
console.dir(myFunc1);
console.log(Object.keys(myFunc1)) //bec myFunc1 is an object so we can get all the keys values using Object Mehtod
console.log(Object.values(myFunc1)) 
console.log(Object.entries(myFunc1)) 



// >>>>>>>>>>>>>>>>> we can connect functions in fucntion prototype  <<<<<<<<<<<<<<<<<<<<<<<

// instead of connecting fucntions in __proto__ we can also connect all functions in fucntion prototype


function createUser3(firstName,lastName,age,email,address){
   const user=Object.create(createUser3.prototype)
   user.firstName=firstName
   user.lastName=lastName
   user.age=age
   user.email=email
   user.address=address

   return user
}

createUser3.prototype.about=function(){
    // console.log(this);
    return `My name is ${this.firstName} ${this.lastName} and age is ${this.age}`
},
createUser3.prototype.isMajor=function(){
    // console.log(this);
    return this.age>=18
}

// console.log(createUser3.prototype)


const user3=createUser3("Md Adil","Khan",24,"mdadilakhtar8@gmail.com","New Delhi")
const user4=createUser3("Md Asif","Khan",22,"mdadilakhtar8@gmail.com","Pusa")
const user5=createUser3("Md Adnan","Khan",17,"mdadilakhtar8@gmail.com","Bihar")


console.log(user3);




// >>>>>>>>>>>>>>>>>>>>>>>>>>> new keyword <<<<<<<<<<<<<<<<<<<<<<
//wehen ever this createUSer4 method is called with or without argument it does three thing
// 1. create empty object {} whhich is basiclly ## this ##
// 2. return that object with initilization if any value is given to this method or not return object with filed name undefiend or empty object
// 3. create chain of __proto__ and set __proto__ with ptototype
// these 3 thing done my new keyword which we are doing manually previously  with  object.create() method my passing __proto__ object or passing prototype of a function
// it is called a constructor function
function CreateUser(name,age, add){
    // console.log("before>>",this)
     this.name=name
     this.age=age
     this.address=add

}
CreateUser.prototype.about=function(){
    return `My name is ${this.name} and age is ${this.age} and i live in ${this.address}.`
}
CreateUser.prototype.isMajor=function(){
    return this.age>=18
}

const user6=new CreateUser("Adil",24,"Delhi")
const user7=new CreateUser("Asif",16,"Pusa")
console.log(user6);
console.log(user6.about());
console.log(user7);
console.log(user7.about());


console.log(Object.keys(user6))
console.log(Object.values(user6))
console.log(Object.entries(user6))


// for in loop gives all teh keys of constructor fucntion including __proto__
// if i dont want then use method of object like Object.keys() Object.values() Object.entries()
// or use like this user6.hasOwnProperty(key) it will return true and false 
for(let key in user6){
    // console.log(key);
    if(user6.hasOwnProperty(key)){
        console.log(key)
    }
}



// >>>>>>>>>>>>>>>>>> Class Keyword <<<<<<<<<<<<<<<<<<<


class Employee{
    //when you create object using new keyword it called constructor and create object with the required filed
     constructor(empName,age,mobile){
        this.empName=empName
        this.age=age
        this.mobile=mobile
     }
     // these function will auto goes into prototype
     about(){
        return `My name is ${this.empName} and age is ${this.age} and my contact details is ${this.mobile}`
     }
     isMajor(){
        return this.age>18
     }
     sing(){
        return "la lala lalla la lala"
     }
   
}


const emp=new Employee("Md Adil Khan",32,8252250400)
console.log(emp);
console.log(emp.about());
console.log(emp.isMajor());
console.log(emp.sing());



//create an animal class and animal have to properties name and age 


class Animal{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    eat(){
        return `${this.name} is eating`
    }
    ages(){
        return `age of animal is ${this.age}`
    }
}


// const cow=new Animal("Cow",12)
// console.log(cow.eat());
// console.log(cow.ages());




//>>>>>>>>>>>>>>> Inheritance <<<<<<<<<<<<<<<
class Dog extends Animal{
  bark(){
    return 'boo boo'
  }
}


class Cat extends Dog{

    constructor(name,age,speed){
        super(name,age)
        this.speed=speed
    }
  getSpeed(){
    return `speed of ${this.name} is ${this.speed} km/h`
  }
}

const bubble = new Cat("Shakib",12,80)
console.log(bubble.eat());
console.log(bubble.ages());
console.log(bubble.bark());
console.log(bubble.getSpeed());



// >>>>>>>>>>>>>>>>>> getters and setters <<<<<<<<<<<<<<<<<<<

// with the help of get keyword before function we can call the function without paranthesis () 
// same for setter
// if you creat any static method with static keyword then you dont need to call that method using object name use class name
// calling with object will give error
class Students{
    constructor(name,age,course,college){
      this.name=name
      this.age=age
      this.course=course
      this.colege=college
    }

    about(){
        return `My name is ${this.name} and age is ${this.age} and my course is ${this.course} and college is ${this.colege}.`
    }

    get getAge(){
        return `students age is ${this.age}`
    }
    get getCollege(){
        return `students college name  is ${this.colege}`
    }
    //we can diretcly change the value of any property using object name but setter is useful for logics hwile changing the propert name value etc
    set setCollege(college){
        this.college=college.split(" ")[0]
    }
    // A static method is attached to the class itself, not to instances of the class.
    static classInfo(){
        return ' this is a class for student where it has info of student name age course and college'
    }
    // A static properties is just like function beongs to class not the instance
    static adress



}

const stud=new Students("Rocky",26,"B.tech","Jamia")
console.log(stud);

console.log(stud.getCollege);
console.log(stud.getAge);
stud.setCollege = "Pusa ckjbsdjkc"

console.log(stud);

// this will give error bec classInfo method is static you cannot call using object name
console.log(Students.classInfo()); 
Students.adress="Biharsharif"
console.log(Students.adress);





 












