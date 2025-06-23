"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingLevel = void 0;
exports.Log = Log;
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel[LoggingLevel["ERROR"] = 0] = "ERROR";
    LoggingLevel[LoggingLevel["INFO"] = 1] = "INFO";
    LoggingLevel[LoggingLevel["WARN"] = 2] = "WARN";
    LoggingLevel[LoggingLevel["DEBUG"] = 3] = "DEBUG";
    LoggingLevel[LoggingLevel["TRACE"] = 4] = "TRACE";
})(LoggingLevel || (exports.LoggingLevel = LoggingLevel = {}));
const appMaxLoggingLevel = LoggingLevel.DEBUG;
function Log(level) {
    console.log("Applying @Log Decorators...");
    return (target, propertyKey, descriptor) => {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (level <= appMaxLoggingLevel) {
                console.log(`###Log:[${level}] ${propertyKey} called with`, args);
            }
            return originalMethod.apply(this, args);
        };
    };
}
