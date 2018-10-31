# pick-random-prob
Pick random element with probability

This is the array and I want to pick one of them.
```js
let colors = [
    { "name": "red", "score": 3 },
    { "name": "blue", "score": 2 },
    { "name": "yellow", "score": 1 },
    { "name": "green", "score": 4 },
    { "name": "black", "score": 6 },
]
```
Color's score means number of color and I want to use ```score``` for pick one of them with probability.

```color.prob = color.score / scores```

And when I want to pick one I can use ```color.prob```

```js
r = random(1)
r = r - color.prob
```

If ```r``` less than ```0``` I can pick the color otherwise try the next color.

