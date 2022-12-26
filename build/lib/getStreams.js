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
const getRequestJson_1 = __importDefault(require("../utils/getRequestJson"));
/**Takes Episode Server  Id and returns iframe data
 * @param id The id of the episode server
 * @returns An object containing the iframe data
 * @example getStreamsById("755857")
 * @note Recommended to use StreamSB servers as other servers require zoro.to as referer and host
 */
function getStreamsById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        id = parseInt(id);
        let data = yield (0, getRequestJson_1.default)(`/v2/episode/sources?id=${id}`);
        return data;
    });
}
exports.default = getStreamsById;
