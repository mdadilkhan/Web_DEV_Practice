// Throttling is a technique used to limit the exuecution of a function in given period of time  even when the event trigger continuosly done by user

function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    // console.log(args);
    const now = new Date().getTime();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}





function showDimensions() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const dimensionsEl = document.getElementById('dimensions');
    console.log(dimensionsEl);
    
    if (dimensionsEl) {
      dimensionsEl.innerText = `Width: ${width}, Height: ${height}`;
    }
    
    console.log('Resize event at', new Date().toLocaleTimeString());
  }
  
  // Attach throttled resize handler
//    window.addEventListener('resize',showDimensions);// without throtling 
  window.addEventListener('resize', throttle(showDimensions, 2000));





// 1Q. What happens if you call a throttled function too often?
// Only the first call within the time interval will be executed. Others are ignored until the timer resets.

// 2Q. How do you preserve this in a throttled function?
// Use func.apply(this, args) inside the throttle function.


// 3Q. Can throttling be used with async functions?
// Yes, just throttle the function. Awaiting inside the throttled function works.


//4Q. How does throttling improve performance?
//By reducing the number of expensive operations, you:
//Save CPU cycles
//Avoid layout thrashing
//Improve UX & responsiveness