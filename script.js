// 1. возможность создание сетки из divs разных размерах в пределах постоянных ширины и высоты контейнера сетки.
// 2. добавить функцию покраски клетки и сброса цвета сетки.
// 3. связать перемещение мыши с покраской сетки.
// 4. добавить цвет радуги (и выбор своего цвета?).


/**
 * Создает div элемент клетки
 * @returns объект клетки
 */
function cell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    
    return cell
}


/**
 * Генерирует сетку в контейнере DOM'а
 * @param {int} size размер стороны сетки
 */
function generateGrid(size) {
    const grid = document.querySelector('.grid-container');
    grid.innerHTML = ''

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            grid.appendChild(cell());
        }
    } 
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

