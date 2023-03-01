//=============Ellipse==========//

//Ellipse calculation function
function ellipseAreaCalculation(){
    const ellipseAxisA = getInputElementById('ellipse-AxisA');
    const ellipseAxisB = getInputElementById('ellipse-AxisB');
    //Ellipse result calculate
    const ellipseArea = 3.1416 * ellipseAxisA * ellipseAxisB;
    return ellipseArea;
}

// add event handler on Button Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const ellipseArea = ellipseAreaCalculation();
    //validation for NaN
    if(isNaN(ellipseArea)){
        alert('Please insert valid number!!')
        return;
    }
    else if(ellipseArea < 0){
        alert('Please insert Positive number!!')
        return;
    }
    const ellipseResult = setInnerTextValueById('ellipse-result', ellipseArea);
}) 

//add event handler on button Ellipse convert 
document.getElementById('btn-ellipse-convert').addEventListener('click', function(){
    const ellipseArea = ellipseAreaCalculation();
    if(isNaN(ellipseArea)){
        alert('Please insert valid Number!!!');
        return;
    }
    const ellipseConvertedResult = setInnerTextValueById('ellipse-result', convertCmToMeter(ellipseArea));
    cmTextToMeter('ellipse-cm');
})

// add event handler on mouse enter bg color change
document.getElementById('ellipse').addEventListener('mouseenter', function(){
    this.style.backgroundColor = generateRandomColor();
}) 