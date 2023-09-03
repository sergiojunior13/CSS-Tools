import { ChangeEvent } from "react";
import { Label } from "../../../pages/gradient-generator";
import InputText from "../InputText";

interface InputRangeBoxProps {
  name: string;
  valuetext: {
    value: string | number;
    text?: string;
  };
  min?: string | number;
  max?: string | number;
  step?: string | number;
  handleChange: (value: number) => void;
}

export default function InputRangeBox(props: InputRangeBoxProps) {
  function handleValue(event: ChangeEvent<HTMLInputElement> | number) {
    if (typeof event === "number") {
      props.handleChange(event);
      return;
    }

    props.handleChange(+event.target.value);
  }

  return (
    <div className="flex flex-col bg-zinc-900 p-2 whitespace-nowrap rounded h-min shadow-neomorphism">
      <div className="flex justify-between">
        <Label className="mb-1">{props.name}</Label>
        <InputText
          type={"number"}
          value={props.valuetext.value}
          handleValue={handleValue}
          className="outline-none text-right text-orange-500 w-2/4"
          text={props.valuetext.text}
          max={Number(props.max)}
          min={Number(props.min)}
        />
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={props.valuetext.value}
        onChange={handleValue}
        step={props.step || "5"}
      />
    </div>
  );
}
