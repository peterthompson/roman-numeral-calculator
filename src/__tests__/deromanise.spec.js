import deromanise from "../deromanise";

describe("deromanise", () => {
  it("should convert roman numerals to arabic numbers", () => {
    const scenarios = [
      { number: -3999, numeral: "-MMMCMXCIX" },
      { number: -1, numeral: "-I" },
      { number: 1, numeral: "I" },
      { number: 2, numeral: "II" },
      { number: 3, numeral: "III" },
      { number: 4, numeral: "IV" },
      { number: 5, numeral: "V" },
      { number: 6, numeral: "VI" },
      { number: 7, numeral: "VII" },
      { number: 8, numeral: "VIII" },
      { number: 9, numeral: "IX" },
      { number: 10, numeral: "X" },
      { number: 13, numeral: "XIII" },
      { number: 40, numeral: "XL" },
      { number: 42, numeral: "XLII" },
      { number: 50, numeral: "L" },
      { number: 90, numeral: "XC" },
      { number: 99, numeral: "XCIX" },
      { number: 100, numeral: "C" },
      { number: 400, numeral: "CD" },
      { number: 500, numeral: "D" },
      { number: 666, numeral: "DCLXVI" },
      { number: 900, numeral: "CM" },
      { number: 1000, numeral: "M" },
      { number: 2019, numeral: "MMXIX" },
      { number: 3999, numeral: "MMMCMXCIX" }
    ];

    scenarios.forEach(({ number, numeral }) =>
      expect(deromanise(numeral)).toEqual(number)
    );
  });
});
