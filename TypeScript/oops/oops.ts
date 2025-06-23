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







// getter and setter
//in ts dont need to create method for getter and setter ts provide keywords for this
// find those varible which needs to be in getter and setter and 
// give some convention like _ before the varibale but not mandatory its a good practice
class User{
    constructor(public _name:string){}
    // this is the sntax of getter and setter
    // name of the getter and setter can be same due to its overlaoding porperites
    public get name():string {
        return this._name
    }
    public set name(value:string){
      this._name=value
    }
    
}


const u1=new User("Md Adil Khan")
//we dont need to call getter and setter like other method we can use like properties
// see we dont need () paranthesis to call getter act like a properites
u1.name="Md Asif Khan"
console.log(u1.name)




// static keyword

// in ts Math is a class but still we dont need to use 'new' Keyword for calling method property of Math class
// similar with Number class this is done only bec of static keyword
// A static property or method belongs to the class itself, not to instances.
// Access it using the class name: ClassName.property or ClassName.method().
// ❌ INVALID
// constructor(public static id: string) {} ❌ Not allowed

// Example 1
class Apple{
    static price:number=180
    static hasImported:boolean=false
    made:string="Made In USA"

    static getPrice(weight:number):number{
        return weight*this.price
    }
    getManufacturer():string{
        return this.made
    }
}

// this is accesible bec these are static method and property
console.log(Apple.price);
console.log(Apple.hasImported);
console.log(Apple.getPrice(5));

const a1=new Apple()
console.log(a1);// only available non static property and method using dot operator





// Example 2
class Counter {
  static count = 0;

  constructor() {
    Counter.count++; // Accessing static variable
  }

  static getCount() {
    console.log("Count:", Counter.count);
  }
}

const c1 = new Counter();
const c2 = new Counter();

Counter.getCount(); // Count: 2 ✅





// static with access modifier
// public
class App {
  public static version = "1.0.0";
}

console.log(App.version); // ✅ "1.0.0"


// private
class Secret {
  private static key = "abc123";

  static revealKey() {
    console.log("Secret Key:", this.key);
  }
}

// console.log(Secret.key); ❌ Error: key is private
Secret.revealKey(); // ✅ Secret Key: abc123





// protected
class Base {
  protected static category = "Base Class";

  static getCategory() {
    console.log("From base:", this.category);
  }
}

class Child extends Base {
  static printCategory() {
    console.log("From child:", this.category); // ✅ can access protected static
  }
}

Child.printCategory(); // ✅ From child: Base Class
// console.log(Base.category); ❌ Error



// readonly

class Config {
  static readonly PORT = 8080;
}

// Config.PORT = 3000; ❌ Error: Cannot assign to 'PORT'
console.log(Config.PORT); // ✅ 8080








// Abstract classes

// An abstract class is a class that cannot be instantiated directly. It’s designed to be extended by other classes and often contains:
// abstract methods (without implementation)
// concrete methods (with implementation)
// shared properties

// | Feature                                        | Description                        |
// | ---------------------------------------------- | ---------------------------------- |
// | Can't be instantiated                          | `new Animal()` ❌ Error             |
// | Can have abstract + concrete methods           | Mixed logic is allowed             |
// | Subclasses **must implement** abstract methods | Or they will give an error         |
// | Great for **templates** and **blueprints**     | Think of it like a base "contract" |

// Syntax
abstract class Animal{
    abstract makeSound():void // must be implemented by subclass

    move():void{
        console.log("Moving...");
    }
}

// const a1=new Animal() // give error bec Animal is an abstract class yopu cannot create instance of abstract class





// Exmaple 1
abstract class Animal1 {
  constructor(public name: String) {}
  abstract makeSound(): void; // force subclass to define

  move(): void {
    console.log(`${this.name} is moving...`);
  }
}


class Dog extends Animal1{
    constructor(name:string){
        super(name)
    }
    makeSound():void{
        console.log("Barking....");
        
    }
}

const dog1=new Dog("Tommy")
dog1.move()
dog1.makeSound()



// Example 2
// Abstract Class with Properties and Constructor

abstract class Vehicle{
    constructor(protected brand:string){}
    abstract start():void
    printBrand():void{
        console.log(`brand name is ${this.brand}....`);
    }
}


// if you dont have the constructor in child it paases all argument to parent constructor
class Car extends Vehicle{
    start():void{
        console.log("Car Started.....");
        
    }
}

const c = new Car("Honda");
c.start();       // Honda car started 🚗
c.printBrand();



// abstract with static 
// you can call static method and properties of abstract calss using class name

abstract class Shape {
  static description = "This is a shape.";

  abstract getArea(): number;

  static info() {
    console.log(this.description);
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

Shape.info(); // This is a shape.
const circle = new Circle(5);
console.log(circle.getArea()); // 78.54




// ❗ Abstract vs Interface

// | Feature                | `abstract class`       | `interface`                          |
// | ---------------------- | ---------------------- | ------------------------------------ |
// | Can contain code?      | ✅ Yes (methods, logic) | ❌ No (only declarations)             |
// | Can be instantiated?   | ❌ No                   | ❌ No                                 |
// | Inherit from multiple? | ❌ No (only one class)  | ✅ Yes (multiple interfaces)          |
// | Use in constructor?    | ✅ Yes                  | ❌ Interfaces can’t have constructors |





// 🧠 When to Use Abstract Classes
// Use an abstract class when:

// You have a common base behavior for multiple related classes.

// You want to enforce structure while providing shared implementation.

// You're building a template-like base class.



// Summary
// | Feature                   | Abstract Class |
// | ------------------------- | -------------- |
// | Can’t be instantiated     | ✅              |
// | Can have logic (methods)  | ✅              |
// | Can have abstract methods | ✅              |
// | Forces child to implement | ✅              |
// | Supports access modifiers | ✅              |
// | Good for base template    | ✅              |
