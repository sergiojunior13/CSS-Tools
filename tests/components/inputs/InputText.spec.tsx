import { render, screen } from "@testing-library/react";
import InputText from "../../../src/components/inputs/InputText";
import userEvent from "@testing-library/user-event";

describe("InputText", () => {
  const value = 30;
  const max = 50;
  const min = -50;
  const measureText = "hi";
  const valueGreaterThanMax = max + 10;
  const valueMinorThanMin = min - 10;

  function renderInputText() {
    render(<InputText value={value} max={max} min={min} text={measureText} />);
  }

  it("should render value and measureText correctly", () => {
    renderInputText();

    const inputElement = screen.getByRole("textbox");
    const measureTextElement = screen.getByText(measureText);

    expect(inputElement).toHaveValue(value.toString());
    expect(measureTextElement).toHaveTextContent(measureText);
  });

  it("shouldn't extrapolate max value", async () => {
    const user = userEvent.setup();
    const handleValue = jest.fn();

    render(
      <InputText value={""} max={max} min={min} text={measureText} handleValue={handleValue} />
    );

    const inputElement = screen.getByRole("textbox");
    await user.dblClick(inputElement);
    await user.paste(valueGreaterThanMax.toString());

    const inputValue = handleValue.mock.calls[0][0];
    expect(inputValue).toBe(max);
  });

  it("shouldn't extrapolate min value", async () => {
    const user = userEvent.setup();
    const handleValue = jest.fn();

    render(
      <InputText value={""} max={max} min={min} text={measureText} handleValue={handleValue} />
    );

    const inputElement = screen.getByRole("textbox");
    await user.dblClick(inputElement);
    await user.paste(valueMinorThanMin.toString());

    const inputValue = handleValue.mock.calls[0][0];

    expect(inputValue).toBe(min);
  });
});
