/**
 * Split 10 buttons
 * Calculate button (+, -, *, /)
 * Equals button
 */

 //string then convert to number
 let firstNumber = '';
 let secondNumber = '';
 let numberArray = [...Array(10).keys()]; //Spread operator for [0,1,2,3,4,5,6,7,8,9]
 let symbolArray = ["+", "-", "*", "/"];
 var firstSet = false; //If the first number is already defined
 var secondSet = false;
 var symbolClicked = false;
 var currentSymbol;
 var calculationString = ''; 

 //Set numbers
 function setNumpad() {
     for (let i = 0; i < numberArray.length; i++) {
         document.getElementById("numpad").innerHTML += "<button onClick = " + 'clickNum(' + numberArray[i] + ')' + ">" + numberArray[i] + "</button>";
     }
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


document.getElementById("calculate").onclick = calculate;

function calculate(){
    if (firstSet && secondSet){

        switch (currentSymbol) {
            case '+':
                document.getElementById("calc_output").innerHTML = firstNumber + secondNumber;
                break;
            case '-':
                document.getElementById("calc_output").innerHTML = firstNumber - secondNumber;
                break;
            case '*':
                document.getElementById("calc_output").innerHTML = firstNumber * secondNumber;
                break;
            case '/':
                document.getElementById("calc_output").innerHTML = firstNumber / secondNumber;
                break;
        }

        document.getElementById("calc_string").innerHTML = calculationString + secondNumber + " = ";

    }
    firstNumber = '';
    secondNumber = '';
    firstSet = false;
    secondSet = false;
    symbolClicked = false;
}


 setNumpad();
 setSymbols();

 //If calculate button was pressed then let first number = pressed number