import {
  defaultConvertAxis,
  generateConvertedAxesObject,
} from "../../src/components/AxisBox";

describe("AxisBox", () => {
  const axis = {
    x: 15,
    y: 15,
  };

  function convertAxis(axis: number) {
    return axis * 2;
  }

  it("should generateConvertedAxesObject function return correctly", () => {
    const generatedAxis = generateConvertedAxesObject(axis, convertAxis);

    const expectedAxis = { x: 30, y: 30 };

    expect(generatedAxis).toEqual(expectedAxis);
  });

  it("should defaultConvertAxis function return correctly", () => {
    const convertedAxis = defaultConvertAxis(10);

    const expectedAxis = 120;

    expect(convertedAxis).toEqual(expectedAxis);
  });
});
