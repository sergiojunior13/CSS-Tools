import * as Select from "@radix-ui/react-select";
import { CaretDown, CaretUp, Check } from "phosphor-react";

interface InputSelectProps {
  values:
    | [
        {
          value: string;
          text?: string;
        }
      ]
    | string[];
  className?: string;
}

export default function InputSelect({ values, className }: InputSelectProps) {
  return (
    <Select.Root>
      <Select.Trigger
        className={
          "flex items-center justify-between gap-2 outline-0 bg-zinc-900 p-2 rounded h-min w-full " +
          className
        }
      >
        <Select.Value placeholder="Select a filter..." />
        <Select.Icon>
          <CaretDown />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="bg-zinc-100 rounded-lg p-1.5 w-min self-center">
          <Select.ScrollUpButton className="flex justify-center text-orange-700">
            <CaretUp weight="bold" />
          </Select.ScrollUpButton>
          <Select.Viewport>
            {values.map(value => {
              if (typeof value === "string") {
                return <SelectItem value={value} />;
              }

              return <SelectItem value={value.value} text={value.text} />;
            })}
          </Select.Viewport>
          <Select.ScrollDownButton className="flex justify-center text-orange-700">
            <CaretDown weight="bold" />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

interface SelectItemProps {
  text?: string;
  value: string;
}

function SelectItem({ value, text = value }: SelectItemProps) {
  return (
    <Select.Item
      value={value}
      className="flex items-center hover:bg-orange-500 hover:text-white text-orange-600 outline-0 rounded-md p-1 px-5 cursor-pointer whitespace-nowrap"
    >
      <Select.ItemIndicator className="-translate-x-[110%] absolute">
        <Check weight="bold" />
      </Select.ItemIndicator>
      <Select.ItemText>{text}</Select.ItemText>
    </Select.Item>
  );
}
