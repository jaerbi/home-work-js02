
var userNum2 = Number(prompt('Введіть будьласка число Цикл'));

/*function calcRecursFibonacci(userNum) {
    if (userNum < 2) {
        return userNum;
    }
    else {
        return calcRecursFibonacci(userNum - 1) + calcRecursFibonacci(userNum - 2);
    }
}

document.write(calcRecursFibonacci(userNum2));

*/
 function calcCycleFibonacci(userNum2) {
     var a = 1;
     var b = 1;
     for (var i = 2; i < userNum2; i++){
         var c = a + b;
         a = b;
         b = c;
     }
     return b;
 }


document.write(calcCycleFibonacci(userNum2));





















/*var userNumber2 = Number(prompt('Введіть число для обрахунку циклом числа Фібаначі'));

function calcCycleFibonacci(userNumber2) {
    var fib1 = 1;
    var fib2 = 1;
    for (var i = 2; i < userNumber2; i++){
        var fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
    }
    return fib2;
}

document.write(calcCycleFibonacci(userNumber2));*/