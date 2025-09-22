// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(num1, num2, num3) {
    if (num1 > num2) {
        if (num1 > num3){
            return num1;
        }else {
            return num3;
        }
    } else if (num2 > num3){
        return num2;
    } else {
        return num3;
    }
}
