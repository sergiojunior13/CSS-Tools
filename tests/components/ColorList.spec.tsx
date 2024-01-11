import { render, screen } from "@testing-library/react";
import ColorList from "../../src/components/ColorList";
import userEvent from "@testing-library/user-event";

const handleRemove = jest.fn();

describe("ColorList", () => {
  const correctColors = ["#fff", "#1a023fa0", "#9f0123"];
  const wrongColors = ["000", "#", "#0", "#01", "#00g", "#0010000", "#123456789"];
  const duplicatedColors = ["#fff", "#fff"];

  function renderColorList(colors: string[], handleRemove?: VoidFunction) {
    render(<ColorList colors={colors} handleRemove={handleRemove || jest.fn} />);
  }

  it("should render correct colors", () => {
    renderColorList(correctColors);

    for (var correctColor of correctColors) {
      screen.getByText(correctColor);
    }
  });

  it("should not render wrong colors", () => {
    renderColorList(wrongColors);

    for (var wrongColor of wrongColors) {
      expect(screen.queryByText(wrongColor)).toBe(null);
    }
  });

  it("should not render duplicated colors", () => {
    renderColorList(duplicatedColors);

    screen.getByText(duplicatedColors[0]);
  });

  it("should delete color", async () => {
    const user = userEvent.setup();

    renderColorList(correctColors, handleRemove);

    const removeBtns = screen.getAllByTestId("delete-button");

    for (var removeBtn of removeBtns) {
      await user.click(removeBtn);
    }

    expect(handleRemove.mock.calls).toHaveLength(3);
  });
});
