"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const __1 = require("..");
function getRequestJson(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield axios_1.default.get(`${__1.BASE_URL}${path}`, {
            headers: {
                "Accept-Encoding": "*r",
                "Referer": "https://zoro.to/",
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            },
        });
        return res.data;
    });
}
exports.default = getRequestJson;
