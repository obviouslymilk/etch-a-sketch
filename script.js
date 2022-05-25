const rainbowColors = ["#9C4F96", "#FF6355", "#FBA949", "#FAE442", "#8BD448", "#2AA8F2"];
let rainbowFlag = 0;
let useRainbow = false;

let cellColor = "black";

function getRainbowColor() {
    if (rainbowFlag === rainbowColors.length - 1)
        rainbowFlag = 0;
    else
        rainbowFlag++;
    return rainbowColors[rainbowFlag]
}



function colorCell(e) {
    e.target.style.backgroundColor = useRainbow ? getRainbowColor() : cellColor;
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
    
    cell.addEventListener('mouseenter', colorCell);

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

generateGrid(32);