const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", askGrid);

askGrid();

function askGrid() {
    let n;
    do {
        n = prompt("Choose N for a N X N grid. It must be less than 100.");
        n = isNaN(n) ? 0 : Math.floor(n);
    } while (n < 1 || n > 100)
    const painter = choosePainter(); 
    newGrid(n, painter);
}

function choosePainter() {
    const painter = prompt(
        "Type BLACK for a black brush, MULTICOLOR, for a multicolored brush, SHADER for an incresing level of black"
        ).toUpperCase();
    switch(painter) {
        case "BLACK":
            return paintBlack;
        case "MULTICOLOR":
            return paintRandom;
        case "SHADER":
            return paintShader;
        default:
            alert("Default to black");
            return paintBlack;
    }
}

// Create a grid of nXn square divs, and set the painter;
function newGrid(n, painter) {

    container.innerHTML = "";

    const height = 100/n;
    for (i = 1; i <= (n * n); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.cssText = `height: ${height}%; aspect-ratio: 1;`;
        div.addEventListener("mouseover", (event) => painter(event.target));
        container.appendChild(div);
    }

}

function paintBlack(square) {
    square.style.backgroundColor = `rgb(0, 0, 0)`;
}

function paintRandom(square) {
    const red =  Math.floor(Math.random() * 256);
    const blue =  Math.floor(Math.random() * 256);
    const green =  Math.floor(Math.random() * 256);
    square.style.backgroundColor = `rgb(${red},${blue},${green})`;
}

function paintShader(square) {
    let passes = (square.dataset.passes) ? parseInt(square.dataset.passes) : 0;
    if (passes < 10) passes++;
    square.dataset.passes = passes;
    const grayIntensity = Math.round(255 - (255/10 * passes));
    square.style.backgroundColor = `rgb(${grayIntensity}, ${grayIntensity}, ${grayIntensity})`;
}

