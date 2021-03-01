function evolvingStats(Speed, Radius) {
    return {
        s: Speed,
        r: Radius
    }
}
function createStatArray(spd, rad) {
    let temp = evolvingStats(spd, rad)
    return temp;
}
function evolve(EVOLVE) {
    let EnergyChange = document.getElementById('EnergyCount').value;
    for (let asd = 0; asd < EVOLVE.length; asd++) {
        //console.log(EVOLVE)
        let chance = Math.random()
        if (chance >= 0.5) {
            if (chance >= 0.75) {
                Blobs.push(newBlob(randomInt(15, cnv.width - 15), 50, evolveRad(asd), "blue", Blobs[asd].YS += Math.random(), Blobs[asd].YS += Math.random(), EnergyChange, 0));
            } else {
                Blobs.push(newBlob(randomInt(15, cnv.width - 15), 50, evolveRad(asd), "blue", Blobs[asd].XS -= Math.random(), Blobs[asd].YS -= Math.random(), EnergyChange, 0));
            }
        } else {
            Blobs.push(newBlob(randomInt(15, cnv.width - 15), 50, evolveRad(asd), "blue", randomDec(-7.0, 7.0), Blobs[asd].YS, EnergyChange, 0));
        }
    }
}
function evolveRad(ard) {
    let rChance = Math.random()
    if (rChance >= 0.5) {
        if (rChance >= 0.75) {
            let output = Blobs[ard].r + Math.random()
            return output
        } else {
            let output = Blobs[ard].r - Math.random()
            return output
        }
    } else {
        let output = Blobs[ard].r;
        return output
    }
    
}
function avgSpeed() {
    let totalSpeed = 0;
    for (let f = 0; f < Blobs.length; f++) {
        if (Blobs[f].XS > 0) {
            totalSpeed += (Blobs[f].YS + Blobs[f].XS)
        } else {
            totalSpeed += (Blobs[f].YS + (Blobs[f].XS) * -1)
        }
    }
    totalSpeed = Math.floor(totalSpeed * 100);
    totalSpeed = totalSpeed / 100;
    let output = totalSpeed / Blobs.length
    output = Math.floor(output * 100);
    output = output / 100;
    return output
}
function avgRadius() {
    let totalRadius = 0;
    for (let f = 0; f < Blobs.length; f++) {
        totalRadius += Blobs[f].r
    }
    totalRadius = Math.floor(totalRadius * 100);
    totalRadius = totalRadius / 100;
    let output = totalRadius / Blobs.length
    output = Math.floor(output * 100);
    output = output / 100;
    return output
}
