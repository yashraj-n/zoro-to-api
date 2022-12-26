# Episode Servers

Gives list of servers for an episode (Sub and Dub)

### Usage

` Zoro.getEpisodeServers('<episode ID>')`

### Example

```ts
let zoroResults = await Zoro.zoroSearch("Horimiya"); // Searching for Horimiya
let firstResult = zoroResults[0]; // Getting the first result
let { episodes } = await Zoro.getEpList(firstResult.id); // Episodes of the first result
let firstEp = episodes[0]; // Getting the first episode
let servers = await Zoro.getEpisodeServers(firstEp.epId); // Servers of the first episode
```

### Returns

An Object with Sub and Dub servers

```ts

{
    serversSub: {
        type: string;
        server: string;
        serverId: string;
        serverId2: string;
        devNote?: string;
    }
    serversDub: {
        ...
    }
}

```

!!! Danger "READ THIS FIRST"
    Make sure you read devNote if it's available, it might contain important information about the server.
    The Rapid Stream server only works when the referrer of iframe is `zoro.to`.
    
     **It's Recommended to use StreamSB servers**
