# Episode Stream

Gives iframe embed URL for an episode

### Usage

`Zoro.getStreamsById('<Episode Server ID>')`

### Example

```ts
let zoroResults = await Zoro.zoroSearch("Horimiya"); // Searching for Horimiya
let firstResult = zoroResults[0]; // Getting the first result
let { episodes } = await Zoro.getEpList(firstResult.id); // Episodes of the first result
let firstEp = episodes[0]; // Getting the first episode
let servers = await Zoro.getEpisodeServers(firstEp.epId); // Servers of the first episode
let iframedata = await Zoro.getStreamsById(servers.serversSub[0].serverId); // Getting the iframe embed URL
console.log(iframedata.link); // Logging the iframe embed URL
```

### Returns

An Object with iframe embed URL

```ts
{
  type: string;
  link: string;
  server: number;
  sources: [];
  tracks: [];
  htmlGuide: string;
}
```
