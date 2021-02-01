const canvasGrid = document.querySelector('.canvas-grid');
const slider = getInputElement();
const dimension = getPixelSize();
const reset = document.getElementById('reset');

makeGrid(dimension);
changeSliderLabel();

function makeGrid(dimension) {

    canvasGrid.style.setProperty("--grid-cols", dimension);
    canvasGrid.style.setProperty("--grid-rows", dimension);

    for (let i = 0; i < dimension * dimension; i++) {
        const square = document.createElement('div');
        canvasGrid.appendChild(square);
        square.classList.add('square');
        square.dataset.alpha = 0.2;
    }

    const squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('fill');
            element.style.setProperty('opacity', element.dataset.alpha);
            element.dataset.alpha = Number(element.dataset.alpha) + 0.1;
            element.style.setProperty('opacity', element.dataset.alpha);
        });
    });

}

function clearBoard() {

    const squares = document.querySelectorAll('.square');

    squares.forEach(element => {
        element.remove();
    });

}

function getInputElement() {
    return document.getElementById('pixel-size')
}

function getPixelSize() {
    return getInputElement().value
}

function changeSliderLabel() {
    sizeLabel = document.getElementById('size-label');
    sizeLabel.textContent = `${getPixelSize()}x${getPixelSize()}`;
}

function resetBoard() {
    clearBoard();
    let newSize = getPixelSize();
    makeGrid(newSize);
}

reset.addEventListener('click', resetBoard);
slider.addEventListener('mousemove', changeSliderLabel);

