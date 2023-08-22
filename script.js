
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
let rainbowMode = document.getElementById('rainbow-mode')
let eraserMode = document.getElementById('eraser')
let colorMode = document.getElementById('color-mode')

//clear button
    clearButton.addEventListener('click', function() {
        let gridDivs = gridContainerDiv.querySelectorAll('div')
        gridDivs.forEach(function(div) {
            div.style.backgroundColor = "white";
        })
            colorMode.classList.remove("button-selected")
            rainbowMode.classList.remove("button-selected")
            eraser.classList.remove("button-selected")
    })

// MODES CODE


let colorModeIsOn = false
let rainbowModeIsOn = false
let eraserModeIsOn = false
let isClicked = false;

function resetModes() {
    colorModeIsOn = false
    rainbowModeIsOn = false
    eraserModeIsOn = false
}

//MODE SELECTING FUNCTIONALITY
   colorMode.addEventListener('click', function (event) {
        resetModes();
        colorModeIsOn = true; 
        if (colorModeIsOn) {
            colorMode.classList.add("button-selected")
            rainbowMode.classList.remove("button-selected")
            eraser.classList.remove("button-selected")
        } 
    })

    rainbowMode.addEventListener('click', function(event) {
        resetModes();
        rainbowModeIsOn = true; 
        if (rainbowModeIsOn) {
            rainbowMode.classList.add("button-selected")
            colorMode.classList.remove("button-selected")
            eraserMode.classList.remove("button-selected")
    }})

    eraserMode.addEventListener('click', function(event) {
        resetModes();
        eraserModeIsOn = true; 
        if (eraserModeIsOn) {
            eraserMode.classList.add("button-selected")
            rainbowMode.classList.remove("button-selected")
            colorMode.classList.remove("button-selected")
        }
    })

        
        
        


 //MOUSE CLICKING TYPE FUNCTIONALITY
    gridContainerDiv.addEventListener('mousedown', (event) => {
        if (event.target.tagName === "DIV" && colorModeIsOn) {
            event.target.style.backgroundColor = chosenColor
            isClicked = true
        }
        else if (event.target.tagName === "DIV" && rainbowModeIsOn) {
            event.target.style.backgroundColor = randomColor()
            isClicked = true
        }
        else if (event.target.tagName === "DIV" && eraserModeIsOn) {
            event.target.style.backgroundColor = "white"
            isClicked = true
        }
        else {} //CODE TO MAKE NOTHING HAPPEN
    })


//FUNCTIONALITY FOR COLOR SELCTIONS & RAINBOW MODES
    function randomColor() {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`
    }

    // ADD EVENT LISTENERS AND FUNCTIONALITY TO LISTEN FOR COLOR PICKER AND ASSIGN TO COLORMODE

    let chosenColor = "black"

    let chosenColorFromPicker = document.querySelector('input[type="color"]')
    chosenColorFromPicker.addEventListener('change', (event) => {
    chosenColor = event.target.value
    console.log(chosenColor)
    })










    gridContainerDiv.addEventListener('mousemove', (event) => {
        if (event.target.tagName === "DIV" && isClicked && colorModeIsOn) {
            event.target.style.backgroundColor = chosenColor
            isClicked = true
        }
        else if (event.target.tagName === "DIV" && isClicked && rainbowModeIsOn) {
            event.target.style.backgroundColor = randomColor()
            isClicked = true
        }
        else if (event.target.tagName === "DIV" && isClicked && eraserModeIsOn) {
            event.target.style.backgroundColor = "white"
            isClicked = true
        }
        else {} //CODE TO MAKE NOTHING HAPPEN
    })

    gridContainerDiv.addEventListener('mouseup', (event) => {
        if (event.target.tagName === "DIV") {
            isClicked = false
        }
    })


    














