var userNum1 = Number(prompt('Введіть число для обчислення способом Рекурсія'));

function calcRecursFibonacci(userNum1) {
    if (userNum1 < 2) {
        return userNum1;
    }
    else {
        return calcRecursFibonacci(userNum1 - 1) + calcRecursFibonacci(userNum1 - 2);
    }
}

document.write('<div class="calc_fib">Ви ввели число: ' + userNum1 + '<br>' + 'Число Фібоначчі = ' + '<b>' + calcRecursFibonacci(userNum1) + '</b></div>');





































/*var userNumber = Number(prompt('Введіть число для Рекурсивного обрахунку Фібаначі'));

function calcRecursFibonacci(userNumber) {
    if (userNumber < 2) {
        return userNumber;
    }
    else {
        return ( calcRecursFibonacci(userNumber - 1) + calcRecursFibonacci(userNumber - 2) );
    }
}

document.write(calcRecursFibonacci(userNumber));*/