

// creating the grid of pixels
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





// use mouse events for the tracking using flags

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

// button for different settings

//clear







