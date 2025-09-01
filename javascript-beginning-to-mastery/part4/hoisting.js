//hoisting is the phenomena in js by which uou can access the varibale and fucntion even before you have initilized it


// here it will execute function but for x it is undefined
// but for varible it will give undefiend only when it is var type of varibale if let and const it will give refrence error
getName()
console.log(ans);
var ans=7

function getName(){
    var fn=5
    console.log("hello");
    
}


// here it is accessible 
getName()
console.log(ans);





// when using var with anonymous and arrow function whcih is asigned in varible of type var then
//  varible is hoisted and placed undefiend and if u wccess those anonymous and arrow fucntion it will give you type error
// when usign with let or const which is not hoisted then will give you ReferenceError: Cannot access 'getName1' before initialization



// getName1()

// var getName1=function(){

//     console.log("adil");
// }


// **note**
// let and const varibale is also hoisted but not initiliazed so accessing before it give you refrence error unlike var which is initilized to undefined







// for let
// let are hoisted too, but they go into a Temporal Dead Zone (TDZ) → they exist but are not initialized.
// Accessing them before the declaration gives a ReferenceError, not undefined.
console.log(ans1);
getName1()
let ans1=5
let getName1 = function(){
    console.log("hello");
    
}

getName1()
console.log(ans1);



// for const
//  const are hoisted too, but they go into a Temporal Dead Zone (TDZ) → they exist but are not initialized.
// Accessing them before the declaration gives a ReferenceError, not undefined.
console.log(ans2);
getName2()
const ans2=5
const getName2 = ()=>{
    console.log("hello");
    
}

getName2()
console.log(ans2);