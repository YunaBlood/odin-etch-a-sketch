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
}

CreateGrid();

//Set hover effect
function setHoverEffect(grid){
    const divHover = document.querySelectorAll(".grid-columns")

    for (let grid = 0; grid < divHover.length; grid++ ){
        divHover[grid].addEventListener("mouseenter" , () =>{
            divHover[grid].setAttribute("style", `background-color:grey`);
        });
    }
}

setHoverEffect();
