"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const func_1 = __importDefault(require("./func"));
console.log('Hello World in TypeScript');
console.log(2 + 2 * 100);
const nome = 'F';
console.log(nome);
console.log((0, func_1.default)(20, 30));
console.log((0, func_1.default)(10, 30));
console.log((0, func_1.default)(5, 30));
console.log((0, func_1.default)(0, 30));
console.log((0, func_1.default)(200, 30));
console.log((0, func_1.default)(20, 30));
