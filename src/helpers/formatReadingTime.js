import getDeclensionOfNum from './getDeclensionOfNum';

export default function formatReadingTime(minutes) {
  const cupsAmount = Math.round(minutes / 3);
  const cups = '☕️'.repeat(cupsAmount || 1);

  return `${cups} ${minutes} ${getDeclensionOfNum(minutes, [
    'минута',
    'минуты',
    'минут',
  ])}`;
}
