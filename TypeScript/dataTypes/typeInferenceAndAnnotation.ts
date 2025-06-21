// Type Inference
// Tyep Annotation


// >>>> Type Inference <<<<<
//when you dont explicitly tell variable its type then by looking the value of that variable
//Typescript gueses its type is called Type Inference

// Example 1 

let age=32
// age='32'// give error bec age is no assigned by ts


// Example 2 
function add(a: number, b: number) {
  return a + b; // TS infers return type as `number`
}
const result = add(5, 10); // `result` is inferred as `number`


// Example 3

const person1 = {
  name: "Alice", // `string` inferred
  age: 30        // `number` inferred
};
// person1.name = 123; // ❌ Error: Must be `string`




// >>>> Type Annotation <<<<<
// the way of explicitlity definining type of varibale is called type Annotation

const aamir:string="cbskbdckbsdcbsdc"
let user:string | boolean | number
user="4892734"
user=7979879,
user=true