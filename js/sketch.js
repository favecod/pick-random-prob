let colors = [
    { "name": "red", "score": 3 },
    { "name": "blue", "score": 2 },
    { "name": "yellow", "score": 1 },
    { "name": "green", "score": 4 },
    { "name": "black", "score": 6 },
]
function setup() {
    let sum = 0
    // Normalize score
    for(let i = 0;i < colors.length;i++){
        sum += colors[i].score
    }
    // Set prob
    for(let i = 0;i < colors.length;i++){
        colors[i].prob = colors[i].score / sum
    }
    console.log(colors)
    let pick = pickOne(colors)
    console.log(pick)

}

function pickOne(list) {
    let index = 0
    let r = random(1)
    while(r > 0){
        r = r - list[index].prob
        index++
    }
    index--
    return list[index]
}