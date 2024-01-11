import { ChangeEvent } from "react";
import InputText from "./InputText";

interface InputRangeBoxProps {
  name: string;
  value: string | number;
  measureText?: string;
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
        <label className="mb-1" htmlFor={props.name}>
          {props.name}
        </label>
        <InputText
          type="number"
          value={props.value}
          data-testid="valueInput"
          handleValue={value => {
            if (!props.handleChangeValue) return;
            props.handleChangeValue(Number(value));
          }}
          className="text-right text-orange-500 w-2/4"
          measureText={props.measureText}
          max={Number(props.max)}
          min={Number(props.min)}
        />
      </div>
      <input
        id={props.name}
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handleChange}
        step={props.step || "5"}
      />
    </div>
  );
}
