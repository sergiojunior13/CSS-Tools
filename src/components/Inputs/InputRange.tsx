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
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeValue?: (value: any) => void;
}

export default function InputRangeBox(props: InputRangeBoxProps) {
  return (
    <div className="flex flex-col bg-zinc-900 p-2 whitespace-nowrap rounded h-min shadow-neomorphism">
      <div className="flex justify-between">
        <Label className="mb-1">{props.name}</Label>
        <InputText
          type={"number"}
          value={props.valuetext.value}
          handleValue={value => {
            if (!props.handleChangeValue) return;
            props.handleChangeValue(Number(value));
          }}
          className="text-right text-orange-500 w-2/4"
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
        onChange={props.handleChange}
        step={props.step || "5"}
      />
    </div>
  );
}
