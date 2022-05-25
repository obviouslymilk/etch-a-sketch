// 1. возможность создание сетки из divs разных размерах в пределах постоянных ширины и высоты контейнера сетки. +
// 2. добавить функцию покраски клетки и сброса цвета сетки. +
// 3. связать перемещение мыши с покраской сетки. +
// 4. добавить цвет радуги (и выбор своего цвета?).


function colorCell(e, color) {
    e.target.style.backgroundColor = color;
}


function resetColors() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = "white";
    })
}


function cell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    cell.addEventListener('mouseenter', e => colorCell(e, "black"));

    return cell;
}


function generateGrid(size) {
    const grid = document.querySelector('.grid-container');
    grid.innerHTML = '';

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            grid.appendChild(cell());
        }
    } 
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}


const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', e => resetColors());

generateGrid(8);