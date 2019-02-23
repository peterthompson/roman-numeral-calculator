function romanise(number) {
  if (number >= 4000 || number <= -4000 || number === 0) return;

  const isNegative = Math.sign(number) === -1;

  // numerals for additive and subtractive representation
  const numerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

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
