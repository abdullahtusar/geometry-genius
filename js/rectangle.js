//=============Rectangle==========//
function rectangleAreaCalculation(){
    const rectangleWidth = getInputElementById('rectangle-width');
    const rectangleLength = getInputElementById('rectangle-length');
    //rectangle result calculate
    const rectangleArea = rectangleWidth * rectangleLength;
    return rectangleArea;
}


// add event handler on Button Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const rectangleArea = rectangleAreaCalculation();
    //validation for NaN
    if(isNaN(rectangleArea)){
        alert('Please insert valid number!!')
        return;
    }
    else if(rectangleArea < 0){
        alert('Please insert Positive number!!')
        return;
    }
    const rectangleResult = setInnerTextValueById('rectangle-result', rectangleArea);
}) 

//add event handler on button rectangle convert 
document.getElementById('btn-rectangle-convert').addEventListener('click', function(){
    const rectangleArea = rectangleAreaCalculation();
    if(isNaN(rectangleArea)){
        alert('Please insert valid Number!!!');
        return;
    }
    const rectangleConvertedResult = setInnerTextValueById('rectangle-result', convertCmToMeter(rectangleArea));
    cmTextToMeter('rectangle-cm');
})

// add event handler on mouse enter bg color change
document.getElementById('rectangle').addEventListener('mouseenter', function(){
    this.style.backgroundColor = generateRandomColor();
}) 