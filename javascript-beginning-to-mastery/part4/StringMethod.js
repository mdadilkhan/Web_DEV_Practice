// >>>>>>>> How to check method of object <<<<<<<<<<<
const str="Adil"
const str1=new String("Khan")


console.log(String.prototype)//It gives the prototype object from which your array inherits — which is String.prototype
console.log(Object.getPrototypeOf(str));//It gives the prototype object from which your array inherits — which is String.prototype
console.log(Object.getOwnPropertyNames(String));
console.log(Object.getOwnPropertyNames(String.prototype));



