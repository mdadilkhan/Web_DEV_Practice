
//shalow copy and deep copy of object and array


const arr = [1, 2, 3, [4, 5, 6], 7, 8, { a: 1, b: 2 }];

const shallowCopy1 = arr.slice();
const shallowCopy2 = [...arr];

shallowCopy1[3][0] = 99;   // Modifying nested array
shallowCopy2[6].b = 999;   // Modifying object property

console.log(arr);           
Output: [1, 2, 3, [99, 5, 6], 7, 8, { a: 1, b: 999 }] //❌ Original Modified!

console.log(shallowCopy1);  
// console.log(shallowCopy2);  



const deepcopy=JSON.parse(JSON.stringify(arr))
deepcopy[3][0]=1000
deepcopy[arr.length-1].a=9999
console.log(arr)
console.log(deepcopy)
