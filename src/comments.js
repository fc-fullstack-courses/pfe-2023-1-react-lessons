/**
 * @param {number} num1 
 * @param {number} num2 
 */
function sum(num1, num2) {
  return num1 + num2;
}

/**
 * Функція - калькулятор, приймає знак першим аргументом і два числа наступними аргументами
 * @param {string} operator рядок з одним з вказаних математичних операторів: +, -, *, /
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function calc(operator, num1, num2) {
  // Поганий коментар
  // тут ми прибираємо можливі пробіли у operator і світчом дивимося яку саме операцію виконати
  return doScaryStuff(operator, num1, num2);
}

function doScaryStuff(operator, num1, num2) {
  switch (operator.trim()) {
    case '+': {
      return num1 + num2;
    }
    case '-': {
      return num1 - num2;
    }
    case '*': {
      return num1 * num2;
    }
    case '/': {
      return num1 / num2;
    }
    default: {
      throw new RangeError('Invalid operator');
    }
  }
}

/**
 * Якийсь короткий опис функції
 * @param {string | number | null} value - опис параметра
 * @param {number[]} numbers - масив чисел
 * @param {Array<number>} numbers2 - масив чисел
 * @param {Object} options - об'єкт налаштувань
 * @param {boolean} options.isStrict - перемикач суворого режиму функції
 * @param {number} options.results
 * @param {Object[]} users
 * @param {string} users[].name
 * @param {...number} rest
 * @throws {Error} помилка яка може виникнути
 * @returns {number} те що функція повертає
 */
function test(value, numbers, numbers2, options, users, ...rest) {
  numbers.map((num) => {});

  console.log(value);
}
