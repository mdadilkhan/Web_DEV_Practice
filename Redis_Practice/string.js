const redis=require('./client')

async function init() {
    try {
      const key = 'msg:123';
      const value = 'Hey I am Adil learning Redis';
      
      await redis.set(key, value, 'EX', 60);
  
      const res = await redis.get(key);
      console.log('res >>', res);
    } catch (error) {
      console.error('❌ Redis operation failed:', error);
    }
  }
  
  init();