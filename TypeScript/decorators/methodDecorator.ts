export enum LoggingLevel {
  ERROR,
  INFO,
  WARN,
  DEBUG,
  TRACE,
}
// in practical you can get this value from environment varibale
const appMaxLoggingLevel = LoggingLevel.DEBUG;

// this fucntion should return a decorator factory to apply decorator else will give compilation error
// decorator factory have specific signature it will return type is MethodDecorator
export function Log(level: LoggingLevel): MethodDecorator {
  console.log("Applying @Log Decorators...");

  // decorator factory
  // we have to add three parameter to this returning function
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // console.log("target",Object.getOwnPropertyNames(target));
    // console.log("propertyKey",propertyKey);
    // console.log("descriptor",descriptor);

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (level <= appMaxLoggingLevel) {
        console.log(`###Log:[${level}] ${propertyKey} called with`, args);
      }

      // this refers to DbServeice class
      return originalMethod.apply(this, args);
    };
  };
}
