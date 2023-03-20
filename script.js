/*Create a webpage with a 16x16 grid of square divs.

    Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
    It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
    There are several different ways to make the divs appear as a grid (versus just one on each line). Feel free to use any or play with each of them:
        float/clear
        inline-block
        flexbox
        CSS Grid
    Be careful with borders and margins, as they can adjust the size of the squares!
    “OMG, why isn’t my grid being created???”
        Did you link your CSS stylesheet?
        Open your browser’s developer tools.
        Check if there are any errors in the JavaScript console.
        Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
        Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.
*/

const container = document.querySelector(".container");

// Create a grid of 16X16 square divs.
for (i = 1; i <= 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
}