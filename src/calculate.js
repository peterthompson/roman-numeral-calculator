import romanise from "./romanise";
import deromanise from "./deromanise";

const pattern = {
  numerals: "(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})",
  symbols: "[+-/*^]"
};

function isNumeral(string) {
  const regex = new RegExp(pattern.numerals);
  return regex.test(string);
}

function isOrder(string) {
  return string === "^";
}

function calculate(string) {
  const regex = new RegExp(`${pattern.numerals}|${pattern.symbols}`, "g");

  const parts = string
    .match(regex)
    .map(part => (isNumeral(part) ? deromanise(part) : part));

  // TODO: more validation of sanitised
  const sanitised = [];

  while (parts.length) {
    const part = parts.shift();

    if (isOrder(part)) {
      const prev = sanitised.pop();
      const next = parts.shift();
      sanitised.push(`Math.pow(${prev},${next})`);
    } else {
      sanitised.push(part);
    }
  }

  // TODO: some validation of arabic
  const arabic = new Function(`return ${sanitised.join(" ")}`)();

  return romanise(arabic);
}

export default calculate;
