// ✅ 🧩 Basic Promise Interview Questions
// 1. ❓ What is a Promise in JavaScript?
// Answer: A Promise is an object representing the eventual completion or failure of an asynchronous operation.
//         promise object have two thing current-state and result  there is only three state
//         if promise is fulfiled then it give reuslt else give error result and error is handled by then() and catch method.
//         if promise is reolved it will go into then() function if rejected then go to catch() block

// 2. ❓ What are the three states of a Promise?
// Answer:
// pending – initial state
// fulfilled – operation completed successfully
// rejected – operation failed

// 3. ❓ How do you create a Promise?

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const bool = 10 % 2 == 0 ? true : false;
    if (bool) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 5000);
});
console.log(myPromise);

// 4. ❓ What is the difference between resolve() and reject()?
// resolve() transitions a Promise to the fulfilled state.
// reject() transitions it to the rejected state.

// 5. ❓ How do you consume a Promise?

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

// 6. ❓ What is the difference between .then() and .catch()?
// .then() is called on success (fulfilled)
// .catch() handles errors (rejected)

const getUserDetails = (bool) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (bool) {
        res({ userId: 1234, name: "Md Adil Khan", coleg: "JMI" });
      } else {
        rej("Failed to resolve promise");
      }
    }, 3000);
  });
};

console.log(getUserDetails(true));

getUserDetails(true)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });




  

// ✅ 🧩 Intermediate Promise Interview Questions
// 7. ❓ What is Promise chaining?
// Answer: Linking .then() calls so that each depends on the result of the previous one.






// Example of Promise
const API = "https://api.github.com/users/mdadilkhan";

const promise = fetch(API);
console.log("fetch", promise);

promise
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const cart = ["Apple", "Bananna", "Papaya"];

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (cart.length >= 3) {
      console.log("✅ Order created successfully!");
      resolve("OrderID_12345");
    } else {
      reject("❌ Cart is empty. Order creation failed.");
    }
  });
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const product = {
  name: "iphone",
  price: 99999,
  model: 17,
  stock: 1,
};

function createOrder(product) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (product.stock >= 1) {
        res({
          orderId: "order_122jhv12vh121vh2",
          productId: "iphoenuyew1231",
          price: 99999,
        });
      } else {
        rej("order creation failed");
      }
    }, 1000);
  });
}

function paymentStarted(order) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (order.orderId) {
        res({
          status: true,
          orderId: order.orderId,
          paymentId: "pay_db12b3j3123j123vvv",
          productId: "iphoenuyew1231",
          price: 99999,
        });
      } else {
        rej("payment failed");
      }
    }, 3000);
  });
}

function sendNotificatin(paymentDetails) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (paymentDetails.status) {
        res("Sending mail to the customer");
      } else {
        rej("sending mail for payemnt failed");
      }
    });
  }, 5000);
}

createOrder(product)
  .then((res) => {
    return paymentStarted(res);
  })
  .then((res) => {
    return sendNotificatin(res);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });




// 8. ❓ What does Promise.all() do?
// Answer: Runs multiple promises in parallel and waits for all to succeed (or returns the first failure).
// it will reject whole if any one promise is rejected

// 10. ❓ What is Promise.allSettled()?
// Answer: Waits for all promises to settle (fulfilled or rejected) and returns their status and value/reason.
// it will either fullfiled all promise or rejcted what ever it will return array  of sattus with value or rejection

// 9. ❓ What is Promise.race()?
// Answer: Resolves or rejects as soon as the first promise settles, regardless of others.
// it will return ans of when ever any one rejects or resolved first

// 11. ❓ What happens if you return a value inside .then()?
// Answer: That value becomes the input for the next .then() in the chain.
// 12. ❓ How do you handle errors in chained Promises?
// By placing a single .catch() at the end.
// Or by using .catch() after each .then() if needed.
// 13. ❓ What is a microtask in relation to Promises?
// Answer: Promise callbacks (i.e., .then/.catch) are scheduled as microtasks, executed after the current call stack but before the next event loop tick.
// 14. ❓ What is the difference between async/await and Promises?
// Answer: async/await is syntactic sugar over Promises.
// Makes async code look synchronous and easier to read.
// 15. ❓ What is a Promise constructor anti-pattern?
// new Promise(async (resolve, reject) => {
//   const result = await doSomething(); // ❌ Don't use async inside new Promise
//   resolve(result);
// });

// 16. ❓ What is a "Promise leak" and how to prevent it?
// Answer: A Promise is created but never resolved/rejected — causing memory issues.
// Prevent by always resolving/rejecting or properly timing out.

// 18. ❓ Can you implement your own version of Promise.all()?








// promise method
// all
//Use Case: When multiple independent requests need to be completed together, and if any one fails, the whole operation should fail.
// 🔸 Example: Fetching profile, posts, and notifications together
// 🧠 Real-world: Dashboard loading where you want everything to be ready before rendering.

// allsettled
//  Real-world: Multi-file uploads, form validations, sending notifications to many users.


// race
// Use Case: When you care only about the fastest response, and don't care about the rest.
// 🧠 Real-world: Network timeouts, server fallback, first-response-wins logic.
// any
// Use Case: You want at least one success, and you don’t care which one — just ignore failures unless all fail.
// 🧠 Real-world: Load balancing across CDNs, backup API endpoints, failover strategies.


const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    const bool = true;
    if (bool) {
      const err = new Error("Promise P1 failed");
      rej(err);
    }

    res({ message: "P1 data retrived successfully" });
  }, 4000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    const bool = false;
    if (bool) {
      const err = new Error("Promise P2 failed");
      rej(err);
    }

    res({ message: "P2 data retrived successfully" });
  }, 1000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    const bool = false;
    if (bool) {
      const err = new Error("Promise P3 failed");
      rej(err);
    }
    res({ message: "P3 data retrived successfully" });
  }, 1000);
});

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("ans>>", res);
  })
  .catch((err) => {
    console.log("err>>", err);
  });
