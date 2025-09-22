// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(number) {
    return number % 2 === 0 ? true : false;
}

console.log(isEven(2));
console.log(isEven(3));
