"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getEpList = void 0;
const getRequestJson_1 = __importDefault(require("../utils/getRequestJson"));
const Cheerio = __importStar(require("cheerio"));
/** Gets list of episodes
 * @param id The id of the anime (zoro.to id)
 * @returns An object containing the total number of episodes and an array of episodes
 * @example getEpList("horimiya-15733") // Returns list of episodes for Horimiya
 * @example getEpList("15733") // Returns list of episodes for Horimiya
 */
function getEpList(id) {
    return __awaiter(this, void 0, void 0, function* () {
        id = id.split("-").pop() || id;
        let data = yield (0, getRequestJson_1.default)(`/v2/episode/list/${id}`);
        let totalEps = data.totalItems || 0;
        let $ = Cheerio.load(data.html);
        let eps = [];
        $("div.ss-list > a").each((i, el) => {
            let name = el.attribs["title"];
            let epNum = el.attribs["data-number"];
            let epId = el.attribs["data-id"];
            eps.push({ name, epNum, epId });
        });
        return { totalEps, episodes: eps };
    });
}
exports.getEpList = getEpList;
