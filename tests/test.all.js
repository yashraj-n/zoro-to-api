//* tests
var assert = require("chai").assert;
var mocha = require("mocha");
var describe = mocha.describe;

var getEpList = require("../build/src/lib/getEpList").getEpList;
var getInfo = require("../build/src/lib/getInfo").getAnimeInfoByName;
var getServers = require("../build/src/lib/getServers").default;
var getStreams = require("../build/src/lib/getStreams").default;
var zoroSearch = require("../build/src/lib/search").zoroSearch;

let animeId = "";
let episodeOneId = "";
let episodeOneServersId = "";

describe("Searching With Zoro", () => {
  it("should return an array of results", async () => {
    let results = await zoroSearch("horimiya");
    assert.isArray(results);
    animeId = results[0].id;
  });
});
describe("Searching With Anilist API (Searching Horimiya)", () => {
  it("should return an array of results", async () => {
    let results = await getInfo("horimiya");
    assert.strictEqual(results.title.english, "Horimiya");
  });
});

describe(`Getting Episode Lists for Horimiya ${animeId}`, () => {
  it("should return an array of episodes", async () => {
    let results = await getEpList(animeId);
    assert.isArray(results.episodes);
    episodeOneId = results.episodes[0].epId;
  });
});

describe(`Getting Servers for Episode 1 of Horimiya ${animeId}`, () => {
  it("should return an array of servers", async () => {
    let servers = await getServers(episodeOneId);
    assert.isArray(servers.serversDub);
    assert.isArray(servers.serversSub);
    episodeOneServersId = servers.serversSub[0].serverId;
  });
});

describe(`Getting Streams for Episode 1 of Horimiya ${animeId}`, () => {
  it("should return an array of streams", async () => {
    let streams = await getStreams(episodeOneServersId);
    assert.strictEqual(streams.type, "iframe");
  });
});
