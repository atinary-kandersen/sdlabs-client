const words = [
  'Lorem',
  'ipsum',
  'dolor',
  'sit',
  'amet',
  'consectetur',
  'adipiscing',
  'elit',
  'sed',
  'do',
  'eiusmod',
  'tempor',
  'incididunt',
  'ut',
  'labore',
  'et',
  'dolore',
  'magna',
  'aliqua'
];

export default function generateLoremIpsum(length: number): string {
  const randomWords = Array.from({ length }, () => words[Math.floor(Math.random() * words.length)]);
  return randomWords.join(' ');
}
