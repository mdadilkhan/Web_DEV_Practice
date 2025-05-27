// >>>>>>>> How to check method of object <<<<<<<<<<<


// console.log(String.prototype)//It gives the prototype object from which your array inherits — which is String.prototype
// console.log(Object.getPrototypeOf(str));//It gives the prototype object from which your array inherits — which is String.prototype
// console.log(Object.getOwnPropertyNames(String));
console.log(Object.getOwnPropertyNames(String.prototype));


// JavaScript String Methods Explained with Examples

// 1 length
const str="mdadilkhan"
console.log(str.length);
const string=new String("mdadilkhan")
console.log(string.length);






const str1 = "Hello World";



// 2. at() Accepts positive or negative index,Introduced in: ES2022
console.log(str1.at(1)); // 'e'
// 3. charAt() accepts only positive index, Intriduced in ES1 
console.log(str1.charAt(0)); // 'H'



// 4. concat() method joins one or more strings and returns a new combined string.
       //we can use + operator to join multiple string
console.log("Hello".concat(" ", "World")); // 'Hello World'
const result="adil " + "khan " + "Asif"
console.log(result);

const arr=["Hii","How are you","I am good"]
let sentence=""
for(let word of arr){
     sentence=sentence +" " + word
}
console.log(sentence);




// 5. startsWith(searchString, position)
// Checks if the string starts with searchString.
// Optional position sets the index to start checking from (default is 0)
// return true false
console.log(str1.startsWith("Hello")); // true

// 6. endsWith()
//return true false
console.log(str1.endsWith("World")); // true



// 7. includes(searchString, startPosition)
// return true or false and it is case sensitive
// default start poistion is 0 
console.log(str1.includes("World")); // true



// 8. indexOf(searchValue, startPosition)
//  return index of found else return -1 if not found
// Find position of first occurrence
console.log(str1.indexOf("o")); // 4
console.log(str.indexOf("World"));  // 6
console.log(str.indexOf("x"));      // -1



// 9. lastIndexOf(searchValue, endPosition)
//  return index of found else return -1 if not found
// Find position of last occurrence
console.log(str1.lastIndexOf("l")); // 9




// 10. str1.localeCompare(str2, locales, options)
// it takes three argument 
// 1st string-> the string to compare to str1
// 2nd locale-> (optional) – A string or array of locale identifiers(language) (like "en", "fr", "de", etc.).
// 3rd options-> (optional) – Configuration object for sensitivity, case, numeric sorting, etc.

// it return -1 if str1 comes before str2 orr str1<str2
// it return 0 if st1 equals to str2 str1==str2
// it return 1 if str1`comes after str2 str1>str2
console.log("a".localeCompare("b")); // -1
console.log("b".localeCompare("a")); // 1
console.log("a".localeCompare("a")); // 0



// exmaple of case sensitive
// localeCompare() compares "a" and "A" using the default locale, and by default:
// In Unicode and ASCII:
// "A" → ASCII 65
// "a" → ASCII 97
// So "a" is considered greater than "A" (97 > 65)
console.log("a".localeCompare("A")); // 1 or -1 depending on locale
console.log("a".localeCompare("A", "en", { sensitivity: "base" })); // 0 (ignores case)






// 11. padEnd(targetLength, padString)
// target lenth meana total lenght of newly formed string after padding at the end
console.log("5".padEnd(4, '0')); // '5000'

// 12. padStart(targetLength, padString)
// target lenth meana total lenght of newly formed string after padding at the start
console.log("5".padStart(4, '0')); // '0005'



// 13. repeat(count)
// Repeats the original string count times and returns a new string.
console.log("ha".repeat(3)); // 'hahaha'


// 14. replace(searchValue, newValue)
console.log("hello world".replace("world", "JS")); // 'hello JS'

// 15. replaceAll(searchValue, newValue)
console.log("a,b,c".replaceAll(",", ";")); // 'a;b;c'



// 16. slice(startIndex, endIndex)
// startIndex(inclusive),
//  endIndex(exclusive)(optional) if u dont give it extract at the end of the string
// supports negative index
console.log(str1.slice(0, 5)); // 'Hello'
let creditCard = "1234 5678 9876 5432";
let masked = creditCard.slice(-4).padStart(creditCard.length, "*");
console.log(masked); // ****************5432



// 17. split(separator, limit)
// separator	Specifies the character, string, or regular expression to split the string
// limit	(Optional) Limits the number of substrings in the resulting array
console.log("a,b,c".split(",")); // ['a', 'b', 'c']


// 18. substring()
// doesnot support negative index
console.log(str1.substring(0, 5)); // 'Hello'





// 19. toString()
// Converts a value to its string representation.
console.log(str1.toString()); // 'Hello World'
const num = 123;
console.log(num.toString()); "123"


// 20. trim()
console.log("  hello  ".trim()); // 'hello'

// 21. trimStart()
console.log("  hello".trimStart()); // 'hello'
// 22. trimEnd()
console.log("hello  ".trimEnd()); // 'hello'



// 23. toLocaleLowerCase()
console.log("HELLO".toLocaleLowerCase()); // 'hello'

// 24. toLocaleUpperCase()
console.log("hello".toLocaleUpperCase()); // 'HELLO'

// 25. toLowerCase()
console.log("HELLO".toLowerCase()); // 'hello'

// 26. toUpperCase()
console.log("hello".toUpperCase()); // 'HELLO'

// 27. valueOf()
// returns the raw primitive value.
// rarely used bec it used by js internally
console.log(str1.valueOf()); // 'Hello World'



// 28. match()
// console.log("abc123".match(/\d+/)); // ["123"]

// 29. matchAll()
// const regex = /t(e)(st(\d?))/g;
// const str2 = 'test1test2';
// console.log([...str2.matchAll(regex)]);





// ##Conversion Between String and Number

// 1st way-> using Number
console.log(Number("123"));      // 123
// using parseInt()
console.log(parseInt("123abc")); // 123
console.log(parseFloat("12.5")); // 12.5
//using + operator
console.log(+"456"); 


// ## Conversion of  Number ➡️ String

// using String() class
console.log(String(123));         // "123"

// using toString() method of string
console.log((123).toString());    // "123"

// using + operator with empty string at the end of a NUmber
console.log(123 + "");            // "123"
