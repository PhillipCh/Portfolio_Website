/**
 * Split 10 buttons - Done
 * Calculate button (+, -, *, /) - Done
 * Equals button - Done
 * TODO: Max digits => 15
 * TODO: Customising the buttons
 * TODO: More than 2 digits per calculation (If second digit populated and symbol pressed then second digit = first digit)
 */

 //string then convert to number
 let firstNumber = '';
 let secondNumber = '';
 //let numberArray = [...Array(10).keys()]; //Spread operator for [0,1,2,3,4,5,6,7,8,9]
 let numberArray = [0,3,2,1,6,5,4,9,8,7]
 let symbolArray = ["/", "*", "-", "+"];
 var firstSet = false; //If the first number is already defined
 var secondSet = false;
 var symbolClicked = false;
 var currentSymbol;
 var calculationString = ''; 

 //Set numbers
 function setNumpad() {
     for (let i = numberArray.length-1; i >= 0; i--) {
         document.getElementById("numpad").innerHTML += "<button onClick = " + 'clickNum(' + numberArray[i] + ')' + ">" + numberArray[i] + "</button>";
     }
     document.getElementById("numpad").innerHTML += "<button>.</button>";
     document.getElementById("numpad").innerHTML += "<button onClick = " + 'calculate()' + ">=</button>";
 }

 //Set calculator buttons
 function setSymbols() {
     for (let j = 0; j < symbolArray.length; j++) {
         document.getElementById("symbols").innerHTML += "<button onClick = " + 'clickSymbol(' + '"' + symbolArray[j] + '"' + ')' + ">" + symbolArray[j] + "</button>";
     }
 }

 //Set current symbol to current symbol
 function clickSymbol(symbol) {
     symbolClicked = true;
     currentSymbol = symbol;
     calculationString = String(firstNumber) + " " + currentSymbol + " ";
     document.getElementById("calc_string").innerHTML = calculationString;
 }

 

//Set number to number clicked
 function clickNum(number) {


     if (symbolClicked == false) {

         if (firstSet) {
             firstNumber = String(firstNumber) + String(number);
             document.getElementById("calc_output").innerHTML = String(firstNumber);

         } else {
             firstNumber = number;
             document.getElementById("calc_output").innerHTML = String(firstNumber);
             firstSet = true;
         }

     } else {

        //If second number already populated, then add on.

         if (secondSet) {
             secondNumber = String(secondNumber) + String(number);
             document.getElementById("calc_output").innerHTML = String(secondNumber);
         } else {
             secondNumber = number;
             document.getElementById("calc_output").innerHTML = String(secondNumber);
             secondSet = true;
         }
     }

 }


// document.getElementById("calculate").onclick = calculate;

function calculate(){

    let output = 0;

    if (firstSet && secondSet){

        switch (currentSymbol) {
            case '+':
                output = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                output = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                output = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                output = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }

        document.getElementById("calc_output").innerHTML = output;

        document.getElementById("calc_string").innerHTML = calculationString + secondNumber + " = ";

    }
    firstNumber = '';
    secondNumber = '';
    firstSet = false;
    secondSet = false;
    symbolClicked = false;
}

function cancelButton(){
    document.getElementById("calc_output").innerHTML = "0";
    document.getElementById("calc_string").innerHTML = "Calculation shown here";
    firstNumber = '';
    secondNumber = '';
    firstSet = false;
    secondSet = false;
    symbolClicked = false;
}



 setNumpad();
 setSymbols();

 //If calculate button was pressed then let first number = pressed number