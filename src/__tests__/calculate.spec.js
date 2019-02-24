import calculate, { OutputError, InputError } from "../calculate";

describe("calculate", () => {
  it("should perform addition", () => {
    const scenarios = [
      { string: "XXIV + XI", result: "XXXV" },
      { string: "MM + MCMXCIX", result: "MMMCMXCIX" },
      { string: "DC + LX + VI", result: "DCLXVI" },
      { string: "I + II + III", result: "VI" }
    ];

    scenarios.forEach(({ string, result }) =>
      expect(calculate(string)).toEqual(result)
    );
  });

  it("should perform subtraction", () => {
    const scenarios = [
      { string: "XXIV - XI", result: "XIII" },
      { string: "MM - MCMXCIX", result: "I" },
      { string: "DC - LX - VI", result: "DXXXIV" },
      { string: "I - II - III", result: "-IV" }
    ];

    scenarios.forEach(({ string, result }) =>
      expect(calculate(string)).toEqual(result)
    );
  });

  it("should perform division", () => {
    const scenarios = [
      { string: "X / II", result: "V" },
      { string: "MMM / M", result: "III" },
      { string: "DCLXVI / III / II", result: "CXI" }
    ];

    scenarios.forEach(({ string, result }) =>
      expect(calculate(string)).toEqual(result)
    );
  });

  it("should perform multiplication", () => {
    const scenarios = [
      { string: "X * II", result: "XX" },
      { string: "M * III", result: "MMM" },
      { string: "CXI * III * II", result: "DCLXVI" }
    ];

    scenarios.forEach(({ string, result }) =>
      expect(calculate(string)).toEqual(result)
    );
  });

  it("should perform order", () => {
    const scenarios = [
      { string: "X ^ II", result: "C" },
      { string: "XV ^ III", result: "MMMCCCLXXV" }
    ];

    scenarios.forEach(({ string, result }) =>
      expect(calculate(string)).toEqual(result)
    );
  });

  it("should support use of brackets", () => {
    const scenarios = [
      { string: "II * III + IV", result: "X" },
      { string: "II * (III + IV)", result: "XIV" },
      { string: "II * ((III + II) * IV)", result: "XL" }
    ];

    scenarios.forEach(({ string, result }) =>
      expect(calculate(string)).toEqual(result)
    );
  });

  it("throws OutputError when output is not a valid Roman Numeral", () => {
    expect(() => calculate("I - I")).toThrow(OutputError);
    expect(() => calculate("MMMCMXCIX + I")).toThrow(OutputError);
    expect(() => calculate("-MMMCMXCIX - II")).toThrow(OutputError);
    expect(() => calculate("I / II")).toThrow(OutputError);
  });

  it("throws InputError when input is not valid", () => {
    expect(() => calculate("(I + II(")).toThrow(InputError);
    expect(() => calculate("I + / + II")).toThrow(InputError);
    expect(() => calculate()).toThrow(InputError);
    expect(() => calculate(1 + 1)).toThrow(InputError);
  });
});
