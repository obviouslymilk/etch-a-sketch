// 1. возможность создание сетки из divs разных размерах в пределах постоянных ширины и высоты контейнера сетки.
// 2. добавить функцию покраски клетки и сброса цвета сетки.
// 3. связать перемещение мыши с покраской сетки.
// 4. добавить цвет радуги (и выбор своего цвета?).

function cell() {
    const cell = document.createElement('div');;
    cell.classList.add('cell');
    
    return cell
}


function generateGrid(size) {
    const grid = document.querySelector('.grid-container');

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            grid.appendChild(cell());
        }
    } 
    
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
}
