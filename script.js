const rainbowColors = ["#9C4F96", "#FF6355", "#FBA949", "#FAE442", "#8BD448", "#2AA8F2"];
let rainbowFlag = 0;
let useRainbow = false;

let cellColor = "rgb(71, 71, 71)";

function getRainbowColor() {
  rainbowFlag = (rainbowFlag === rainbowColors.length - 1) ? 0 : rainbowFlag + 1;
  return rainbowColors[rainbowFlag];
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

const sizeRange = document.querySelector('#size-range');
const sizeLabel = document.querySelector("#size-label");
sizeRange.addEventListener('change', e => {
    generateGrid(e.target.value);

    sizeLabel.innerText = `${e.target.value}x${e.target.value}`   
})

const rainbowCheckbox = document.querySelector("#rainbow");
rainbowCheckbox.addEventListener('change', e => {
    useRainbow = !useRainbow;
})

generateGrid(8);