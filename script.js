const gridContainer = document.querySelector(".grid-container");
const newGridButton = document.querySelector("button");
newGridButton.addEventListener("click", () => {
    const gridSize = askForGridSize()
    if (!gridSize) {
        return;
    }
    gridContainer.innerHTML = "";
    createGrid(gridSize)
})

function createGrid(gridSize = 64) {
    const gridCellSize = 960 / gridSize
    for (let row = 0; row < gridSize; row++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let col = 0; col < gridSize; col++) {
                const gridCell = document.createElement("div");
                gridCell.style.width = `${gridCellSize}px`;
                gridCell.style.height = `${gridCellSize}px`;
                gridCell.classList.add("grid-cell")
                gridRow.appendChild(gridCell);
            }

        gridContainer.appendChild(gridRow)
    }
}

function initializeDrawing() {
    gridContainer.addEventListener("mouseover", (event) => {
        if (!event.target.classList.contains("grid-cell")) {
            return;
        }

        let cellOnHover = event.target;
        cellOnHover.style.backgroundColor = "black";
    })
}

function askForGridSize() {
    let input = prompt("Enter the number of squares per side (1-100):");
    
    if (input === null || input.trim() === "") {
        alert("Invalid input");
        return;
    } 
    
    const gridSize = Number(input);

    if (gridSize < 1 || gridSize > 100) {
        alert("Invalid input");
        return;
    } else {
        return gridSize;
    }
    
}
createGrid();
initializeDrawing();