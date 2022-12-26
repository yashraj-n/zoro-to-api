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
exports.zoroSearch = void 0;
//@ts-nocheck
const cheerio = __importStar(require("cheerio"));
const getRequestJson_1 = __importDefault(require("../utils/getRequestJson"));
/** Searches anime on zoro.to
 * @param query The query to search for
 * @returns An array of search items
 */
const zoroSearch = (query) => __awaiter(void 0, void 0, void 0, function* () {
    query = encodeURIComponent(query);
    const data = yield (yield (0, getRequestJson_1.default)(`/search/suggest?keyword=${query}`)).html;
    let $ = cheerio.load(data);
    let results = [];
    // Loop over a tags
    $("a").each((i, el) => {
        var _a;
        let id = (_a = $(el).attr("href")) === null || _a === void 0 ? void 0 : _a.replace("?ref=search", "");
        let poster = "";
        let eng_title = "";
        let jp_name = "";
        let release_date = "";
        let length = "";
        if (id === "search?keyword=" + query)
            return;
        id = id === null || id === void 0 ? void 0 : id.slice(1);
        poster = $(el).find("div.film-poster > img").attr("data-src") || "";
        eng_title = $(el).find("div.srp-detail > h3").text() || "";
        jp_name = $(el).find("div.srp-detail > div.alias-name").text() || "";
        release_date = $(el).find("div.film-infor > span").first().text() || "";
        length = $(el).find("div.film-infor > span").last().text() || "";
        results.push({ id, poster, eng_title, jp_name, release_date, length });
    });
    return results;
});
exports.zoroSearch = zoroSearch;
