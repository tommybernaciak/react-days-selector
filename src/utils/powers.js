/**
 * Helper method to split given number into powers of 2
 * @param number number to split
 * @returns array of powers of two
 */
export function getPowers(number) {
  if (isNaN(number) || number < 0) return [];
  const powers = [];
  let power = 0;
  while (number !== 0) {
    if ((number & 1) !== 0) {
      powers.push(1 << power);
    }
    ++power;
    number >>= 1;
  }
  return powers;
}
