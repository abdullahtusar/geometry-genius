//=============Parallelogram==========//
function parallelogramAreaCalculation(){
    const parallelogramBase = getInputElementById('parallelogram-base');
    const parallelogramHeight = getInputElementById('parallelogram-height');
    //parallelogram result calculate
    const parallelogramArea = parallelogramBase * parallelogramHeight;
    return parallelogramArea;
}


// add event handler on Button parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const parallelogramArea = parallelogramAreaCalculation();
    if(isNaN(parallelogramArea)){
        alert('Please insert valid number!!')
        return;
    }
    else if(parallelogramArea < 0){
        alert('Please insert Positive number!!')
        return;
    }
    const parallelogramResult = setInnerTextValueById('parallelogram-result', parallelogramArea);
}) 

//add event handler on button parallelogram convert 
document.getElementById('btn-parallelogram-convert').addEventListener('click', function(){
    const parallelogramArea = parallelogramAreaCalculation();
    if(isNaN(parallelogramArea)){
        alert('Please insert valid Number!!!');
        return;
    }
    const parallelogramConvertedResult = setInnerTextValueById('parallelogram-result', convertCmToMeter(parallelogramArea));
    cmTextToMeter('parallelogram-cm');
})

// add event handler on mouse enter bg color change
document.getElementById('parallelogram').addEventListener('mouseenter', function(){
    this.style.backgroundColor = generateRandomColor();
}) 