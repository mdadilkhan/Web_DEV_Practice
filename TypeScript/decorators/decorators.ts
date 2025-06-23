
// method decorator
import {Log,LoggingLevel} from './methodDecorator'
import { SealClass } from './classDecorator';
import { DatabaseName } from './propertyDecorators';
// class level decorator
@SealClass()
class DbService{

    // property level decorators
    @DatabaseName()
    myName:string

    // methdod level decorators
    @Log(LoggingLevel.DEBUG)
    public  hello(){
        console.log("fucntion hello");
        
    }
    @Log(LoggingLevel.DEBUG)
    public  saveData(data:any){
        console.log("saving data in database...",data);
    }
}


const db=new DbService()
db.saveData("hello Adil")
db.hello()


// now create a new method inside the DbService  class after makiing decorator of seal
// it is also way to define class property using this method
// this will give error
// Object.defineProperty(DbService,"sayHello",{value:()=>{
//     console.log("hello after sealing");
    
// }})


// property decorator 
db.myName="BlogApp"