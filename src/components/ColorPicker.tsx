import { HexAlphaColorPicker } from "react-colorful";

interface ColorPickerProps {
  color: string;
  handleColor: (hex: string) => void;
}

export default function ColorPicker({ color, handleColor }: ColorPickerProps) {
  return (
    <>
      <HexAlphaColorPicker color={color} onChange={handleColor} />
      <input
        type="text"
        value={color}
        onChange={e => handleColor(e.target.value)}
        className="outline-none text-center max-w-[50%] mt-1 rounded px-1"
        style={{
          backgroundColor: color,
          textShadow: "0 0 8px black",
        }}
      />
    </>
  );
}
