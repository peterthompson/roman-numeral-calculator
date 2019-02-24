import prompt from "prompt";
import calculate from "./calculate";

const schema = {
  name: "input",
  description: "Enter arithmetic expression in Roman Numerals",
  required: true
};

prompt.start();

prompt.get(schema, (err, { input }) => {
  console.log(calculate(input));
});
