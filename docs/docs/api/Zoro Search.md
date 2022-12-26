# Zoro Search

Search for anime on Zoro.to

### Usage

`Zoro.zoroSearch('<Anime Name>')`

### Example

```js
let zoroResults = await Zoro.zoroSearch("Horimiya");
```

### Returns

List of Anime Search Results

```ts

[
    {
        id: string;
        poster: string;
        eng_title: string;
        jp_name: string;
        release_date: string;
        length: string;
    },
    ...
]

```

!!! warning "Note"
    This function will return an extra object with id as `/search?ref...`
