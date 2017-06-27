var userNumber2 = Number(prompt('Введіть число для обрахунку циклом числа Фібаначі'));

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

document.write(calcCycleFibonacci(userNumber2));