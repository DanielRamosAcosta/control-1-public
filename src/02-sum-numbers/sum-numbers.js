/**
 * Suma todos los números desde 1 hasta n.
 * @param {number} number El número hasta el que se quiere sumar
 * @returns {number} El resultado de la suma
 * @example
 * // 1 + 2 + 3 + 4 + 5 = 15
 * sumNumbers(5) // 15
 */
const sumNumbers = number => (number  <= 1) ? number : sumNumbers(number - 1) + number;


module.exports = {
  sumNumbers
}
