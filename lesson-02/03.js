/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 95 // тестовое значение, можно изменять
let grade = 'A';
// your code

if (score <= 100 && score >= 90){
    grade = 'A';
} else if (score <= 89 && score >= 80){
    grade = 'B';
} else if (score <= 79 && score >= 70){
    grade = 'C';
} else if (score <= 69 && score >= 50){
    grade = 'D';
} else {
    grade = 'F';
}
// console.log(grade);
