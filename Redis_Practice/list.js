const redis=require('./client')


// async function queue(val){

//     try {
//         //  await redis.lpush('queue',val)
//         //  await redis.rpop('queue')
//         const list=await redis.lrange('queue',0,-1);
//         console.log(list);
//     } catch (error) {
//         console.error('❌ Redis operation failed:', error);
          
//     }
    
// }


// queue("first")
// queue("second")
// queue("third")
// queue("fourth")
// queue("fifth")
// queue("sixth")



// queue()
// queue()
// queue()
// queue()


// queue()




async function stack(val){

    try {
        //  await redis.lpush('stack',val)
         const popped=await redis.lpop('stack')
         console.log(popped);
         
        const list=await redis.lrange('stack',0,-1);
        console.log(list);
        const length=await redis.llen('stack')
        console.log("length",length);
        
    } catch (error) {
        console.error('❌ Redis operation failed:', error);
          
    }
    
}




// stack('first')
// stack('second')
// stack('third')
// stack('fourth')
// stack('fifth')



// stack(['bike:1', 'bike:2', 'bike:3', 'bike:4', 'bike:5'])

stack()