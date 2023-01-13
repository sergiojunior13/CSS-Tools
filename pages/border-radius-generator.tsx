import { ChangeEvent, HTMLAttributes, useEffect, useState } from "react";
import ColorText from "../src/components/ColorText";
import CssCode from "../src/components/CssCode";

export default function BorderRadius() {
  const [radius, setRadius] = useState({
    topLeft: 0,
    topRight: 0,
    bottomRight: 0,
    bottomLeft: 0,
  });

  const [code, setCode] = useState("0");

  useEffect(() => {
    let code = Object.values(radius).join("px ") + "px";
    if (Object.values(radius).every(number => number == radius.topLeft))
      code = `${radius.topLeft}px`;
    code = code.replaceAll(/(?<!\d)0px/g, "0");

    setCode(code);
  }, [radius]);

  return (
    <main className="flex flex-col gap-5 p-4 items-center justify-center text-center my-5 text-white max-w-xl m-auto">
      <ColorText className="mb-3" Variant="h2">
        Border Radius Generator
      </ColorText>
      <p>
        Press{" "}
        <ColorText Variant="span" className="font-bold">
          Enter
        </ColorText>{" "}
        to fill all inputs
      </p>
      <div
        className="bg-zinc-700 shadow-neomorphism p-4 w-full aspect-[2/1] grid grid-cols-2"
        style={{ borderRadius: Object.values(radius).join("px ") + "px" }}
      >
        <Input object={radius} setFunction={setRadius} position="topLeft" />
        <Input
          object={radius}
          setFunction={setRadius}
          position="topRight"
          className="justify-self-end"
        />
        <Input
          object={radius}
          setFunction={setRadius}
          position="bottomLeft"
          className="self-end"
        />
        <Input
          object={radius}
          setFunction={setRadius}
          position="bottomRight"
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
      className={
        "w-12 h-5 bg-zinc-900 shadow-md outline-0 p-2 py-3 text-center rounded-lg " +
        className
      }
      {...rest}
    />
  );
}
