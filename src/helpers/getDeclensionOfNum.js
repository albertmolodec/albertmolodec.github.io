/**
 * Склоняет существительное, идущее за числом
 *
 * @example
 * getDeclensionOfNum(0, ['банк', 'банка', 'банков']);
 * // returns "банков"
 * getDeclensionOfNum(21, ['банк', 'банка', 'банков']);
 * // returns "банк"
 * getDeclensionOfNum(22, ['банк', 'банка', 'банков']);
 * // returns "банка"
 *
 * @param {number} number число
 * @param {string[]} titles массив из трех форм слова
 * @returns {string} Склоненное существительное
 *
 */
export default function getDeclensionOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}
