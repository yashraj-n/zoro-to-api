// const Zoro = require('zoro-to-api');

const {
  zoroSearch,
  getAnimeInfoByName,
  getEpList,
  getEpisodeServers,
  getStreamsById,
} = require("../build");
(async () => {
  let searches = await zoroSearch("Horimiya");
  let Horimiya = searches[0];
  let info = await getAnimeInfoByName(Horimiya.eng_title);
  let episodes = await getEpList(Horimiya.id);
  let episodeOne = episodes.episodes[0];
  let episodeOneServers = await getEpisodeServers(episodeOne.epId);
  let iframeLink = await getStreamsById(episodeOneServers.serversSub[0].serverId);
  console.log(iframeLink.link);
})();
