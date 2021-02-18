/* Requires:
    graphics-library.js
*/

/* Function List:
    newBlob(initX, initY, initR, initColor, xspeed, yspeed)
    newRandomBlob()
    createRandomBlobArray(num)
    drawBlob(aBlob)
    moveBlobRandom(aBlob, xSpeed, ySpeed)
    moveBlob(aBlob, xSpeed, ySpeed)
    createBlobArray(num, initX, initY, initR, initColor)
*/

// Creates a Blob with x, y, r and color values
function newBlob(initX, initY, initR, initColor, maxSpeed, energey, hunger) {
    return {
        x: initX,
        y: initY,
        r: initR,
        color: initColor,
        MS: maxSpeed,
        E: energey,
        H: hunger
    }
}

// Creates a Blob with random properties
function newRandomBlob() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: randomInt(5, 35),
        color: randomRGB()
    }
}

// Create and return an array with 'num' Blob objects
function createRandomBlobArray(num) {
    let temp = [];
    for (let n = 1; n <= num; n++) {
        temp.push(newRandomBlob())
    }
    return temp;
}

// Create and return an array with 'num' Blob objects with set properties
function createBlobArray(num) {
    let temp = [];
    for (let n = 1; n <= num; n++) {
        temp.push(newBlob(randomInt(15, cnv.width - 15), 50, 10, "blue", 1, 5000, 0));
    }
    return temp;
}

// Draws Blobs from an array
function drawBlob(aBlob) {
    fill(aBlob.color);
    circle(aBlob.x, aBlob.y, aBlob.r, "fill");
}

// Moves Blobs in random directions
function moveBlobRandom(aBlob, xSpeed1, xSpeed2, ySpeed1, ySpeed2) {
    aBlob.x += randomInt(xSpeed1, xSpeed2);
    aBlob.y += randomInt(ySpeed1, ySpeed2);
}

function moveBlob(aBlob) {
    let foodDisX = calculateDistance("x", aBlob);
    let foodDisY = calculateDistance("y", aBlob);
    aBlob.x += calculateMovement(foodDisX, foodDisY, aBlob, "x");
    aBlob.y += calculateMovement(foodDisX, foodDisY, aBlob, "y");
}