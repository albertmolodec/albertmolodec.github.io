/* eslint-disable import/prefer-default-export */

export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 3);
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
}
