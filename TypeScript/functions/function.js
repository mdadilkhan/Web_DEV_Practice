// fucntions
// fucntion types
// optional and default parameter
// rest parameter
// overloads
// this is valid syntax of fucntion
function abcd() {
}
var abcd1 = function () {
};
// function with its return type
function call() {
}
var call1 = function () {
};
// function with paramter and its return type
function bind(name) {
    return "hellow";
}
var bind1 = function (name) {
    return "hello";
};
// ways to pass fucntion in fucntion with its type argument and type aliases
// ✅ 1. Using Inline Arrow Function (Most Common)
function greetUser(name, cb) {
    var message = name;
    cb(message);
}
greetUser("Md Adil Khan", function (msg) {
    console.log("hello ".concat(msg));
});
// ✅ 2. Using Named Function as Callback
function logMessage(msg) {
    console.log(msg);
}
function greetUser1(name, cb) {
    cb(name);
}
greetUser1("Md Adil Khan", logMessage);
function greet(name, cb) {
    cb("Welcome, ".concat(name));
}
greet("Asif", function (text) { return console.log(text); });
function notifyUser(name, cb) {
    cb("Hey ".concat(name, ", you have a new message!"));
}
notifyUser("Adil", function (m) { return console.log(m); });
// rest parameter
// here it is working as rest parameter
function max(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(name);
    // here it is working as spread operator 
    return Math.max.apply(Math, args);
}
var ans = max("Saniya Atique", 1, 2, 3, 4, 5, 6, 67, 7, 323, 312);
console.log(ans);
