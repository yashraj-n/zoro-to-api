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
const getRequestJson_1 = __importDefault(require("../utils/getRequestJson"));
const Cheerio = __importStar(require("cheerio"));
/** Gets list of servers for an episode
@param id The id of the episode
@returns An object with list of Sub and Dub servers
@example getEpisodeServers("51286") // Returns list of servers for Horimiya Episode 1

*/
function getEpisodeServers(id) {
    return __awaiter(this, void 0, void 0, function* () {
        id = parseInt(id);
        let data = yield (0, getRequestJson_1.default)(`/v2/episode/servers?episodeId=${id}`);
        let $ = Cheerio.load(data.html);
        let serversSub = [];
        let serversDub = [];
        $("body > div.ps_-block.ps_-block-sub.servers-sub > div.ps__-list > div.item ").each((i, el) => {
            let type = el.attribs["data-type"];
            let server = $(el).text().trim();
            let serverId = el.attribs["data-id"];
            let serverId2 = el.attribs["data-server-id"];
            let devNote = server === "StreamSB"
                ? "Reccomended Server"
                : "Might not work, rapid-cloud requries to have host as zoro.to";
            serversSub.push({ type, server, serverId, serverId2, devNote });
        });
        $("body > div.ps_-block.ps_-block-sub.servers-dub > div.ps__-list > div.item ").each((i, el) => {
            let type = el.attribs["data-type"];
            let server = $(el).text().trim();
            let serverId = el.attribs["data-id"];
            let serverId2 = el.attribs["data-server-id"];
            let devNote = server === "StreamSB"
                ? "Reccomended Server"
                : "Might not work, might require to have host and referer as zoro.to";
            serversDub.push({ type, server, serverId, serverId2, devNote });
        });
        return { serversSub, serversDub };
    });
}
exports.default = getEpisodeServers;
