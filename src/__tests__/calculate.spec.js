import calculate from "../calculate";

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
});
