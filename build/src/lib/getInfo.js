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
exports.getAnimeInfoByName = void 0;
const anilist_node_1 = __importDefault(require("anilist-node"));
const query = new anilist_node_1.default();
/**Gets anime by name
 * @param name The name of the anime
 * @summary Uses anilist.co to get anime info
 * @example getAnimeInfoByName("Bleach") // Returns info about Bleach
 * @returns An object containing anime info
 */
function getAnimeInfoByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = (yield query.searchEntry.anime(name)).media[0].id;
        return yield query.media.anime(id);
    });
}
exports.getAnimeInfoByName = getAnimeInfoByName;
