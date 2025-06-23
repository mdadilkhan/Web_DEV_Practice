"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseName = DatabaseName;
function DatabaseName() {
    return (classPrototype, propertyKey) => {
        console.log("property decorator", Object.getOwnPropertyNames(classPrototype));
        console.log("property decorator", propertyKey);
        console.log("this>>", this);
    };
}
