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
