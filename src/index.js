const canvasGrid = document.querySelector('.canvas-grid');

function makeGrid(dimension) {

    canvasGrid.style.setProperty("--grid-cols", dimension);
    canvasGrid.style.setProperty("--grid-rows", dimension);

    for (let i = 0; i < dimension * dimension; i++) {
        const square = document.createElement('div');
        canvasGrid.appendChild(square);
        square.classList.add('square');
    }
}

let dimension = 16;

makeGrid(16);

const squares = document.querySelectorAll('.square');

squares.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.classList.add('fill');
    })
});