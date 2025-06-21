// limitation of js 
// in js we can not give surety that the functon will recieve only string course can be number 
// but in ts we can give 100% surety that the coruse can have only string
// if we pass string the funciton will runn perfectly but we pass nymber then
// upperCase() fucntion which is presnt in string will give error
var course = "TypeScript Bootcamp";
function printCourseNames(name) {
    console.log("the course name is ".concat(name.toUpperCase()));
}
printCourseNames(course);
// printCourseNames(100) // give error TypeError: name.toUpperCase is not a function
// printCourseNames([1,2,3,4]) // give error TypeError: name.toUpperCase is not a function
// how to fix above error 
// by simply adding type in fucntion arguments that it is string
printCourseNames(course);
printCourseNames("aws"); // give error TypeError: name.toUpperCase is not a function
printCourseNames("Devops");
// >>>>>>>>> Notes <<<<<<<<<
// Ts is a superset of js it extends the capabilites of js language with powerfull type system 
// type system allows us to catch error at compile time or development time
// how can we run our ts program in node environemnt and browser bec node and browser only know js?
