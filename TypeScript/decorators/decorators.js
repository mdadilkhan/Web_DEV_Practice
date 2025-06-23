"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const methodDecorator_1 = require("./methodDecorator");
const classDecorator_1 = require("./classDecorator");
const propertyDecorators_1 = require("./propertyDecorators");
let DbService = class DbService {
    myName;
    hello() {
        console.log("fucntion hello");
    }
    saveData(data) {
        console.log("saving data in database...", data);
    }
};
__decorate([
    (0, propertyDecorators_1.DatabaseName)(),
    __metadata("design:type", String)
], DbService.prototype, "myName", void 0);
__decorate([
    (0, methodDecorator_1.Log)(methodDecorator_1.LoggingLevel.DEBUG),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DbService.prototype, "hello", null);
__decorate([
    (0, methodDecorator_1.Log)(methodDecorator_1.LoggingLevel.DEBUG),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DbService.prototype, "saveData", null);
DbService = __decorate([
    (0, classDecorator_1.SealClass)()
], DbService);
const db = new DbService();
db.saveData("hello Adil");
db.hello();
db.myName = "BlogApp";
