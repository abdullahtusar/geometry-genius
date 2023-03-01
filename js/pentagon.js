//=============Pentagon==========//

//Pentagon calculation function
function pentagonAreaCalculation(){
    const pentagonPerimeter = getInputElementById('pentagon-perimeter');
    const pentagonBase = getInputElementById('pentagon-base');
    //Pentagon result calculate
    const pentagonArea = 0.5 * pentagonPerimeter * pentagonBase;
    return pentagonArea;
}

// add event handler on Button Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const pentagonArea = pentagonAreaCalculation();
    //validation for NaN
    if(isNaN(pentagonArea)){
        alert('Please insert valid number!!')
        return;
    }
    else if(pentagonArea < 0){
        alert('Please insert Positive number!!')
        return;
    }
    const pentagonResult = setInnerTextValueById('pentagon-result', pentagonArea);
}) 

//add event handler on button Pentagon convert 
document.getElementById('btn-pentagon-convert').addEventListener('click', function(){
    const pentagonArea = pentagonAreaCalculation();
    if(isNaN(pentagonArea)){
        alert('Please insert valid Number!!!');
        return;
    }
    const pentagonConvertedResult = setInnerTextValueById('pentagon-result', convertCmToMeter(pentagonArea));
    cmTextToMeter('pentagon-cm');
})

// add event handler on mouse enter bg color change
document.getElementById('pentagon').addEventListener('mouseenter', function(){
    this.style.backgroundColor = generateRandomColor();
}) 