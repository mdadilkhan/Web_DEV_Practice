const redis = require("./client");

async function init() {
  try {
    //    how to add single element
    const res=await redis.zadd('leaderboard', 100, 'Adil');
    console.log(res);
    
    // Add Multiple Elements (Manually)
    const res1=await redis.zadd('leaderboard', 120, 'Asif', 90, 'Ahmed', 110, 'Rahul');
    console.log(res1);



    // Add Using an Array of Scores and Members
    const data = [130, 'Anjali', 95, 'Priya', 105, 'Vikram'];
    const res2 = await redis.zadd('leaderboard', ...data);
    console.log(res2);
    
    // Dynamic Addition from Array of Objects
    const users = [
        { name: 'Zara', score: 100 },
        { name: 'Aman', score: 110 },
        { name: 'Divya', score: 90 }
      ];

      const usersData = users.flatMap(user => [user.score, user.name]);
      console.log(usersData);
      
      const res4 = await redis.zadd('leaderboard', ...usersData);
      console.log(res4);
      

      //how to remove memeber from sorted set

    //delete single element
    //  const res5= await redis.zrem('leaderboard','Divya')
    //  console.log(res5);

    //delete multiple element
    // const delItem=['Divya','Anjali','Priya','Zara']
    // const res6=await redis.zrem('leaderboard',...delItem); 
    // console.log(res6);
    
    const res7=await redis.zrange('leaderboard',0,-1);
    console.log(res7);
    const res8=await redis.zrevrange('leaderboard',0,-1);
    console.log(res8);
     
    // const res8=await redis.del('leaderboard')
    // console.log(res8);
    

  } catch (error) {
    console.error("❌ Redis operation failed:", error);
  }
}

init();
