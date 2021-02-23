/* Requires:
    "<canvas id="my-canvas"></canvas>" in the HTML document
*/
// Main
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 600;

/* Function List:
    modes:
        stroke(color)
        fill(color)
    background(color)
    lineWidth(width)
    font(fontSetting)
    rect(x, y, w, h, mode)
    line(x1. y, x2. y2)
    circle(x, y, r, mode)
    triangle(x1, y1, x2, y2, x3, y3, mode)
    text(message, x, y, mode)
    ellipse(x, y, xRadius, yRadius, rotation, mode)
*/

function stroke(color) {
    ctx.strokeStyle = color;
}
function fill(color) {
    ctx.fillStyle = color;
}
function background(color) {
    fill(color)
    rect(0, 0, cnv.width, cnv.height, "fill")
}
function lineWidth(width) {
    ctx.lineWidth = width;
}
function font(fontSetting) {
    ctx.font = fontSetting;
}

//Draw a stroked/filled rectangle with a top-left corner of (x,y), a width of w, and a height of h
function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h);
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}

//Draw a line segment from (x1, y1) to (x2, y2)
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);//Endpoint 1
    ctx.lineTo(x2,y2);//Endpoint 2
    ctx.stroke(); 
}

//Draw a circle segment at (x, y) with a radius of r
function circle (x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI)
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

//Draw a triangle with 3 Segments with lines connecting them in order
function triangle (x1, y1, x2, y2, x3, y3, mode) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); // Vertex 1
    ctx.lineTo(x2, y2); // Vertex 2
    ctx.lineTo(x3, y3); // Vertex 3
    if (mode === "fill") {
        ctx.closePath();
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.closePath();
        ctx.stroke();
    }
}

//Make text
function text(message, x, y, mode) {
    if (mode === "fill") {
        ctx.fillText(message, x, y);
    } else if (mode === "stroke") {
        ctx.strokeText(message, x, y);
    }
}

//Draw a funky circle
function ellipse(x, y, xRadius, yRadius, rotation, mode) {
    ctx.beginPath();
    ctx.ellipse(x, y, xRadius, yRadius, rotation, 0, 2 * Math.PI);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}