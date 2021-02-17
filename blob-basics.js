
function wasteEnergy(i) {
    if (Blobs[i].XS < 0) {
        if (Blobs[i].YS < 0) {
            let xCost = Math.pow(Blobs[i].XS * -1, 2);
            let yCost = Math.pow(Blobs[i].YS * -1, 2);
            let cost = xCost + yCost;
            Blobs[i].E -= cost;
        } else {
            let xCost = Math.pow(Blobs[i].XS * -1, 2);
            let yCost = Math.pow(Blobs[i].YS, 2);
            let cost = xCost + yCost;
            Blobs[i].E -= cost;
        }
    } else {
        if (Blobs[i].YS < 0) {
            let xCost = Math.pow(Blobs[i].XS, 2);
            let yCost = Math.pow(Blobs[i].YS * -1, 2);
            let cost = xCost + yCost;
            Blobs[i].E -= cost;
        } else {
            let xCost = Math.pow(Blobs[i].XS, 2);
            let yCost = Math.pow(Blobs[i].YS, 2);
            let cost = xCost + yCost;
            Blobs[i].E -= cost;
        }
    }
}

function eat(i) {
    for (let a = 0; a < Food.length; a++) {
        let BX = Blobs[i].x + Blobs[i].r;
        let BY = Blobs[i].y + Blobs[i].r;
        let FX = Food[a].x + Food[a].r;
        let FY = Food[a].y + Food[a].r
        if (Blobs[i].x <= Food[a].x) {
            if (BX >= Food[a].x) {
                if (Blobs[i].y <= Food[a].y) {
                    if (BY >= Food[a].y) {
                        Food[a].x = -1400;
                        Food[a].y = -1400;
                        Blobs[i].H += 1;
                    }
                }
            }
        } else if (Blobs[i].x <= FX) {
            if (BX >= FX) {
                if (Blobs[i].y <= FY) {
                    if (BY >= FY) {
                        Food[a].x = -1400;
                        Food[a].y = -1400;
                        Blobs[i].H += 1;
                    }
                }
            }
        }
    }
}

function tiredTest() {
    let tired = 0;
    for (let a = 0; a < Blobs.length; a++) {
        if (Blobs[a].E <= 0) {
            tired++;
        }
    }
    if (tired == Blobs.length) {
        let count = Blobs.length
        let newBlobs = reset();
        if (newBlobs > 0) {
            let output = newBlobs + count;
            for (let b = count; b < output; b++) {
                Blobs.push(newBlob(randomInt(15, cnv.width - 15), 50, 10, "blue", randomDec(-7.0, 7.0), randomDec(1.0, 7.0), 5000, 0));
            }
        }
    }
}

function reset() {
    let num = 0;
    for (let o = 0; o < Blobs.length; o++) {
        Blobs[o].y = 50;
        if (Blobs[o].H > 0) {
            Blobs[o].E = 5000;
            if (Blobs[o].H > 1) {
                num++;
            }
            Blobs[o].H = 0;
        } else {
            Blobs.splice(o, 1);
            o--;
        }
    }
    for (let n = 0; n < Food.length; n++) {
        let newX = randomInt(0,cnv.width);
        let newY = randomInt(150,cnv.height);
        Food[n].x = newX;
        Food[n].y = newY;
    }
    if (Food.length > 30) {
        Food.pop()
    }
    return num;
}
