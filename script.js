let NUM_GRID_ROWS = 64;
let NUM_GRID_COLUMNS = NUM_GRID_ROWS;
const grid_container = document.querySelector(".grid_container");

function GenerateGrid(){
    const grid_container_rectangle = grid_container.getBoundingClientRect();
    const column_height = grid_container_rectangle.height / NUM_GRID_ROWS;
    const column_width = grid_container_rectangle.width / NUM_GRID_ROWS;
    console.log(column_height);
    console.log(column_width);

    for(let i = 0; i < NUM_GRID_ROWS; i++){
        const row = document.createElement("div");

        row.style.display = "flex";
        row.style.justifyContent = "center";

        row.classList.add("grid_row");
        row.id = `row_${i}`;

        for(let j = 0; j < NUM_GRID_COLUMNS; j++){
            const column = document.createElement("div");

            column.classList.add("grid_column");
            column.id = `row_${i}_column${j}`;
            column.style.border = "2px solid black"
            column.style.height = `${column_height}px`
            column.style.width = `${column_width}px`
            column.style.boxSizing = "border-box";

            column.addEventListener("mouseenter", (e) =>{
                e.target.style.backgroundColor = "black";
            });

            row.appendChild(column);
        }

        grid_container.appendChild(row);
    }
}

GenerateGrid();