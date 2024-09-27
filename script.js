// Steps 1 make a grid


const container = document.querySelector("#grid-container");

function CreateGrid(rows, columns){

    for (rows = 0; rows < 16; rows++) {
        const createDivRows = document.createElement("div");
        createDivRows.setAttribute("class", "grid-rows");
        container.appendChild(createDivRows);
        for(columns = 0; columns < 16; columns ++){
            const createDivColumns = document.createElement("div");
            createDivColumns.setAttribute("class", "grid-columns");
            createDivRows.appendChild(createDivColumns);
        }
    }
    const divCountRows = document.querySelectorAll(".grid-rows")
    const divCountColumn = document.querySelectorAll(".grid-columns")
    const count_rows = divCountRows.length;
    const count_columns = divCountColumn.length;
    console.log("Number of Rows:",count_rows);
    console.log("Number of Column:",count_columns);

}


CreateGrid();
