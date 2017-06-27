var userNumber = Number(prompt('Введіть число для Рекурсивного обрахунку Фібаначі'));

function calcRecursFibonacci(userNumber) {
    if (userNumber < 2) {
        return userNumber;
    }
    else {
        return ( calcRecursFibonacci(userNumber - 1) + calcRecursFibonacci(userNumber - 2) );
    }
}

document.write(calcRecursFibonacci(userNumber));