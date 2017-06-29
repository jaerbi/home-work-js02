var userNum2 = Number(prompt('Введіть число для обрахунку числа Фібаначі Чиклом '));

function calcCycleFibonacci(userNum2) {
    var fib1 = 1;
    var fib2 = 1;
    for (var i = 2; i < userNum2; i++){
        var fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
    }
    return fib2;
}

document.write('<div class="calc_fib">Ви ввели число: ' + userNum2 + '<br>' + 'Число Фібоначчі = ' + '<b>' + calcCycleFibonacci(userNum2) + '</b></div>');