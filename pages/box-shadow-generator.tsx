import { NextSeo } from "next-seo";

import AxisBox from "../src/components/AxisBox";
import ColorPicker from "../src/components/ColorPicker";
import ColorText from "../src/components/ColorText";
import CssCode from "../src/components/CssCode";
import InputCheckBox from "../src/components/inputs/InputCheckBox";
import InputRangeBox from "../src/components/inputs/InputRange";
import ShadowsList, { ShadowsListContext } from "../src/components/ShadowsList";

import { useBoxShadow } from "../hooks/useBoxShadow";

import Link from "next/link";

export default function BoxShadow() {
  const {
    state,
    handleAxis,
    handleBlur,
    handleInset,
    handleSpread,
    handleColor,
    changeSelectedShadowCode,
    addShadow,
    removeShadow,
  } = useBoxShadow();

  const {
    inset,
    axis,
    blur,
    code,
    color,
    spread,
    selectedShadowCode,
    shadows,
  } = state;

  return (
    <main className="flex flex-col gap-5 p-4 items-center justify-center my-5 text-white">
      <NextSeo
        title="Box Shadow Generator | CSS Tools"
        description="Quickly generate CSS BOX-SHADOW with this generator. IMPROVE your website design with this FREE and EASY tool."
      />
      <ColorText className="mb-8" Variant="h1">
        Box Shadow Generator
      </ColorText>
      <div className="grid lg:grid-cols-2 justify-center gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3">
            <div className="rounded-lg flex flex-col items-center justify-center py-4 bg-zinc-900 text-lg uppercase shadow-neomorphism z-10 w-full sm:w-auto">
              <ColorPicker color={color} handleColor={handleColor} />
            </div>
            <AxisBox axis={axis} handleAxis={handleAxis} max={100} min={-100} />
          </div>
          <InputRangeBox
            handleChange={handleBlur}
            max={50}
            min={0}
            step={1}
            name="blur"
            valuetext={{ value: blur, text: "px" }}
          />
          <InputRangeBox
            handleChange={handleSpread}
            max={50}
            min={-50}
            step={1}
            name="spread"
            valuetext={{ value: spread, text: "px" }}
          />
          <InputCheckBox
            name="Inset"
            handleChange={handleInset}
            isChecked={inset}
          />
          <ShadowsListContext.Provider
            value={{
              selectedShadowCode,
              changeSelectedShadowCode,
              addShadow,
              removeShadow,
              shadows,
            }}
          >
            <ShadowsList />
          </ShadowsListContext.Provider>
        </div>

        <div className="sm:aspect-square sm:max-w-[524px] h-96 sm:h-auto sticky sm:relative bottom-4 sm:bottom-0 z-[100]">
          <CssCode cssCode={"box-shadow: " + code + ";"} />
          <div className="h-[90%] flex items-center justify-center rounded-b-lg bg-white">
            <div
              style={{ boxShadow: code }}
              className="bg-zinc-900 rounded-xl aspect-video w-3/5 flex items-center justify-center text-xl"
            >
              Preview
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          To see how the box-shadow property works, just{" "}
          <Link
            href="/blog/box-shadow-in-css/"
            className="text-orange-500 font-bold"
          >
            click here
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
