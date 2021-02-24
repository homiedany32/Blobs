let Blobs = createBlobArray(1);
let Food = createFoodArray(500);
let Stat = [];

requestAnimationFrame(draw);

function GB() {
    let EnergyChange = document.getElementById('EnergyCount').value;
    return newBlob(randomInt(15, cnv.width - 15), 50, 5, "blue", randomDec(-7.0, 7.0), 3.0, EnergyChange, 0)
}
function draw() {
    background("lightgreen")
    for (let o = 0; o < Food.length; o++) {
        drawFood(Food[o]);
    }
    for (let i = 0; i < Blobs.length; i++) {
        drawBlob(Blobs[i]);
        if (Blobs[i].E > 0) {
            moveBlob(i);
            wasteEnergy(i);
        }
        eat(i);
        sidewalltest(i);
        topwalltest(i);
    }
    tiredTest();
    requestAnimationFrame(draw);
}
function sidewalltest(i) {
    let trueX = Blobs[i].x + Blobs[i].r
    if (trueX > cnv.width) {
        Blobs[i].XS = Blobs[i].XS * -1;
    } else if (Blobs[i].x < Blobs[i].r) {
        Blobs[i].XS = Blobs[i].XS * -1;
    }
}
function topwalltest(i) {
    let trueY = Blobs[i].y + Blobs[i].r
    if (trueY > cnv.height) {
        Blobs[i].YS = Blobs[i].YS * -1;
    } else if (Blobs[i].y < Blobs[i].r) {
        Blobs[i].YS = Blobs[i].YS * -1;
    }
}

function moveBlob(i) {
    /* 
    let MX;
    let MY;
    if (Blobs[i].FL == 0) {
        MX = calcDis(i, "x")
        MY = calcDis(i, "y")
        Blobs[i].FL = 1
    }
    
    */
    Blobs[i].x += Blobs[i].XS;
    Blobs[i].y += Blobs[i].YS;
}


/* Thoughts:

Eyes?
How?
1: (done?) calculate distance/slope/angle/degress of nearest food
2: remove the random movement code
3: implement a system that takes the input to use in movement of the blob
4: make a system that makes sure that the food is still there when multiple blobs chase after it

*/

// the following below is needed(?) for implementing eyes on blobs

function calcDis(i, type) {
    let xdis = 1000000;
    let ydis = 1000000;
    let xneg = 0;
    let yneg = 0;
    for (let fl = 0; fl < Food.length; fl++) {
        let cx = Blobs[i].x - Food[fl].x
        let cy = Blobs[i].y - Food[fl].y
        if (cx < 0) {
            cx *= -1
            if (cy < 0) {
                cy *= -1
                if (cx < xdis && cy < ydis) {
                    xneg = 1
                    yneg = 1
                    xdis = cx
                    ydis = cy
                }
            } else {
                if (cx < xdis && cy < ydis) {
                    xneg = 0
                    yneg = 1
                    xdis = cx
                    ydis = cy
                }
            }
        } else if (cy < 0) {
            cy *= -1
            if (cx < xdis && cy < ydis) {
                xneg = 0
                yneg = 1
                xdis = cx
                ydis = cy
            }
        } else {
            if (cx < xdis && cy < ydis) {
                xneg = 0
                yneg = 0
                xdis = cx
                ydis = cy
            }
        }
    }
    if (xneg == 1) {
        xdis *= -1
    }
    if (yneg == 1) {
        ydis *= -1
    }
    if (type == "x") {
        return xdis
    } else if (type == "y") {
        return ydis
    }
}
