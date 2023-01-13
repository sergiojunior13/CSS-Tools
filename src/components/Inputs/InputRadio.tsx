import * as RadioGroup from "@radix-ui/react-radio-group";
import { Label } from "../../../pages/gradient-generator";

interface InputRadioBoxProps {
  title: string;
  values: string[];
  defaultValue: string;
  handleChange: (value: string) => void;
}

export default function InputRadioBox({
  title,
  values,
  handleChange,
  defaultValue,
}: InputRadioBoxProps) {
  return (
    <RadioGroup.Root
      className="flex flex-col shadow-neomorphism z-[5] bg-zinc-900 p-2 px-3 rounded h-min"
      defaultValue={defaultValue}
      onValueChange={handleChange}
    >
      <Label className="text-zinc-400">{title}</Label>
      {values.map(value => (
        <label htmlFor={value} className="flex items-center" key={value}>
          <RadioGroup.Item
            key={value}
            id={value}
            value={value}
            className="w-4 h-4 flex items-center justify-center bg-zinc-700 outline outtine-1 rounded-full outline-none mr-2"
          >
            <RadioGroup.Indicator className="bg-orange-500 w-full h-full block rounded-full" />
          </RadioGroup.Item>
          {value}
        </label>
      ))}
    </RadioGroup.Root>
  );
}
