# Episode List

Gets list of episodes

### Usage

`Zoro.getEpList('<Zoro.to Anime id>')`

### Example

```ts
let zoroResults = await Zoro.zoroSearch("Horimiya"); // Searching for Horimiya
let firstResult = zoroResults[0]; // Getting the first result
let episodes = await Zoro.getEpList(firstResult.id); // Episodes of the first result
```

### Returns

A Object with episodes and total episodes

```ts
{
    totalEps: number;
    episodes: [
        
        {
            name: string;
            epNum: string;
            epId: string;
        }
        ...
    ]

}
```
