
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
