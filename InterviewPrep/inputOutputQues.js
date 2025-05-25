// // 1.Q
// let arr = [1, 2, 3, 4, 5, -6, 7];
// arr.length = 0;
// console.log(arr);
// // Output : [ ]
// // Reason : The length of the array has been set to 0, so the array becomes empty.


// // 2.Q
// x = 10;
// console.log(x); //due to hoisting value of x is 10
// var x;
// // Output : 10
// // Reason : The declaration of the variable x is hoisted to the top of its scope.

// // 3.Q
// let a = { x: 1, y: 2 }
// let b = a;
// b.x = 3;
// console.log(a);
// console.log(b);
// // Output : { x: 3, y: 2 } { x: 3, y: 2 }
// // Reason : 'a' and 'b' both are pointing to the same reference.


// // 4.Q
// for(var i = 0; i < 10; i++){
//     setTimeout(function(){
//       console.log("value is " + i);
//   })
// }

// // Output : 10 times, "value is 10"
// //Reason : "var" has a function scope, and there will be only one shared binding for the iterations.
// //By the time the setTimeout function gets executed, the for loop has already completed and the value of the variable i is 10.


// // 5.Q
// for(let i = 0; i < 10; i++){
//     setTimeout(function(){
//       console.log("value is " + i);
//   })
// }
// // Output : 10 times "value is" followed by the value of i in each iteration, from 0 to 9
// // Reason : "let" has a block scope, and a new binding will be created for each iteration. Here,
// // a new variable i is created and has a different value for each iteration of the loop.


// // 6.Q
// function hello() {
//     console.log("1");
//       setTimeout(() => {
//           console.log("2");
//       })
//     console.log("3");
//   }
//   hello();

// //   Output : "1" followed by "3", and then after a small delay, "2"
// //   Reason : setTimeout function register a callback when main thread is empty then it will execute the callback code


// // 7.Q
// let f = "8";
// let a = 1;
// console.log((+f)+a+1);
// Output : 10 




// // 8.Q
// let a = 10;
// if(true){
//    let a = 20;
//    console.log(a, "inside");
// }
// console.log(a, "outside");
// // Output : 20 inside 10 outside



// // 9.Q
// var a = "xyz";
// var a = "pqr";
// console.log(a)
// // Output : pqr

// // 10.Q
// const arr1 = [1, 2, 3, 4];
// const arr2 = [6, 7, 5];
// const result = [...arr1, ...arr2];
// console.log(result);
// // Output : [1,2,3,4,6,7,5]


// 11.Q
const person1 = { name: 'xyz', age: 21 };
const person2 = { city: 'abc', ...person1 };
console.log(person2);
// Output : {city:'abc',name:'xyz',age:21}


// 12.Q
console.log(5 < 6 < 7);
// Output : true
// Reason : In JavaScript, the < operator evaluates expressions from left to right.
//          First, the expression 5 < 6 is evaluated, resulting in true because 5 is less than 6. 
//          Then, the expression true < 7 is evaluated. In this case,
//          JavaScript performs type coercion and converts true to the number 1. Therefore, the expression becomes 1 < 7, which is true.
// What is Type coercion??
// Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. It's part of JavaScript’s dynamic typing, which allows variables to hold any type of value at any time.
// Two Types of Type Coercion
//  1.Implicit Coercion (Automatic done by js engine)
//    console.log("5" + 1);    // "51" (number 1 is coerced to string)
//    console.log("5" - 1);    // 4 (string "5" is coerced to number)
//    console.log(true + 1);   // 2 (true → 1)
//    console.log(false + 10); // 10 (false → 0)
//    console.log(null + 1);   // 1 (null → 0)
//  2.Explicit Coercion (Manual)
//    Number("5")      // 5
//    String(123)      // "123"
//    Boolean("")      // false
//    Boolean("hello")



// 13.Q
console.log(7 > 6 > 5);
// Output : false
// Reason : 7>6 will give true and then true is converted into 1 then 1>5  give  false 


// 14.Q
console.log(0 == false);
console.log(1 == true);
// Output : true, true
// Reason : The == operator converts operands to a common type before making the comparison.
//          In both the cases, the boolean value will be converted to a number, i.e., false is converted to 0 and true is converted to 1.
//          So, the expression 0 == false is equivalent to 0 == 0 and 1 == true is equivalent to 1 == 1.


// 15.Q
console.log([11, 2, 31] + [4, 5, 6]);
// Output : "11,2,314,5,6"
// Reason : The + operator is used for both addition and string concatenation. When you try to concatenate two arrays using the + operator, the arrays are converted to strings and then concatenated together.
//          In this case, the arrays [11, 2, 31] and [4, 5, 6] are converted to strings as "11,2,31" and "4,5,6" respectively.
//          Then, the two strings are concatenated, resulting in "11,2,314,5,6".

// 16.Q
console.log({} == {}); 
console.log({} === {});
// Output : false, false
// Reason : When you compare objects using == or ===, it checks if they refer to the exact same object.
//          So even if they are looking same, they are pointing to different memory locations.





