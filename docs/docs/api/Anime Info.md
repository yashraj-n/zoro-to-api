# Anime Info

Get information about an anime (Uses Anilist API, [here](/note)

### Usage

`Zoro.getAnimeInfoByName('<Anime Name>')`

### Example

```js
let zoroResults = await Zoro.zoroSearch("Horimiya"); // Searching for Horimiya
let firstResult = zoroResults[0]; // Getting the first result
let info = await Zoro.getAnimeInfoByName(firstResult.eng_title); // Getting the info of the first result

```


### Returns

An [Anime Entry Object](https://github.com/Butterstroke/AniList-Node/blob/1faa3a1e64a28caea0c32b8b1bd45b8b33118145/lib/types/index.d.ts#L727)


```ts
{
    episodes: number,
    season: MediaSeason,
    seasonYear: number,
    duration: number,
    source: MediaSource,
}

```

!!! bug "Note"
    Sometimes Anilist API might give invalid data, so it's recommended to check if the data is valid before using it.
