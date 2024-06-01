let numberArray = [];
let firstNumber = 0;
let secondNumber = 0;
let sum = 0;

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

function handleErrors(errorType="")
{
    switch(errorType)
    {
        case "divideByZero": alert("Cannot divde by Zero!", "OK!"); break;
        default: alert("Error!"); return;
    }
}

function test()
{
  firstNumber = Number(prompt("Num 1"))
  numberArray.push(firstNumber)
  secondNumber = Number(prompt("Num 2"))
  numberArray.push(secondNumber)
  console.log(numberArray)
  calculateDivision()
  console.log(sum)
}

test()