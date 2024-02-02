import { useState } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import ExampleImage from "../public/example-image.jpg";

import ColorText from "../src/components/ColorText";
import CssCode from "../src/components/CssCode";
import InputRangeBox from "../src/components/inputs/InputRange";

export default function Filter() {
  const [blur, setBlur] = useState(0);
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  const [dropShadow, setDropShadow] = useState(0);
  const [grayscale, setGrayscale] = useState(0);
  const [hueRotate, setHueRotate] = useState(0);
  const [invert, setInvert] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [saturate, setSaturate] = useState(1);
  const [sepia, setSepia] = useState(0);

  const filters = [
    { name: "blur", value: blur, text: "px" },
    { name: "brightness", value: brightness, isZeroValid: true },
    { name: "contrast", value: contrast, isZeroValid: true },
    { name: "dropShadow", value: dropShadow },
    { name: "grayscale", value: grayscale },
    { name: "hue-rotate", value: hueRotate, text: "deg" },
    { name: "invert", value: invert },
    { name: "opacity", value: opacity, isZeroValid: true },
    { name: "saturate", value: saturate, isZeroValid: true },
    { name: "sepia", value: sepia },
  ];

  let code =
    filters
      .map(filter => {
        if (filter.value > 0 || filter.isZeroValid) {
          if (filter.value === 1 && filter.isZeroValid) return;
          return `${filter.name}(${filter.value}${filter.text || ""})`;
        }
      })
      .filter(value => value !== undefined)
      .join(" ") || "none";

  return (
    <main className="flex flex-col gap-5 p-4 items-center justify-center text-center my-5 text-white max-w-5xl w-11/12 sm:w-full m-auto">
      <NextSeo
        title="Filter Generator | CSS Tools"
        description="Quickly generate CSS FILTERS with this generator. IMPROVE your website design with this FREE and EASY tool."
      />
      <ColorText className="mb-3" Variant="h1">
        Filter Generator
      </ColorText>

      <div className="flex flex-wrap-reverse gap-5 justify-center">
        <div className="flex flex-col gap-5 sm:w-auto w-full">
          <InputRangeBox
            name="blur"
            valuetext={{ value: blur, text: "px" }}
            min={0}
            max={100}
            step={1}
            handleChange={setBlur}
          />
          <InputRangeBox
            name="brightness"
            valuetext={{ value: brightness }}
            min={0}
            max={5}
            step={0.1}
            handleChange={setBrightness}
          />
          <InputRangeBox
            name="contrast"
            valuetext={{ value: contrast }}
            min={0}
            max={10}
            step={0.1}
            handleChange={setContrast}
          />
          <InputRangeBox
            name="grayscale"
            valuetext={{ value: grayscale }}
            min={0}
            max={1}
            step={0.1}
            handleChange={setGrayscale}
          />
          <InputRangeBox
            name="hue-rotate"
            valuetext={{ value: hueRotate, text: "deg" }}
            min={0}
            max={360}
            handleChange={setHueRotate}
          />
          <InputRangeBox
            name="invert"
            valuetext={{ value: invert }}
            min={0}
            max={1}
            step={0.1}
            handleChange={setInvert}
          />
          <InputRangeBox
            name="opacity"
            valuetext={{ value: opacity }}
            min={0}
            max={1}
            step={0.1}
            handleChange={setOpacity}
          />
          <InputRangeBox
            name="saturate"
            valuetext={{ value: saturate }}
            min={0}
            max={5}
            step={0.1}
            handleChange={setSaturate}
          />
          <InputRangeBox
            name="sepia"
            valuetext={{ value: sepia }}
            min={0}
            max={1}
            step={0.1}
            handleChange={setSepia}
          />
        </div>
        <div className="self-end flex flex-col rounded-lg w-full sm:w-2/5 sm:relative sticky top-0 h-min shadow-neomorphism bg-zinc-800">
          <Image
            width={640}
            height={640}
            className="rounded-t-lg aspect-square"
            src={ExampleImage}
            style={{ filter: code }}
            alt="example image"
          />
          <CssCode
            truncate={false}
            className="rounded-t-none rounded-lg text-left"
            cssCode={`filter: ${code};`}
          />
        </div>
      </div>
    </main>
  );
}
