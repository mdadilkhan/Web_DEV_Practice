//**
// classes and objects
// class Definition
// constructor
// Access Modifiers
// Readonly properties
// optional properties
// parameter properties
// getter and setter
// static member
// Abstract classes and methods
// */


class Mobile{
    name:string
    price:number
    constructor( name:string,price:number){
        this.name=name
        this.price=price
    }
}


const obj=new Mobile("Samsung",14999)
console.log("obj>>",obj);

console.log(obj.name);
console.log(obj.price);



class HumanMaker{

    // by default these varibale are pulic 
    name:string
    age:number
    dob:string
    isHandsome:boolean
    constructor(name:string,dob:string,isHandsome:boolean,age:number=0){
        this.name=name
        this.dob=dob
        this.isHandsome=isHandsome
        this.age=age
    }
}



// alternate approach of above is this 
// you dont need to decalre variable seperately you can do this in contructor by using access modifier
//  it will create and assing value in one go 
// less manual work
// you can do optional with default value but should be in last if not in last then pass undefined explicityly
// you can do optional field in contructor parameter but it should be the last filed or pass undefined for mid params
// TypeScript constructor arguments are position-based
class HumanMaker1 {
    constructor(public name: string,public dob: string,public isHandsome: boolean=true,public age?: number) {

    }
}


const boy1=new HumanMaker("Adil","12/12/2000",true,24)
console.log("boy>>",boy1);
const  boy2=new HumanMaker1("Asif","12/12/2004",false,22)
console.log(boy2);




// Access modifier

class SBI_Bank{
    constructor(public ifsc_code:string,public accNo:string,private amount:number ){
        
    }

    credited(amount:number){
       this.amount+=amount
    }
    debited(amount:number){
        if(amount<=this.amount){
            this.amount-=amount
        }
    }
}

const adil=new SBI_Bank("ASDF123123AD","SBI10000BR",5000)
adil.ifsc_code="CBSDCSKC123123"// this is ok
// adil.amount=10000 // this is not possible bec private member is not accessible outside the class


adil.credited(5000)
adil.debited(1000)
console.log(adil);






// with public modifier
class BottleMaker{
    constructor(public name:string){}
    getName(){
        console.log(this.name);
        
    }

}
class MetalBottleMaker extends BottleMaker{
    // dont give access modifier to varible which belong to parent class
    constructor(name:string,public price:number){
        // super keyword is used to access the constructor of parent class and it is mandatory to put super
        super(name)
    }
    getValue(){
        // only methods can be accessed using super.
        super.getName()
       //console.log(super.name);// give Error
       console.log(this.price);

       
    }
}

const b1=new MetalBottleMaker("Milton",499)
b1.getValue()




// with private

class PirvateClass{
    constructor(private name:string){}
    getName(){
        console.log(this.name);
        
    }
    private chnageName(){
        this.name="Md Asif"
    }
}

const p1=new PirvateClass("Md Adil")
//console.log(p1.name);// this wil give error bec private varible can not be accessed outside the class
p1.getName()
//p1.chnageName()// private method cannnot be accessed outside the class

class PrivateChildClass extends PirvateClass{
    constructor(name:string,public coleg:string){
        // here name is passes to parent calss where it set the private varibale name
        super(name)
    }
      // You cannot access `this.name` here, because `name` is private in the parent
  introduce() {
    this.getName(); // ✅ Okay to call a public method that uses private data
    // console.log(this.name); ❌ Cannot access 'name' directly
  }

}


const pc1=new PrivateChildClass("Adnan","PUSA")
pc1.introduce()
pc1.getName()
p1.getName()// p1 is diff object and pc1 is diff object




// Proitected access modifier

// Parent class using `protected`
class Person {
  constructor(protected fullName: string) {}

  getFullName() {
    console.log("Full name (from parent):", this.fullName);
  }

  protected updateName(newName: string) {
    this.fullName = newName;
  }
}

// Child class that extends the parent
class Student extends Person {
  constructor(fullName: string, public college: string) {
    super(fullName); // ✅ sets protected fullName
  }

  introduce() {
    console.log("Introducing (from child):", this.fullName); // ✅ allowed with protected
  }

  changeStudentName(newName: string) {
    this.updateName(newName); // ✅ can call protected method from parent
  }
}

// Create instances
const s1 = new Student("Adnan Khan", "PUSA");

s1.introduce();       // Introducing (from child): Adnan Khan
s1.getFullName();     // Full name (from parent): Adnan Khan

s1.changeStudentName("Md Adil"); // Update name via protected method
s1.introduce();       // Introducing (from child): Md Adil
s1.getFullName();     // Full name (from parent): Md Adil

// console.log(s1.fullName); ❌ Error: 'fullName' is protected
