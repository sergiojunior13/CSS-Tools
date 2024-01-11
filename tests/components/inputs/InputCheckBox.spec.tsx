import { render, screen } from "@testing-library/react";
import InputCheckBox from "../../../src/components/inputs/InputCheckBox";

describe("Check Box Input", () => {
  const label = "Check Button";

  it("should render name", () => {
    render(<InputCheckBox label={label} handleChange={jest.fn} />);

    const labelElement = screen.getByLabelText(label);

    expect(labelElement).toBeInTheDocument();
  });
});
