import { NextSeo } from "next-seo";
import { ChangeEvent, useEffect, useState } from "react";
import AxisBox from "../src/components/AxisBox";
import ColorPicker from "../src/components/ColorPicker";
import ColorText from "../src/components/ColorText";
import CssCode from "../src/components/CssCode";
import InputCheckBox from "../src/components/Inputs/InputCheckBox";
import InputRangeBox from "../src/components/Inputs/InputRange";

export default function BoxShadow() {
  const [color, setColor] = useState("#0539f5ff");
  const [axis, setAxis] = useState({ x: 0, y: 0 });
  const [spread, setSpread] = useState(0);
  const [blur, setBlur] = useState(0);
  const [inset, setInset] = useState(false);
  const [code, setCode] = useState("0px 0px 15px 0px #000000ff");

  function handleAxis({ x, y }: { x: number; y: number }) {
    x = Math.floor(x / 2 - 50);
    y = Math.floor(y / 2 - 50);
    setAxis({ x, y });
  }

  function handleBlur(e: ChangeEvent<HTMLInputElement>) {
    setBlur(+e.target.value);
  }

  function handleSpread(e: ChangeEvent<HTMLInputElement>) {
    setSpread(+e.target.value);
  }

  function handleInset(checked: boolean | "indeterminate") {
    setInset(checked === true);
  }

  useEffect(() => {
    setCode(
      `${inset ? "inset" : ""} ${axis.x}px ${
        axis.y
      }px ${blur}px ${spread}px ${color}`.replaceAll(/(?<=\s)[0]px(?=\s)/g, "0")
    );
  }, [color, axis, blur, spread, inset]);

  return (
    <main className="flex flex-col p-4 items-center justify-center my-5 text-white">
      <NextSeo
        title="Box Shadow Generator | CSS Tools"
        description="Quickly generate CSS BOX-SHADOW with this generator. IMPROVE your website design with this FREE and EASY tool."
      />
      <ColorText className="mb-8" Variant="h1">
        Box Shadow Generator
      </ColorText>
      <div className="flex flex-wrap gap-3 justify-center">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 flex-wrap justify-center">
            <div className="rounded-lg flex flex-col items-center justify-center p-4 moni bg-zinc-900 text-lg uppercase w-4/5 sm:w-auto shadow-neomorphism z-10">
              <ColorPicker color={color} handleColor={setColor} />
            </div>
            <AxisBox axis={axis} handleAxis={handleAxis} />
          </div>
          <InputRangeBox
            handleChange={handleBlur}
            handleChangeValue={setBlur}
            max={50}
            min={0}
            step={1}
            name="blur"
            valuetext={{ value: blur, text: "px" }}
          />
          <InputRangeBox
            handleChange={handleSpread}
            handleChangeValue={setSpread}
            max={50}
            min={-50}
            step={1}
            name="spread"
            valuetext={{ value: spread, text: "px" }}
          />
          <InputCheckBox name="Inset" handleChange={handleInset} />
        </div>

        <div className="w-96 sticky sm:relative bottom-0 z-[100]">
          <CssCode cssCode={"box-shadow: " + code + ";"} />
          <div className="h-36 flex items-center justify-center rounded-b-lg bg-white">
            <div
              style={{ boxShadow: code }}
              className="bg-zinc-900 rounded w-[50%] h-[60%] flex items-center justify-center text-xl"
            >
              Result
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
