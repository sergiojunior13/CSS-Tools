import { render, screen } from "@testing-library/react";
import InputRadioBox from "../../../src/components/inputs/InputRadio";

describe("Radio Box Input", () => {
  const values = ["hello", "world"];
  const title = "123";

  function renderRadioBox() {
    render(
      <InputRadioBox
        values={values}
        defaultValue={values[0]}
        handleChange={() => {}}
        title={title}
      />
    );
  }

  it("should render radios inputs", () => {
    renderRadioBox();

    const radiosQuantity = screen.getAllByRole("radio").length;

    expect(radiosQuantity).toBe(values.length);

    for (let value of values) {
      const labelElement = screen.getByLabelText(value);

      expect(labelElement).toBeInTheDocument();
    }
  });

  it("should render radio group title", () => {
    renderRadioBox();

    screen.getByLabelText(title);
  });
});
