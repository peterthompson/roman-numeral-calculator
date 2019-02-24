import calculate from "../calculate";

describe("calculate", () => {
  it("should perform addition", () => {
    const scenarios = [{ string: "XXIV + XI", result: "XXXV" }];

    scenarios.forEach(({ string, result }) =>
      expect(calculate(string)).toEqual(result)
    );
  });
});
