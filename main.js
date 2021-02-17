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
        sideWallTest(i);
        bottomWallTest(i);
        eat(i);
    }
    tiredTest();
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
