import romanise from "./romanise";
import deromanise from "./deromanise";

export class InputError extends Error {}
export class OutputError extends Error {}

const pattern = {
  numerals: "(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})",
  symbols: "[+-/*^()]"
};

function isNumeral(string) {
  const regex = new RegExp(pattern.numerals);
  return regex.test(string);
}

function isOrder(string) {
  return string === "^";
}

function calculate(string) {
  if (!string || typeof string !== "string") {
    throw new InputError();
  }

  const regex = new RegExp(`${pattern.numerals}|${pattern.symbols}`, "g");

  const parts = string
    .match(regex)
    .map(part => (isNumeral(part) ? deromanise(part) : part));

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

  let arabic;

  try {
    arabic = new Function(`return ${sanitised.join(" ")}`)();
  } catch (err) {
    throw new InputError();
  }

  if (!Number.isInteger(arabic)) {
    throw new OutputError();
  }

  const result = romanise(arabic);

  if (typeof result === "undefined") {
    throw new OutputError();
  }

  return result;
}

export default calculate;
