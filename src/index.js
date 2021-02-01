const canvasGrid = document.querySelector('.canvas-grid');

function makeGrid(dimension) {

    canvasGrid.style.setProperty("--grid-cols", dimension);
    canvasGrid.style.setProperty("--grid-rows", dimension);

    for (let i = 0; i < dimension * dimension; i++) {
        const square = document.createElement('div');
        canvasGrid.appendChild(square);
        square.classList.add('square');
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('fill');
        });
    });

}

function clearBoard() {

    const squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        element.remove();
    });

}

let dimension = 16;

makeGrid(dimension);

const reset = document.getElementById('reset');

reset.addEventListener('click', () => {

    clearBoard();

    pixelSize = document.getElementById('pixel-size').value;

    makeGrid(pixelSize);

})

