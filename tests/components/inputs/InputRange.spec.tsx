import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputRangeBox from "../../../src/components/inputs/InputRange";

describe("Range Input", () => {
  const name = "range input";
  const value = 20;
  const maxValue = 20;
  const minValue = 20;
  const testId = "valueInput";
  const measureText = "measure";

  function renderInputRange() {
    render(
      <InputRangeBox
        name={name}
        handleChange={jest.fn}
        value={value}
        handleChangeValue={jest.fn}
        max={maxValue}
        min={minValue}
        measureText="measure"
      />
    );
  }

  it("should render range input name", () => {
    renderInputRange();
    screen.getByLabelText(name);
  });

  it("should render input that changes the value", () => {
    renderInputRange();

    screen.getByTestId(testId);
  });

  it("should render measure text", () => {
    renderInputRange();

    screen.getByText(measureText);
  });

  it("should respect the maximum and minimum value", async () => {
    const valueAboveMaximum = "50";
    const valueBelowMinimum = "-10";

    renderInputRange();

    const valueInput = screen.getByTestId(testId);

    await userEvent.type(valueInput, valueAboveMaximum);
    expect(valueInput).toHaveValue(maxValue);

    await userEvent.type(valueInput, valueBelowMinimum);
    expect(valueInput).toHaveValue(minValue);
  });

  it("shouldn't have letters in valueInput", async () => {
    renderInputRange();

    const valueInput = screen.getByTestId(testId);

    expect(valueInput).toHaveProperty("type", "number");
  });
});
