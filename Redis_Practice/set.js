const redis=require('./client')


async function init(){
    try {
        // await redis.sadd("bike:racing:Up",['Apache','pulsar'])
        // await redis.sadd("bike:racing:bihar",'pulsar');
        
        //for removing
        // await redis.srem("bike:racing:Up","Apache")


        // for checking elemnt is presnt or not
    //    console.log(await redis.sismember('bike:racing:Up','pulsar'));


       // intersection return an array if any common value is presnt
    //    console.log(await redis.sinter('bike:racing:Up','bike:racing:bihar'));
    //    console.log(await redis.scard('bike:racing:bihar'));
       
       
    } catch (error) {
        console.error('❌ Redis operation failed:', error);
        
    }
}



init()