module.exports = async (message) => {
    const key = message.key.toString();
    const value = JSON.parse(message.value.toString());
  
    console.log(`📦 Order consumed: ${key}`, value);
  
    // Add DB logic or side effects here
  };
  