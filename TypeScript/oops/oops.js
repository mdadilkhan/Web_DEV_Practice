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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Mobile = /** @class */ (function () {
    function Mobile(name, price) {
        this.name = name;
        this.price = price;
    }
    return Mobile;
}());
var obj = new Mobile("Samsung", 14999);
console.log("obj>>", obj);
console.log(obj.name);
console.log(obj.price);
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, dob, isHandsome, age) {
        if (age === void 0) { age = 0; }
        this.name = name;
        this.dob = dob;
        this.isHandsome = isHandsome;
        this.age = age;
    }
    return HumanMaker;
}());
// alternate approach of above is this 
// you dont need to decalre variable seperately you can do this in contructor by using access modifier
//  it will create and assing value in one go 
// less manual work
// you can do optional with default value but should be in last if not in last then pass undefined explicityly
// you can do optional field in contructor parameter but it should be the last filed or pass undefined for mid params
// TypeScript constructor arguments are position-based
var HumanMaker1 = /** @class */ (function () {
    function HumanMaker1(name, dob, isHandsome, age) {
        if (isHandsome === void 0) { isHandsome = true; }
        this.name = name;
        this.dob = dob;
        this.isHandsome = isHandsome;
        this.age = age;
    }
    return HumanMaker1;
}());
var boy1 = new HumanMaker("Adil", "12/12/2000", true, 24);
console.log("boy>>", boy1);
var boy2 = new HumanMaker1("Asif", "12/12/2004", false, 22);
console.log(boy2);
// Access modifier
var SBI_Bank = /** @class */ (function () {
    function SBI_Bank(ifsc_code, accNo, amount) {
        this.ifsc_code = ifsc_code;
        this.accNo = accNo;
        this.amount = amount;
    }
    SBI_Bank.prototype.credited = function (amount) {
        this.amount += amount;
    };
    SBI_Bank.prototype.debited = function (amount) {
        if (amount <= this.amount) {
            this.amount -= amount;
        }
    };
    return SBI_Bank;
}());
var adil = new SBI_Bank("ASDF123123AD", "SBI10000BR", 5000);
adil.ifsc_code = "CBSDCSKC123123"; // this is ok
// adil.amount=10000 // this is not possible bec private member is not accessible outside the class
adil.credited(5000);
adil.debited(1000);
console.log(adil);
// with public modifier
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name) {
        this.name = name;
    }
    BottleMaker.prototype.getName = function () {
        console.log(this.name);
    };
    return BottleMaker;
}());
var MetalBottleMaker = /** @class */ (function (_super) {
    __extends(MetalBottleMaker, _super);
    // dont give access modifier to varible which belong to parent class
    function MetalBottleMaker(name, price) {
        // super keyword is used to access the constructor of parent class and it is mandatory to put super
        var _this = _super.call(this, name) || this;
        _this.price = price;
        return _this;
    }
    MetalBottleMaker.prototype.getValue = function () {
        // only methods can be accessed using super.
        _super.prototype.getName.call(this);
        //console.log(super.name);// give Error
        console.log(this.price);
    };
    return MetalBottleMaker;
}(BottleMaker));
var b1 = new MetalBottleMaker("Milton", 499);
b1.getValue();
// with private
var PirvateClass = /** @class */ (function () {
    function PirvateClass(name) {
        this.name = name;
    }
    PirvateClass.prototype.getName = function () {
        console.log(this.name);
    };
    PirvateClass.prototype.chnageName = function () {
        this.name = "Md Asif";
    };
    return PirvateClass;
}());
var p1 = new PirvateClass("Md Adil");
//console.log(p1.name);// this wil give error bec private varible can not be accessed outside the class
p1.getName();
//p1.chnageName()// private method cannnot be accessed outside the class
var PrivateChildClass = /** @class */ (function (_super) {
    __extends(PrivateChildClass, _super);
    function PrivateChildClass(name, coleg) {
        // here name is passes to parent calss where it set the private varibale name
        var _this = _super.call(this, name) || this;
        _this.coleg = coleg;
        return _this;
    }
    // You cannot access `this.name` here, because `name` is private in the parent
    PrivateChildClass.prototype.introduce = function () {
        this.getName(); // ✅ Okay to call a public method that uses private data
        // console.log(this.name); ❌ Cannot access 'name' directly
    };
    return PrivateChildClass;
}(PirvateClass));
var pc1 = new PrivateChildClass("Adnan", "PUSA");
pc1.introduce();
pc1.getName();
p1.getName(); // p1 is diff object and pc1 is diff object
// Proitected access modifier
// Parent class using `protected`
var Person = /** @class */ (function () {
    function Person(fullName) {
        this.fullName = fullName;
    }
    Person.prototype.getFullName = function () {
        console.log("Full name (from parent):", this.fullName);
    };
    Person.prototype.updateName = function (newName) {
        this.fullName = newName;
    };
    return Person;
}());
// Child class that extends the parent
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fullName, college) {
        var _this = _super.call(this, fullName) || this; // ✅ sets protected fullName
        _this.college = college;
        return _this;
    }
    Student.prototype.introduce = function () {
        console.log("Introducing (from child):", this.fullName); // ✅ allowed with protected
    };
    Student.prototype.changeStudentName = function (newName) {
        this.updateName(newName); // ✅ can call protected method from parent
    };
    return Student;
}(Person));
// Create instances
var s1 = new Student("Adnan Khan", "PUSA");
s1.introduce(); // Introducing (from child): Adnan Khan
s1.getFullName(); // Full name (from parent): Adnan Khan
s1.changeStudentName("Md Adil"); // Update name via protected method
s1.introduce(); // Introducing (from child): Md Adil
s1.getFullName(); // Full name (from parent): Md Adil
// console.log(s1.fullName); ❌ Error: 'fullName' is protected
// getter and setter
//in ts dont need to create method for getter and setter ts provide keywords for this
// find those varible which needs to be in getter and setter and 
// give some convention like _ before the varibale but not mandatory its a good practice
var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
    }
    Object.defineProperty(User.prototype, "name", {
        // this is the sntax of getter and setter
        // name of the getter and setter can be same due to its overlaoding porperites
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var u1 = new User("Md Adil Khan");
//we dont need to call getter and setter like other method we can use like properties
// see we dont need () paranthesis to call getter act like a properites
u1.name = "Md Asif Khan";
console.log(u1.name);
// static keyword
// in ts Math is a class but still we dont need to use 'new' Keyword for calling method property of Math class
// similar with Number class this is done only bec of static keyword
// A static property or method belongs to the class itself, not to instances.
// Access it using the class name: ClassName.property or ClassName.method().
// ❌ INVALID
// constructor(public static id: string) {} ❌ Not allowed
// Example 1
var Apple = /** @class */ (function () {
    function Apple() {
        this.made = "Made In USA";
    }
    Apple.getPrice = function (weight) {
        return weight * this.price;
    };
    Apple.prototype.getManufacturer = function () {
        return this.made;
    };
    Apple.price = 180;
    Apple.hasImported = false;
    return Apple;
}());
// this is accesible bec these are static method and property
console.log(Apple.price);
console.log(Apple.hasImported);
console.log(Apple.getPrice(5));
var a1 = new Apple();
console.log(a1); // only available non static property and method using dot operator
// Example 2
var Counter = /** @class */ (function () {
    function Counter() {
        Counter.count++; // Accessing static variable
    }
    Counter.getCount = function () {
        console.log("Count:", Counter.count);
    };
    Counter.count = 0;
    return Counter;
}());
var c1 = new Counter();
var c2 = new Counter();
Counter.getCount(); // Count: 2 ✅
// static with access modifier
// public
var App = /** @class */ (function () {
    function App() {
    }
    App.version = "1.0.0";
    return App;
}());
console.log(App.version); // ✅ "1.0.0"
// private
var Secret = /** @class */ (function () {
    function Secret() {
    }
    Secret.revealKey = function () {
        console.log("Secret Key:", this.key);
    };
    Secret.key = "abc123";
    return Secret;
}());
// console.log(Secret.key); ❌ Error: key is private
Secret.revealKey(); // ✅ Secret Key: abc123
// protected
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.getCategory = function () {
        console.log("From base:", this.category);
    };
    Base.category = "Base Class";
    return Base;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.printCategory = function () {
        console.log("From child:", this.category); // ✅ can access protected static
    };
    return Child;
}(Base));
Child.printCategory(); // ✅ From child: Base Class
// console.log(Base.category); ❌ Error
// readonly
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.PORT = 8080;
    return Config;
}());
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving...");
    };
    return Animal;
}());
// const a1=new Animal() // give error bec Animal is an abstract class yopu cannot create instance of abstract class
// Exmaple 1
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.move = function () {
        console.log("".concat(this.name, " is moving..."));
    };
    return Animal1;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Barking....");
    };
    return Dog;
}(Animal1));
var dog1 = new Dog("Tommy");
dog1.move();
dog1.makeSound();
// Example 2
// Abstract Class with Properties and Constructor
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    Vehicle.prototype.printBrand = function () {
        console.log("brand name is ".concat(this.brand, "...."));
    };
    return Vehicle;
}());
// if you dont have the constructor in child it paases all argument to parent constructor
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.start = function () {
        console.log("Car Started.....");
    };
    return Car;
}(Vehicle));
var c = new Car("Honda");
c.start(); // Honda car started 🚗
c.printBrand();
// abstract with static 
// you can call static method and properties of abstract calss using class name
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.info = function () {
        console.log(this.description);
    };
    Shape.description = "This is a shape.";
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return Circle;
}(Shape));
Shape.info(); // This is a shape.
var circle = new Circle(5);
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
