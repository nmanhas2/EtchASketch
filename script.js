let NUM_GRID_ROWS = 0;
let NUM_GRID_COLUMNS = 0;

let random_color = false;
let eraser = false;

const grid_container = document.querySelector(".grid_container");
const grid_size = document.querySelector("#grid_size");
const grid_color_mode = document.querySelector("#grid_color_mode");
const grid_clear = document.querySelector("#grid_clear");
const grid_eraser = document.querySelector("#grid_eraser");

grid_container.addEventListener("mouseenter", (e) =>{
    if (!e.target.classList.contains("grid_column")) return;
    
    if(eraser){
        e.target.style.backgroundColor = "white";
        return;
    }
    
    if(random_color){
        e.target.style.backgroundColor = GetRandomColor();
    }else{
        e.target.style.backgroundColor = "black";
    }

}, true);

grid_eraser.addEventListener("click", () => {
    eraser = true;
});

grid_clear.addEventListener("click", () => {
    SetGridSize();
});

grid_size.addEventListener("input", (e) =>{
    SetGridSize();
});

grid_color_mode.addEventListener("click", () => {
    random_color = !random_color;
    eraser = false;
    grid_color_mode.textContent = random_color ? "Random Color" : "Black";
});

function GetRandomColor() {

  const letters = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function GenerateGrid(){

    grid_container.innerHTML = "";

    const grid_container_rectangle = grid_container.getBoundingClientRect();
    const column_height = grid_container_rectangle.height / NUM_GRID_ROWS;
    const column_width = grid_container_rectangle.width / NUM_GRID_ROWS;

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
            column.style.height = `${column_height}px`
            column.style.width = `${column_width}px`
            column.style.boxSizing = "border-box";

            row.appendChild(column);
        }

        grid_container.appendChild(row);
    }
}

function SetGridSize(){
    NUM_GRID_COLUMNS = grid_size.value;
    NUM_GRID_ROWS = grid_size.value;

    const grid_size_label = document.querySelector("#grid_size_label");
    grid_size_label.textContent = `Grid Size: ${NUM_GRID_ROWS}x${NUM_GRID_COLUMNS}`;

    GenerateGrid();
}

SetGridSize();

