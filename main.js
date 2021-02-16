let Blobs = createBlobArray(10);
let Food = createFoodArray(50);
let tired = 0;



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
        } else {
            tired++;
        }
        sideWallTest(i);
        bottomWallTest(i);
        eat(i);
    }
    if (tired >= Blobs.length) {
        for (let p = 0; p < Blobs.length; p++){
            Blobs[p].E = 5000;
        }
        var tired = 0;
    }
    requestAnimationFrame(draw);
}

function sideWallTest(o) {
    let blobXSpeed = Blobs[o].XS;
    let blobx = (cnv.width - Blobs[o].r)
    if (Blobs[o].x >= blobx) {
        Blobs[o].XS = blobXSpeed * -1;
    } else if (Blobs[o].x <= Blobs[o].r) {
        Blobs[o].XS = blobXSpeed * -1;
    }
}

function bottomWallTest(o) {
    let blobYSpeed = Blobs[o].YS;
    let bloby = (cnv.height - Blobs[o].r)
    if (Blobs[o].y >= bloby) {
        Blobs[o].YS = blobYSpeed * -1;
    } else if (Blobs[o].y <= Blobs[o].r) {
        Blobs[o].YS = blobYSpeed * -1;
    }
}

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
                        console.log("ate");
                    }
                }
            }
        } else if (Blobs[i].x <= FX) {
            if (BX >= FX) {
                if (Blobs[i].y <= FY) {
                    if (BY >= FY) {
                        Food[a].x = -1400;
                        Food[a].y = -1400;
                        console.log("ate");
                    }
                }
            }
        }
    }
}
