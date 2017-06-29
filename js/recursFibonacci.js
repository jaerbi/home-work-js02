var userNum = Number(prompt('Введіть будьласка число РЕкурсія'));

function calcRecursFibonacci(userNum) {
    if (userNum < 2) {
        return userNum;
    }
    else {
        return calcRecursFibonacci(userNum - 1) + calcRecursFibonacci(userNum - 2);
    }
}

document.write(calcRecursFibonacci(userNum));






































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