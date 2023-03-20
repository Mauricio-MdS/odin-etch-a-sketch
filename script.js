const container = document.querySelector(".container");

// Create a grid of 16X16 square divs.
for (i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.addEventListener("mouseover", (event) => paintSquare(event.target));
    container.appendChild(div);
}

function paintSquare(square) {
    square.style.backgroundColor = "black";
}