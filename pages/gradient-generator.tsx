import ColorText from "../src/components/ColorText";
import CssCode from "../src/components/CssCode";
import AxisBox from "../src/components/AxisBox";
import InputRangeBox from "../src/components/Inputs/InputRange";
import InputRadioBox from "../src/components/Inputs/InputRadio";

import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";
import ColorPicker from "../src/components/ColorPicker";
import ColorList from "../src/components/ColorList";
import { NextSeo } from "next-seo";

export default function Gradient() {
  const [color, setColor] = useState("#0539f5ff");
  const [colors, setColors] = useState<string[]>(["#0539f5ff", "#0079f5ff"]);
  const [type, setType] = useState("linear");
  const [shape, setShape] = useState("circle");
  const [angle, setAngle] = useState(90);
  const [axis, setAxis] = useState({ x: 50, y: 50 });
  const [cssCode, setCssCode] = useState("");

  const radioTypes = ["linear", "radial", "conic"];
  const shapes = ["circle", "ellipse"];

  function handleColor(hex: string) {
    setColor(hex);
  }

  function handleAddColor() {
    if (colors.includes(color)) {
      alert("This color already exists!");
      return;
    }
    setColors([color, ...colors]);
  }

  function handleTypeChange(value: string) {
    setType(value);
  }

  function handleShapeChange(value: string) {
    setShape(value);
  }

  function handleAngleChange(e: ChangeEvent<HTMLInputElement>) {
    setAngle(+e.target.value);
  }

  function handleAxis({ x, y }: { x: number; y: number }) {
    x = Math.floor(x / 2);
    y = Math.floor(y / 2);
    setAxis({ x, y });
  }

  function handleRemove(color: string) {
    setColors(colors.filter(crrColor => crrColor !== color));
  }

  useEffect(() => {
    switch (type) {
      case "linear":
        setCssCode(`${type}-gradient(${angle}deg, ${colors})`);
        break;
      case "radial":
        setCssCode(
          `${type}-gradient(${shape} at ${axis.x}%  ${axis.y}%, ${colors})`
        );
        break;
      case "conic":
        setCssCode(
          `${type}-gradient(from ${angle}deg at ${axis.x}%  ${axis.y}%, ${colors})`
        );
        break;
    }
  }, [type, colors, shape, axis, angle]);

  return (
    <main className="flex flex-col items-center justify-center my-5 text-white p-4">
      <NextSeo
        title="Gradient Generator | CSS Tools"
        description="Quickly generate CSS GRADIENTS with this generator. IMPROVE your website design with this FREE and EASY tool."
      />
      <ColorText className="mb-5" Variant="h2">
        Gradient Generator
      </ColorText>
      <div className="w-full max-w-screen-sm">
        <div className="flex justify-center flex-wrap gap-3">
          <div className="rounded-lg overflow-hidden shadow-neomorphism z-10">
            <div className="flex flex-col items-center p-5 bg-zinc-900 text-lg uppercase">
              <ColorPicker color={color} handleColor={handleColor} />{" "}
            </div>
            <button
              className="bg-blue-700 w-full py-1 hover:bg-blue-800 rounded-b-lg"
              onClick={handleAddColor}
            >
              Add Color
            </button>
          </div>
          <ColorList colors={colors} handleRemove={handleRemove} />
        </div>

        <form
          className={`flex flex-col items-center sm:grid sm:grid-cols-2 mt-3 gap-3`}
        >
          <div className="flex w-full align-top flex-col gap-3">
            <InputRadioBox
              title="Gradient Type"
              values={radioTypes}
              handleChange={handleTypeChange}
              defaultValue="linear"
            />
            {type != "radial" && (
              <InputRangeBox
                name="Gradient Angle"
                valuetext={{ value: angle, text: "°" }}
                max="360"
                min="0"
                handleChange={handleAngleChange}
                handleChangeValue={setAngle}
              />
            )}
            {type == "radial" && (
              <InputRadioBox
                title="Gradient Shape"
                values={shapes}
                handleChange={handleShapeChange}
                defaultValue="circle"
              />
            )}
          </div>
          {type !== "linear" && (
            <AxisBox
              axis={axis}
              handleAxis={handleAxis}
              convertAxis={convertAxis}
              min={0}
              max={100}
            />
          )}
        </form>
        <div className="mt-3 w-full sticky sm:relative bottom-0 z-[100]">
          <CssCode cssCode={"background-image: " + cssCode + ";"} />
          <div
            className="h-32 flex items-center justify-center rounded-b-lg"
            style={{ backgroundImage: cssCode }}
          ></div>
        </div>
      </div>
    </main>
  );
}

function convertAxis(axis: number) {
  return axis * 2;
}

export function Label({
  children,
  className,
}: HTMLAttributes<HTMLHeadingElement>) {
  return <label className={"text-gray-400 " + className}>{children}</label>;
}
