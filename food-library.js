/* Requires:
    graphics-library.js
*/

/* Function List:
    newFood(initX, initY, initR, initColor)
    newRandomFood()
    createRandomFoodArray(num)
    drawFood(aFood)
    createFoodArray(num, initX, initY, initR, initColor)
*/

// Creates a Food with x, y, r and color values
function newFood(initX, initY, initR, initColor) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor
    }
}

// Creates a Food with random properties
function newRandomFood() {
    return {
        x: randomInt(10, cnv.width - 10),
        y: randomInt(10, cnv.height - 10),
        r: randomInt(5, 35),
        color: randomRGB()
    }
}

// Create and return an array with 'num' Food objects
function createRandomFoodArray(num) {
    let temp = [];
    for (let n = 1; n <= num; n++) {
        temp.push(newRandomFood())
    }
    return temp;
}

// Create and return an array with 'num' Food objects with set properties
function createFoodArray(num) {
    let temp = [];
    for (let n = 1; n <= num; n++) {
        temp.push(newFood(randomInt(10, cnv.width - 10), randomInt(150,cnv.height - 10), 2.5, "green"));
    }
    return temp;
}

// Draws Foods from an array
function drawFood(aFood) {
    fill(aFood.color);
    circle(aFood.x, aFood.y, aFood.r, "fill");
}
