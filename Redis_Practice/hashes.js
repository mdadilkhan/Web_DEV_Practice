const redis = require("./client");

async function init() {
  try {
    //    const res=await redis.hset('user:124',{
    //     name:"Md Asif Khan",
    //     coleg:"PUSA",
    //     totalExp:0,
    //     lastCompany:""
    //    })

    //how to change specific filed
    // const res5=await redis.hset("user:124",'lastCompany','Longshort Lab')

    // how to change multiple filed
    // const res6=await redis.hset('user:123',{
    //     name:'MD Aamir Khan',
    //     totalExp:5,
    //     lastCompany:'ZF Groups'
    // })

    // get single element of a hash key
    //    const res1=await redis.hget('user:124','name')

    // get whole object of a hash key
    //    const res2=await redis.hgetall('user:124')

    // get sll specified element
    // const res3=await redis.hmget("user:123",['name','coleg'])

    //it will increment specified filed by a specified number
    // const res4=await redis.hincrby('user:124','totalExp',2);

    // how to delete apecific filed or entire hash
    await redis.hdel("user:123", "coleg");
    // compltetly delted
    // await redis.del("user:124");


    const res7=await redis.hlen('user:123')
       console.log("result",res7);
  } catch (error) {
    console.error("❌ Redis operation failed:", error);
  }
}

init();
