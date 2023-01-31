'use strict';

// Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.
// Пример:
// getTimeFromMinutes(150) => "Это 2 часа и 30 минут"
// getTimeFromMinutes(50) => "Это 0 часов и 50 минут"
// getTimeFromMinutes(0) => "Это 0 часов и 0 минут"
// getTimeFromMinutes(-150) => "Ошибка, проверьте данные"

// 0 часов 1 час 2 часа 3 часа 4 часа 5 часов 6 часов 7 часов 8 часов 9 часов 10 часов

// function getTimeFromMinutes (num){
//   if(typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)){
//     return 'Ошибка, проверьте данные';
//   }
//   const hour = Math.floor(num / 60);
//   const minutes = (num % 60);

//   let hourAns = '';
//   if (hour === 2 || hour === 3 || hour === 4){
//     hourAns ="часа";
//   }else if(hour === 1){
//     hourAns = "час";
//   }else {
//     hourAns = "часов";
//   }
//   return `Это ${hour} ${hourAns} и ${minutes} минут`
// }

// getTimeFromMinutes(600);


// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0


// function findMaxNumber(numOne, numTwo, numThree, numFour) {
//   if(typeof(numOne) !== 'number' || typeof(numTwo) !== 'number' || typeof(numThree) !== 'number' ||typeof(numFour) !== 'number'){
//     return 0;
//   }else{
//     return Math.max(numOne, numTwo, numThree, numFour)
//   }
// }
// console.log(findMaxNumber(3, 4, 6.2, 6));


function fib(num) {
  if(typeof(num)!== 'number' || num <= 0 || !Number.isInteger(num)){
    return '';
  }

  let result = '';
    let first = 0;
    let second = 1

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
        result += `${first}`;
        // Без пробела в конце
    } else {
        result += `${first} `;
    }

    let third = first + second;
    first = second;
    second = third;

}
  

}
fib(7);

