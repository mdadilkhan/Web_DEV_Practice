"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SealClass = SealClass;
function SealClass() {
    return (constructor) => {
        console.log("class Constructor", constructor);
        console.log("class Constructor", Object.getOwnPropertyNames(constructor.prototype));
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    };
}
