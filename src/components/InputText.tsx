import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  value: any;
  handleValue?: (value: any) => void;
  className?: string;
  max?: number;
  min?: number;
  text?: string;
}

export default function InputText({
  value,
  handleValue,
  className,
  max,
  min,
  text,
  ...rest
}: InputTextProps) {
  const isInputTypeNumber = typeof value === "number";
  const inputTypeIfIsNumber = isInputTypeNumber ? "number" : undefined;

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!handleValue) return;

    let inputValue = Number(e.target.value);

    if (max !== undefined && inputValue > max) {
      inputValue = max;
    }
    if (min !== undefined && inputValue < min) {
      inputValue = min;
    }
    handleValue(inputValue);
  }

  return (
    <div className={`outline-0 bg-transparent ${className}`}>
      <input
        value={value}
        onChange={handleChange}
        type={inputTypeIfIsNumber}
        className={`outline-0 bg-transparent ${className}`}
        {...rest}
      />
      {text && <span>{text}</span>}
    </div>
  );
}
