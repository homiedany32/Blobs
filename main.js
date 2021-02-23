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
            moveBlob(Blobs[i]);
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
