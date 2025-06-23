// Generics
// Generic fucntion
// Generic Classes
//Generic Interface
// Generics are a way to create reusable components that work with any data type while keeping type safety.
// Instead of specifying a specific type, you use a placeholder (like T) that gets filled in later.
function abcd(a) {
    console.log(typeof a);
}
// in calling time you dont need to specify explicitly let TS infer it
abcd("Md Adil Khan");
abcd(50);
abcd(false);
abcd(false);
// same this with arrow function
var hello = function (a) {
    console.log(a);
};
hello("Md Adil Khan");
hello(50);
hello(false);
// Example 1
function printAndRetunrGEnerics(a, b, c) {
    return a;
}
printAndRetunrGEnerics("Adil", 24, false);
// Example 2
function printAndRetunrGEnerics1(a, b, c) {
    var sum = Number(a) + b;
    console.log(sum);
    console.log(c);
    // both below line of code is called as type assertion both are same thing way is diff
    // return sum as T
    return sum;
}
var ans = printAndRetunrGEnerics1("12", 10, "hello my name is Adil");
console.log(ans);
//Example 3
function multipleGenerics(a, b, prefix) {
    console.log("".concat(prefix, ":"), a, b);
    // returning combilned generic type in array
    return [a, b];
}
// Usage:
var merged1 = multipleGenerics("Adil", 25, "User Info");
var merged2 = multipleGenerics(true, "Available", "Status");
console.log(merged1); // ["Adil", 25]
console.log(merged2);
function log(obj) {
    console.log(obj);
    return obj;
}
var ans1 = log({ name: "md adil khan", coleg: "JMI", info: "Passes out in Batch 19-23", profile: "mypic.jpeg" });
console.log(ans);
// complete generic fucntion with interface
function log1(obj) {
    console.log(obj);
    return obj;
}
var ans2 = log1({
    name: "Md Adil Khan",
    coleg: "JMI",
    info: "Passed out in Batch 19–23",
    profile: "mypic.jpeg",
});
console.log(ans1);
// generic class
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, age) {
        this.name = name;
        this.age = age;
    }
    return BottleMaker;
}());
var b1 = new BottleMaker("Md Adil Khan", 32);
var b2 = new BottleMaker(false, 32);
console.log(b1);
console.log(b2);
