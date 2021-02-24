
function wasteEnergy(i) {
    let xcost = Math.pow(Blobs[i].XS, 2);
    let ycost = Math.pow(Blobs[i].YS, 2);
    let rcost = Blobs[i].r * 3;
    let cost = xcost + ycost + rcost;
    Blobs[i].E -= cost;
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
        if (Blobs[a].H > 1) {
            Blobs[a].E = 0;
        }
        if (Blobs[a].E <= 0) {
            tired++;
        }
    }
    if (tired == Blobs.length) {
        let newBlobValues = reset();
        if (Blobs.length != 0) {
            foodchanging();
        }
        evolve(newBlobValues); // (the array of blobs evolving with the speed)
        document.getElementById("stats").innerHTML = ("Blob count: " + Blobs.length + "<br> Food count: " + Food.length + "<br> Average Speed: " + avgSpeed() + "<br> Average Size: " + avgRadius());
    }
}
function reset() {
    let EnergyChange = document.getElementById('EnergyCount').value;
    let Stat = [];
    for (let o = 0; o < Blobs.length; o++) {
        Blobs[o].y = 50;
        if (Blobs[o].YS < 0) {
            Blobs[o].YS = Blobs[o].YS * -1;
        }
        if (Blobs[o].H > 0) {
            Blobs[o].E = EnergyChange;
            if (Blobs[o].H > 1) {
                let stemp = Blobs[o].YS;
                let rtemp = Blobs[o].r;
                Stat.push(createStatArray(stemp, rtemp))
            }
            Blobs[o].H = 0;
        } else {
            Blobs.splice(o, 1);
            o--;
        }
    }
    return Stat;
}
function foodchanging() {
    let CT = document.getElementById("foodChange").value
    let FCT = document.getElementById("foodChangeTotal").value
    let FCA = document.getElementById("foodChangeAmount").value
    if (CT == "Inc") {
        if (Food.length < FCT) {
            for (let gop = 0; gop < FCA; gop++) {
                Food.push(newFood(randomInt(10, cnv.width - 10), randomInt(150,cnv.height - 10), 2.5, "green"));
            }
        }
    } else if (CT == "Dec") {
        if (Food.length > FCT) {
            for (let gop = 0; gop < FCA; gop++) {
                Food.pop()
            }
        }
    }
    for (let n = 0; n < Food.length; n++) {
        let newX = randomInt(10,cnv.width - 10);
        let newY = randomInt(150,cnv.height - 10);
        Food[n].x = newX;
        Food[n].y = newY;
    }
}
function restart() {
    var SB = document.getElementById("StartBlob")
    var SF = document.getElementById("StartFood")
    let cnvW = document.getElementById("canvasW").value;
    let cnvH = document.getElementById("canvasH").value;
    cnv.width = cnvW;
    cnv.height = cnvH;
    Blobs = [];
    Food = [];
    for (let r = 0; r < SB.value; r++) {
        Blobs.push(GB());
    }
    for (let r = 0; r < SF.value; r++) {
        Food.push(newFood(randomInt(0,cnv.width), randomInt(150,cnv.height), 2.5, "green"));
    }
    document.getElementById("stats").innerHTML = ("Blob count: " + Blobs.length + "<br> Food count: " + Food.length + "<br> Average Speed: " + avgSpeed() + "<br> Average Size: " + avgRadius());
}