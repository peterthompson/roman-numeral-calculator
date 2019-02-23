import numerals from "./numerals";

function romanise(number) {
  if (number >= 4000 || number <= -4000 || number === 0) return;

  const isNegative = Math.sign(number) === -1;

  let result = isNegative ? "-" : "";
  let remaining = Math.abs(number);

  for (let numeral in numerals) {
    const arabic = numerals[numeral];

    while (remaining >= arabic) {
      result += numeral;
      remaining -= arabic;
    }
  }

  return result;
}

export default romanise;
