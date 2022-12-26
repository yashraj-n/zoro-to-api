# Zoro.to API

A simple wrapper for the Zoro.to API

[Documentation](https://yashraj-n.github.io/zoro-to-api/)
## Installation

```bash
# npm
npm install zoro-to-api

# yarn
yarn add zoro-to-api
```

## Basic Usage


#### Javascript
```js
const Zoro = require('zoro-to-api');

// Change Horimiya to whatever you want to search for
let zoroResults = await Zoro.zoroSearch("Horimiya")  

// Get the first result
let horimiya = zoroResults[0] 

// Get the info for the first result
let info = Zoro.getAnimeInfoByName(horimiya.eng_title); 

// Get the episodes for the first result
let eps = Zoro.getEpList(horimiya.eng_title); 

// Get the first episode
let firstEpisode = eps.episodes[0];

// Get the servers for the first episode
let servers = Zoro.getEpisodeServers(firstEpisode.epId); 

// Choose out of 4 servers
let subbed = servers.serversSub[0] 

// Get the stream server
let streamServer = Zoro.getStreamsById(subbed.serverId); 

// Your iframe link
console.log(streamServer.link) 

//* ⚠ Make sure you read the docs for the functions you use
```


#### Typescript
```ts
import Zoro from 'zoro-to-api';

...
```


### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Make sure to update tests as appropriate.

### License
[MIT](https://choosealicense.com/licenses/mit/)
