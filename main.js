let Blobs = createBlobArray(1);
let Food = createFoodArray(200);

requestAnimationFrame(draw);
function draw() {
    background("lightgreen")
    for (let o = 0; o < Food.length; o++) {
        drawFood(Food[o]);
    }
    for (let i = 0; i < Blobs.length; i++) {
        drawBlob(Blobs[i]);
        if (Blobs[i].E > 0) {
            moveBlob(Blobs[i]);
            wasteEnergy(i);
        }
        eat(i);
    }
    tiredTest();
    requestAnimationFrame(draw);
}


function calculateDistance(type, i) {
    if (type == "x") {
        let put = 0;
        let low = 10000;
        let neg = 0;
        let base = i.x;
        for (let c = 0; c < Food.length; c++) {
            let test = base - Food[c].x
            if (test > 0) {
                put = test * -1;
                if (put < low) {
                    low = put;
                    neg = 1;
                }
            } else {
                put = test;
                if (put < low) {
                    low = put;
                    neg = 0;
                }
            }
        }
        if (neg = 1) {
            let output = put * -1;
            return output;
        } else {
            let output = put;
            return output;
        }
    } else if (type == "y") {
        let put = 0;
        let low = 10000;
        let neg = 0;
        let base = i.y;
        for (let c = 0; c < Food.length; c++) {
            let test = base - Food[c].y
            if (test > 0) {
                put = test * -1;
                if (put < low) {
                    low = put;
                    neg = 1;
                }
            } else {
                put = test;
                if (put < low) {
                    low = put;
                    neg = 0;
                }
            }
        }
        if (neg = 1) {
            let output = put * -1;
            return output;
        } else {
            let output = put;
            return output;
        }
    }   
}

function calculateMovement(x, y, i, type) {
    let x1 = x;
    let y1 = y;
    let x2 = i.x;
    let y2 = i.y;
    let xDis = x2 - x1;
    let yDis = y2 - y1;
    if (xDis < 0) {
        xDis = xDis * -1;
        xNeg = 1;
    }
    if (yDis < 0) {
        yDis = yDis * -1;
        yNeg = 1;
    }
    let xspeed = xDis / 100;
    let yspeed = yDis / 100;
    for (let n = 0; n < 0;) {
        if (xspeed + yspeed == i.MS) {
            if (xspeed + yspeed <= i.MS) {
            n++;
        } else if (xspeed + yspeed > i.MS) {
            xspeed -= 0.01
            yspeed -= 0.01
        } else if (xspeed + yspeed < i.MS) {
            xspeed += 0.01
            yspeed += 0.01
            }
        }
    }
    if (type == "x") {
        if (xNeg = 1) {
            return xspeed;
        } else {
            return xspeed;
        }
    } else if (type == "y") {
        if (yNeg = 1) {
            return yspeed;
        } else {
            return yspeed;
        }
    }
    
}
