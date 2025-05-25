const redis = require('./client')




async function init(){
   try {
     const res=await redis.xadd('race:bihar','*', 'rider','Adil', 'speed','140','checkpost','1', 'location_id','1'
     )
     console.log(res);
     
   } catch (error) {
    console.error("❌ Redis operation failed:", error);
     
   }
}


init()