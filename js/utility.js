//========Common Function======///

//Get element input field value by Id
function getInputElementById(elementId){
    const inputField = document.getElementById(elementId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    // if(inputField.value < 0 || inputField.value == ''){
    //     alert ('Please insert valid number!!!');
    //     return;
    // }
    return inputValue;
}

//Set inner text result value by Id
function setInnerTextValueById(elementId, value){
    const getElement = document.getElementById(elementId);
    const fixValue = value.toFixed(2);
    getElement.innerText = fixValue;
}

//Convert cm square to meter square
function convertCmToMeter(result){
    const convertedMeter = result * 0.0001;
    return convertedMeter;
}

//Set cm innerText to m
function cmTextToMeter(elementId){
    const getCm = document.getElementById(elementId);
    getCm.innerText = ' m';
}

//random color generate function
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`;
}
