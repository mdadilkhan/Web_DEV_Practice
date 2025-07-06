//hoisting is the phenomena in js by which uou can access the varibale and fucntion even before you have initilized it


// here it will execute function but for x it is undefined
// but for varible it will give undefiend only when it is vaar type of varibale if let and const it will give refrence error
getName()
console.log(x);
var x=7

function getName(){
    console.log("hello");
    
}


// here it is accessible 
getName()
console.log(x);





// when using var with anonymous and arrow function whcih is asigned in varible of type var then
//  varible is hoisted and placed undefiend and if u wccess those anonymous and arrow fucntion it will give you type error
// when usign with let or const which is not hoisted then will give you ReferenceError: Cannot access 'getName1' before initialization



// getName1()

// var getName1=function(){

//     console.log("adil");
// }


// **note**
// let and const varibale is also hoisted but not initiliazed so accessing before it give you refrence error unlike var which is initilized to undefined




