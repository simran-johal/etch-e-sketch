

// creating the grid of pixels
let containerDiv = document.getElementById('grid-container') // selected container div in html
let slider = document.getElementById('slider-scale') // selected slider
let sliderNumber = document.getElementById('slider-value') // selected slider-value

slider.addEventListener('input', function() { 
    updateSliderValue()
    createDivGrid()

})

function updateSliderValue() {
    sliderNumber.textContent = slider.value;
}

function createDivGrid() {

    containerDiv.innerHTML = ''; // deletes inner html before the for loop

    containerDiv.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`

    for (let i = 0; i < slider.value * slider.value; i++) {
        containerDiv.appendChild(document.createElement('div')) // creates divs inside
    }
}

updateSliderValue()
createDivGrid()


