import { NextSeo } from "next-seo";
import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import ColorText from "../src/components/ColorText";
import CssCode from "../src/components/CssCode";

export default function BorderRadius() {
  const [radius, setRadius] = useState({
    topLeft: 0,
    topRight: 0,
    bottomRight: 0,
    bottomLeft: 0,
  });

  type currentPositionFocusedProps =
    | "topLeft"
    | "topRight"
    | "bottomRight"
    | "bottomLeft";

  const [currentPositionFocused, setCurrentPositionFocused] =
    useState<currentPositionFocusedProps | null>(null);

  const [code, setCode] = useState("0");

  useEffect(() => {
    let code = Object.values(radius).join("px ") + "px";
    if (Object.values(radius).every(number => number == radius.topLeft))
      code = `${radius.topLeft}px`;
    code = code.replaceAll(/(?<!\d)0px/g, "0");

    setCode(code);
  }, [radius]);

  function handleButtonEnter() {
    if (currentPositionFocused === null) return;
    const valueToFill = radius[currentPositionFocused];

    setRadius({
      topLeft: valueToFill,
      topRight: valueToFill,
      bottomRight: valueToFill,
      bottomLeft: valueToFill,
    });
  }

  return (
    <main className="flex flex-col gap-5 p-4 items-center justify-center text-center my-5 text-white max-w-xl m-auto">
      <NextSeo
        title="Border Radius Generator | CSS Tools"
        description="Quickly generate CSS BORDER-RADIUS with this generator. IMPROVE your website design with this FREE and EASY tool."
      />
      <ColorText className="mb-3" Variant="h1">
        Border Radius Generator
      </ColorText>
      <p>
        Press{" "}
        <ColorText Variant="span" className="font-bold">
          Enter
        </ColorText>{" "}
        to fill all inputs
      </p>
      {isMobile && (
        <button
          className="shadow-neomorphism bg-orange-500 rounded-lg p-4 py-3 mb-2 w-full max-w-[150px] active:bg-orange-600 active:scale-90 transition-all text-lg font-semibold"
          onClick={handleButtonEnter}
        >
          Enter
        </button>
      )}
      <div
        className="bg-zinc-700 shadow-neomorphism p-4 w-full aspect-[2/1] grid grid-cols-2"
        style={{ borderRadius: Object.values(radius).join("px ") + "px" }}
      >
        <Input
          object={radius}
          setFunction={setRadius}
          position="topLeft"
          setCurrentPositionFocused={setCurrentPositionFocused}
        />
        <Input
          object={radius}
          setFunction={setRadius}
          position="topRight"
          setCurrentPositionFocused={setCurrentPositionFocused}
          className="justify-self-end"
        />
        <Input
          object={radius}
          setFunction={setRadius}
          position="bottomLeft"
          setCurrentPositionFocused={setCurrentPositionFocused}
          className="self-end"
        />
        <Input
          object={radius}
          setFunction={setRadius}
          position="bottomRight"
          setCurrentPositionFocused={setCurrentPositionFocused}
          className="self-end justify-self-end"
        />
      </div>
      <CssCode
        cssCode={`border-radius: ${code};`}
        className="w-full rounded-lg"
        truncate={false}
      />
    </main>
  );
}

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  position: "topLeft" | "topRight" | "bottomRight" | "bottomLeft";
  setCurrentPositionFocused: (value: InputProps["position"]) => void;
  object: {
    topLeft: number;
    topRight: number;
    bottomRight: number;
    bottomLeft: number;
  };
  setFunction: (values: InputProps["object"]) => void;
  className?: string;
}

function Input({
  position,
  setCurrentPositionFocused,
  object,
  setFunction,
  className,
  ...rest
}: InputProps) {
  const max = 999;
  const min = 0;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);

    if (value > max) return;
    if (value < min) return;
    setFunction({ ...object, [position]: value });
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key != "Enter") return;

    setFunction({
      topLeft: Number(e.currentTarget.value),
      topRight: Number(e.currentTarget.value),
      bottomRight: Number(e.currentTarget.value),
      bottomLeft: Number(e.currentTarget.value),
    });
  }

  return (
    <input
      type="number"
      value={object[position]}
      onKeyDown={handleKeyPress}
      onChange={handleChange}
      onFocus={() => setCurrentPositionFocused(position)}
      className={
        "w-12 h-5 bg-zinc-900 shadow-md outline-0 p-2 py-3 text-center rounded-lg " +
        className
      }
      {...rest}
    />
  );
}
