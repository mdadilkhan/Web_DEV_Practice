// diff between object and map that objec can have key only of two type string and symbol 
// but in map key can be anything
// Map Maintains insertion order object doesnot gurantee
// Map have size property and object doenot have directly it need Object.keys(obj).length
// Map Directly iterable with for...of, entries() and object jave  entries() method Need Object.entries() or for...in




//it will give you all the method of set data structure
console.log(Object.getOwnPropertyNames(Map.prototype))



// >>>>>>>>>>>>>>>>>>>>>>> Constructor <<<<<<<<<<<<<<<<<<<<<<<<<
// ways to use constructor 
// 1. empty map without any argument to the constructor 
const map1=new Map()
console.log("map1",map1)

// 2. map with some Arrays value
const map2=new Map([['name',"Md adil Khan"],['age',24]])
console.log(map2)
// 3. Map with object literals
const obj={
    "Name":"Asif KHan",
    "age":24,
    "college":"PUSA"
}
const map3=new Map(Object.entries(obj))
console.log(map3)


// >>>>>>>>>>>>>>>>>>>>>>> Conversion <<<<<<<<<<<<<<<<<<<<<<<<<

// 1. Object to ==>> Map and Map ==> Object

const obj1={
    "Name":"Asif KHan",
    "age":24,
    "college":"PUSA"
}
const map4=new Map(Object.entries(obj1))
console.log(map4)
// Map ==> Object
const objFromMap=Object.fromEntries(map4)
console.log(objFromMap)


//  2. Array ==> Map and Map ==> Array
const arr = [['a', 1], ['b', 2]];
const mapFromArr = new Map(arr);
console.log(mapFromArr)
// Map ==> Array
const arr1=[...mapFromArr]
console.log(arr1)






// >>>>>>>>>>>>>>>>>>>>>>>> All Map Method <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const hm=new Map()


// set(k,v) inset key value pair
hm.set("Name","Md Adil Khan")
hm.set("age",24)
hm.set("college","JMI")
console.log("hashmap>>",hm)



// size return size of the map
console.log("size>>",hm.size)



// get(k) get valye if associated key
console.log(hm.get("Name"))
console.log(hm.get("age"))



// has(k) check key exist or not return true false
console.log(hm.has("Name"))
console.log(hm.has("name"))


//delete(k)  it will delte that key value pair from the map it return true if deleted else false
const del=hm.delete("college")
console.log("deleted item",del)


//clear() clear whole map
// hm.clear()
console.log(hm)



//entries() Returns an iterator of [key, value] pairs
console.log(hm.entries())
for(let [key,val] of hm.entries()){
    console.log(`${key} => ${val}`)
}


//keys() Returns an iterator of keys
console.log(hm.keys())
for(let key of hm.keys()){
    console.log(key)
}


//vslues() Returns an iterator of values
console.log(hm.values())
for(let key of hm.values()){
    console.log(key)
}



//for each  loop Iterates over each entry


hm.forEach((val,key)=>{
    console.log("for each=>",key," : ",val)
})