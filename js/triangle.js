//=============Triangle==========//

//Triangle calculation function
function triangleAreaCalculation(){
    const triangleBase = getInputElementById('triangle-base');
    const triangleHeight = getInputElementById('triangle-height');
    //triangle result calculate
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    return triangleArea;
}

// add event handler on Button Triangle
document.getElementById('btn-triangle').addEventListener('click', function(){
    const triangleArea = triangleAreaCalculation();
    //validation for NaN
    if(isNaN(triangleArea)){
        alert('Please insert valid number!!')
        return;
    }
    else if(triangleArea < 0){
        alert('Please insert Positive number!!')
        return;
    }
    const triangleResult = setInnerTextValueById('triangle-result', triangleArea);
}) 

//add event handler on button triangle convert 
document.getElementById('btn-triangle-convert').addEventListener('click', function(){
    const triangleArea = triangleAreaCalculation();
    if(isNaN(triangleArea)){
        alert('Please insert valid Number!!!');
        return;
    }
    const triangleConvertedResult = setInnerTextValueById('triangle-result', convertCmToMeter(triangleArea));
    cmTextToMeter('triangle-cm');
})

// add event handler on mouse enter bg color change
document.getElementById('triangle').addEventListener('mouseenter', function(){
    this.style.backgroundColor = generateRandomColor();
}) 