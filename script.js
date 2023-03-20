const button = document.querySelector("button");
const container = document.querySelector(".container");


newGrid(16);

button.addEventListener("click", askGrid );

function askGrid() {
    let n;
    do {
        n = prompt("Choose N for a N X N grid. It must be less than 100.");
        n = isNaN(n) ? 0 : Math.floor(n);
    } while (n < 1 || n > 100)
    newGrid(n);
}

// Create a grid of nXn square divs.
function newGrid(n) {

    container.innerHTML = "";

    const height = 100/n;
    for (i = 1; i <= (n * n); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.cssText = `height: ${height}%; aspect-ratio: 1;`;
        div.addEventListener("mouseover", (event) => paintSquare(event.target));
        container.appendChild(div);
    }

}

function paintSquare(square) {
    square.style.backgroundColor = "black";
}