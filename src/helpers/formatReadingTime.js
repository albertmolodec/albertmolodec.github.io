/**
 * Склоняет существительное, идущее за числом
 *
 * @example
 * declOfNum(0, ['банк', 'банка', 'банков']);
 * // returns "банков"
 * declOfNum(21, ['банк', 'банка', 'банков']);
 * // returns "банк"
 * declOfNum(22, ['банк', 'банка', 'банков']);
 * // returns "банка"
 *
 * @param {number} number число
 * @param {string[]} titles массив из трех форм слова
 * @returns {string} Склоненное существительное
 *
 */
function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

export default function formatReadingTime(minutes) {
  const cupsAmount = Math.round(minutes / 3);
  const cups = '☕️'.repeat(cupsAmount || 1);

  return `${cups} ${minutes} ${declOfNum(minutes, [
    'минута',
    'минуты',
    'минут',
  ])}`;
}
