
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


