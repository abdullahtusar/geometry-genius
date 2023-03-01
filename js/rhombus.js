//=============Rhombus==========//

//Rhombus calculation function
function rhombusAreaCalculation(){
    const rhombusDiagonal1 = getInputElementById('rhombus-diagonal1');
    const rhombusDiagonal2 = getInputElementById('rhombus-diagonal2');
    //Rhombus result calculate
    const rhombusArea = 0.5 * rhombusDiagonal1 * rhombusDiagonal2;
    return rhombusArea;
}

// add event handler on Button Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const rhombusArea = rhombusAreaCalculation();
    //validation for NaN
    if(isNaN(rhombusArea)){
        alert('Please insert valid number!!')
        return;
    }
    else if(rhombusArea < 0){
        alert('Please insert Positive number!!')
        return;
    }
    const rhombusResult = setInnerTextValueById('rhombus-result', rhombusArea);
}) 

//add event handler on button rhombus convert 
document.getElementById('btn-rhombus-convert').addEventListener('click', function(){
    const rhombusArea = rhombusAreaCalculation();
    if(isNaN(rhombusArea)){
        alert('Please insert valid Number!!!');
        return;
    }
    const rhombusConvertedResult = setInnerTextValueById('rhombus-result', convertCmToMeter(rhombusArea));
    cmTextToMeter('rhombus-cm');
})

// add event handler on mouse enter bg color change
document.getElementById('rhombus').addEventListener('mouseenter', function(){
    this.style.backgroundColor = generateRandomColor();
}) 