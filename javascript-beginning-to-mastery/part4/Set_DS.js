//it will give you all the method of set data structure
console.log(Object.getOwnPropertyNames(Set.prototype))
// >>>>>>>>>>>>>>>>>>>>>>>Constructor<<<<<<<<<<<<<<<<<<<<<<<<<
// ways to use constructor 
// 1.empty set
const hs1=new Set()

// 2. set with array
const hs2=new Set([1,2,3,4,5,3,4])
console.log(hs2)

// 3. set with string 
const hs3=new Set("hello")
console.log(hs3)

// 4. set with another set

const hs4=new Set([1,2,3,4,5])
const hs5=new Set(hs4)
console.log("hs4>>",hs4)
console.log("hs5>>",hs5)

// >>>>>>>>>>>>>>>>>>>>>>> Conversion <<<<<<<<<<<<<<<<<<<<<<<<<<<<
//how to convert set to array or array to set, and same  with string  with object with map

// 1. Set ⇨ Array
const set1=new Set([1,2,3,4,5])

// Method 1: Using spread operator
const arr1=[...set1]
console.log("arr1",arr1)

// Method 2: Using Array.from()
const arr2=Array.from(set1)
console.log("arr2>>",arr2)


// 2. Array ⇨ Set
const arr3=[21,123,12312,23423,1312]
const set2=new Set(arr3)
console.log("set2>",set2)



// Set ⇨ String
const set3=new Set("adil")
const str=[...set3].join("")
console.log("str>>",str)
// String ⇨ Set
const str1 = "hello";
const set4 = new Set(str);
console.log("set4>>",set4);



// solve question
// given a string "abc" write a function which return string that doesnot have the character which is given in a string
// constraints ->letter can be lowercase and uppercase 
const string = "defxz"
function find(str){
   const lowercase=str.toLowerCase();
   const letter="abcdefghijklmnopqrstuvwxyz"
   const set=new Set(letter)
   for(let char of lowercase){
    if(set.has(char)){
        set.delete(char)
    }
   }
   return [...set].join("")
}
console.log(find(string))


// >>>>>>>>>>>>>>>>>>>>>Methods of Set<<<<<<<<<<<<<<<<<<<<<<<<<<<
//all method of set 
// [
//     'constructor',    'has',
//     'add',            'delete',
//     'clear',          'entries',
//     'forEach',        'size',
//     'values',         'keys',
//     'union',          'intersection',
//     'difference',     'symmetricDifference',
//     'isSubsetOf',     'isSupersetOf',
//     'isDisjointFrom'
// ]


const newSet=new Set()
const arr=[111,2312,300,503121,"Fruits","Banana","Grapes",true,false]
arr.forEach((item)=>{
    newSet.add(item)
})
console.log(newSet)

// add(val) this method is used to add value in set
// has(val) it will check if value is presnt in set or not if yes return true if no return false
console.log(newSet.has(111)) //return true
console.log(newSet.has(42342)) //return false
console.log(newSet.has(false)) //return true
console.log(newSet.has(true)) //return true


// delete(val) this method return true if delted return false it not delted
console.log(">>",newSet.delete(3123123)) 
console.log(newSet)


//clear() it will clear whole value of Set
// newSet.clear()


// entries()
// Unlike a Map (which has key-value pairs), a Set only stores values. But entries() still exists to maintain consistency with Map.
//It returns an iterator of [value, value] pairs.

for (let entry of newSet.entries()) {
    console.log("entry",entry); // [value, value]
    console.log("entry",entry[0]); //you can access like this

  }


// forEach mehtod 
newSet.forEach((item)=>{
    console.log(item)
})

// size it not a method its a property 

console.log(newSet.size)



// values() / keys()
for (let val of newSet.keys()) {
    console.log("keys",val); // 'a', 'b'
  }
for (let val of newSet.values()) {
    console.log("values",val); // 'a', 'b'
  }



  //Custom Set Operations (you must implement these manually)
const setA=new Set([1,2,3])
const setB=new Set([3,4,5])

//union -> Returns a new set with elements from both sets.
const union=setA.union(setB)
console.log("union>>",union)

//intersection -> Returns a new set with only common elements.
const intersection=setA.intersection(setB)
console.log("intersection>>",intersection)

//difference -> Elements in setA but not in setB.
const difference=setA.difference(setB)
console.log("difference>>",difference)


//symmetricDifference -> Elements in either set, but not in both.
const symmetricDifference=setA.symmetricDifference(setB)
console.log("symmetricDifference>>",symmetricDifference)

// isSubsetOf->Checks if setA is a subset of setB.
const isSubsetOf=setA.isSubsetOf(setB)
console.log("isSubsetOf>>",isSubsetOf)


// isSupersetOf -> Checks if setA contains all elements of setB.
const isSupersetOf=setA.isSupersetOf(setB)
console.log("isSupersetOf>>",isSupersetOf)


// isDisjointFrom -> Checks if sets have no elements in common.
const isDisjointFrom=setA.isDisjointFrom(setB)
console.log("isDisjointFrom>>",isDisjointFrom)

// isDisjointFrom -> Checks if sets have no elements in common.