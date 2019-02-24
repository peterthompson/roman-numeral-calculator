import romanise from "./romanise";
import deromanise from "./deromanise";

const pattern = {
  numerals: "(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})",
  symbols: "[+-/]"
};

function isNumeral(string) {
  const regex = new RegExp(pattern.numerals);
  return regex.test(string);
}

function calculate(string) {
  const regex = new RegExp(`${pattern.numerals}|${pattern.symbols}`, "g");

  // TODO: more validation of sanitised
  const sanitised = string
    .match(regex)
    .map(part => (isNumeral(part) ? deromanise(part) : part))
    .join(" ");

  // TODO: some validation of arabic
  const arabic = new Function(`return ${sanitised}`)();

  return romanise(arabic);
}

export default calculate;
