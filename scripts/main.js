let numberArray = [];
const NUMBER_ARRAY_LIMIT = 1; // Ensure we never go above 2 numbers in the array (0, 1), just like a real calculator.

let firstNumber = 0;
let secondNumber = 0;
let sum = 0;


function arrayLimitTest()
{
    if(numberArray.length > NUMBER_ARRAY_LIMIT)
        {
            console.log("Over Limit!")
            numberArray = [];
        }
    else
        {
            console.log("Not Over Limit!")
        }
}

function handleErrors(errorType="")
{
    switch(errorType)
    {
        case "divideByZero": alert("Cannot divde by Zero!", "OK!"); break;
        default: alert("Error!"); return;
    }
}

/* Calculation Functions BEGIN */
function calculateDivision()
{
    let result = 0
    if(firstNumber === 0 || secondNumber === 0)
        {
            handleErrors("divideByZero")
        }
    else
    {
        result = (firstNumber / secondNumber)
        return sum = result;
    }
    return sum = 0;
}

function calculateAddition()
{
    let result = (firstNumber + secondNumber)
    return sum = result;
}

function calculateSubtraction()
{
    let result = (firstNumber - secondNumber)
    return sum = result;
}


function calculateMultiplication()
{
    let result = (firstNumber * secondNumber)
    return sum = result;
}
/* Calculation Functions END */


function test()
{
  firstNumber = Number(prompt("Num 1"))
  numberArray.push(firstNumber)
  console.log(numberArray)
  arrayLimitTest()
  
  secondNumber = Number(prompt("Num 2"))
  numberArray.push(secondNumber)
  console.log(numberArray)
  arrayLimitTest()
  
  calculateDivision()
  console.log(sum)
}

test()