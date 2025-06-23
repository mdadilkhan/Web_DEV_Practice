export function SealClass():ClassDecorator{
   return (constructor:Function)=>{
    console.log("class Constructor",constructor);
    console.log("class Constructor",Object.getOwnPropertyNames(constructor.prototype));

    Object.seal(constructor)
    Object.seal(constructor.prototype)
    
   }
}