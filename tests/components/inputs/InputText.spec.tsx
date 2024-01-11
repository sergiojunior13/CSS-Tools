import { render, screen } from "@testing-library/react";
import InputText, {
  fixValuesIfTheyExtrapolateMaxOrMin,
} from "../../../src/components/inputs/InputText";

describe("InputText", () => {
  const testId = "input";
  const value = 30;
  const max = 50;
  const min = -50;
  const measureText = "hi";
  const valueGreaterThanMax = max + 10;
  const valueMinorThanMin = min - 10;

  function renderInputText() {
    render(
      <InputText value={value} max={max} min={min} measureText={measureText} />
    );
  }

  it("should render value and measureText correctly", () => {
    renderInputText();

    const inputElement = screen.getByTestId(testId);
    const measureTextElement = screen.getByText(measureText);

    expect(inputElement).toHaveValue(value.toString());
    expect(measureTextElement).toHaveTextContent(measureText);
  });

  it("shouldn't extrapolate max value", () => {
    render(
      <InputText
        value={valueGreaterThanMax}
        max={max}
        min={min}
        measureText={measureText}
      />
    );

    const inputElement = screen.getByTestId(testId);

    expect(inputElement).toHaveValue(max.toString());
  });

  it("shouldn't extrapolate min value", () => {
    render(
      <InputText
        value={valueMinorThanMin}
        max={max}
        min={min}
        measureText={measureText}
      />
    );

    const inputElement = screen.getByTestId(testId);

    expect(inputElement).toHaveValue(min.toString());
  });

  test("fixValuesIfTheyExtrapolateMaxOrMin function", () => {
    const correctValueByMax = fixValuesIfTheyExtrapolateMaxOrMin(
      valueGreaterThanMax,
      max,
      min
    );
    const correctValueByMin = fixValuesIfTheyExtrapolateMaxOrMin(
      valueMinorThanMin,
      max,
      min
    );

    expect(correctValueByMax).toBe(max);
    expect(correctValueByMin).toBe(min);
  });
});
