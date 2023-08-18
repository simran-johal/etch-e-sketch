
//
//
// CREATING THE GRID OF PIXELS
let gridContainerDiv = document.getElementById('grid-container') // selected container div in html
let slider = document.getElementById('slider-scale') // selected slider
let sliderNumber = document.getElementById('slider-value') // selected slider-value


function updateSliderValue() {
    sliderNumber.textContent = slider.value;
}

function createDivGrid() {

    gridContainerDiv.innerHTML = ''; // deletes inner html before the for loop

    gridContainerDiv.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`

    for (let i = 0; i < slider.value * slider.value; i++) {
        gridContainerDiv.appendChild(document.createElement('div')) // creates divs inside
    }
}

slider.addEventListener('input', () => { 
    updateSliderValue()
    createDivGrid()

})

updateSliderValue()
createDivGrid()





// MODES FOR DIFFERENT COLORS 
// BUTTONS FOR EACH

let clearButton = document.getElementById('clear') 
let eraserButton = document.getElementById('rainbow-mode')
let rainbowMode = document.getElementById('eraser')
let colourMode = document.getElementById('color-mode')

//clear button
    clearButton.addEventListener('click', function() {
        let gridDivs = gridContainerDiv.querySelectorAll('div')
        gridDivs.forEach(function(div) {
            div.style.backgroundColor = "white";
        })
    })

let colorModeIsOn = false
let rainbowModeIsOn = false
let eraserModeIsOn = false

    if (colourMode.addEventListener('click', function() {
        colorModeIsOn = true
    }))

    


    let isClicked = false

    gridContainerDiv.addEventListener('mousedown', (event) => {
        if (event.target.tagName === "DIV") {
            event.target.style.backgroundColor = "black"
            isClicked = true
        }
    })

    gridContainerDiv.addEventListener('mousemove', (event) => {
        if (event.target.tagName === "DIV" && isClicked == true) {
            event.target.style.backgroundColor = "black"
        }
    })

    gridContainerDiv.addEventListener('mouseup', (event) => {
        if (event.target.tagName === "DIV") {
            event.target.style.backgroundColor = "black"
            isClicked = false
        }
    })
















