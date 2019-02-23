import numerals from "./numerals";

function deromanise(string) {
  let result = 0;
  let remaining = string.split("").reverse();
  const isNegative = remaining[remaining.length - 1] === "-";

  if (isNegative) remaining.pop();

  while (remaining.length) {
    const numeral = remaining.pop();
    const nextNumeral = remaining[remaining.length - 1];
    const arabic = numerals[numeral];
    const isSubtractive = arabic < numerals[nextNumeral];

    result = isSubtractive ? result - arabic : result + arabic;
  }

  return isNegative ? -result : result;
}

export default deromanise;
