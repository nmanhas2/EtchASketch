const NUM_GRID_ROWS = 16;
const NUM_GRID_COLUMNS = 16;
const grid_container = document.querySelector(".grid_container");


function GenerateGrid(){
    for(let i = 0; i < NUM_GRID_ROWS; i++){
        const row = document.createElement("div");
        row.classList.add("grid_row");
        row.id = `row_${i}`;

        for(let j = 0; j < NUM_GRID_COLUMNS; j++){
            const column = document.createElement("div");
            column.classList.add("grid_column");
            column.id = `row_${i}_column${j}`;
            column.textContent = j;
            row.appendChild(column);
        }

        grid_container.appendChild(row);
    }
}

GenerateGrid();