"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoroSearch = exports.getStreamsById = exports.getEpisodeServers = exports.getAnimeInfoByName = exports.getEpList = exports.BASE_URL = void 0;
const getEpList_1 = require("./lib/getEpList");
Object.defineProperty(exports, "getEpList", { enumerable: true, get: function () { return getEpList_1.getEpList; } });
const getInfo_1 = require("./lib/getInfo");
Object.defineProperty(exports, "getAnimeInfoByName", { enumerable: true, get: function () { return getInfo_1.getAnimeInfoByName; } });
const getServers_1 = __importDefault(require("./lib/getServers"));
exports.getEpisodeServers = getServers_1.default;
const getStreams_1 = __importDefault(require("./lib/getStreams"));
exports.getStreamsById = getStreams_1.default;
const search_1 = require("./lib/search");
Object.defineProperty(exports, "zoroSearch", { enumerable: true, get: function () { return search_1.zoroSearch; } });
exports.BASE_URL = "https://zoro.to/ajax";
