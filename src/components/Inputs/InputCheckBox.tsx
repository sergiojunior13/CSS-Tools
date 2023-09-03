import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface InputCheckBoxProps {
  name: string;
  handleChange: (checked: boolean | "indeterminate") => void;
  isChecked?: boolean;
}

export default function InputCheckBox({
  name,
  handleChange,
  isChecked = false,
}: InputCheckBoxProps) {
  return (
    <label>
      <Checkbox.Root
        className="bg-zinc-900 shadow-neomorphism rounded w-5 h-5 mr-1 align-middle"
        onCheckedChange={handleChange}
        checked={isChecked}
      >
        <Checkbox.Indicator className="text-orange-500 flex items-center justify-center">
          <Check weight="bold" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      {name}
    </label>
  );
}
