const grid = document.querySelector(".grid");
const userInput = document.getElementById("new-size");
const resetButton = document.querySelector(".reset");

createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("pixel");
    grid.appendChild(div);
  }
};

updateGrid = () => {
    
    if(userInput.value > 100 || userInput.value < 2){
        alert("Must be a number between 2 and 100")

    }
    else{
        grid.innerHTML = "";
        grid.style.setProperty(
        "grid-template-columns",
        `repeat(${userInput.value}, 2fr)`);
  
        grid.style.setProperty(
        "grid-template-rows",
    `   repeat(${userInput.value}, 2fr)`);
  
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        grid.appendChild(div);
    }
    console.log(userInput.value);
    }
};

const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("pixel", "color");
});

userInput.addEventListener("change", updateGrid);

createGrid();
