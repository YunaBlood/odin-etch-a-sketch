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
const containerRows = document.querySelector(".grid-rows");

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

function removeGrid(){
    let input = prompt("How many square do you want per side ? (max 100)" ,"1");

    if(input === null){
        alert("User canceled")
        return; //Exit the function
    }

    let SquareChoice = Number(input.trim()); //Convert input to a number and trim spaces

    // Check if the input is NaN or out of range
    if(isNaN(SquareChoice)|| SquareChoice > 100 || SquareChoice < 1){
        alert("Choose a number between 1 and 100")
        return removeGrid();
    }

    container.innerHTML = ""; //Remove all rows and column


    let result = 960 / SquareChoice;
    console.log(result);

    for (let rows = 0; rows < SquareChoice; rows++) {
        let rowsDiv = document.createElement("div")
        rowsDiv.style.display = "flex"
        rowsDiv.classList.add("grid-row")
        for(let col = 0;col < SquareChoice;col++ ){
            let square = document.createElement("div")
            square.classList.add("grid-col")
            square.style.border = `1px solid black`
            square.style.width = `${result}px`;
            square.style.height = `${result}px`;

            rowsDiv.appendChild(square);
        }

        container.appendChild(rowsDiv);
    }
}
//Reset button
function buttonReset(){
    const buttonReset = document.querySelector("#reset-grid")
    buttonReset.textContent = "Reset"
    buttonReset.addEventListener("click", () => removeGrid())
}

buttonReset();
