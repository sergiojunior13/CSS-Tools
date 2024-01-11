import { ChangeEvent, InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  value: any;
  handleValue?: (value: any) => void;
  className?: string;
  max?: number;
  min?: number;
  measureText?: string;
}

export function fixValuesIfTheyExtrapolateMaxOrMin(
  value: number,
  max: number,
  min: number
) {
  if (value > max) {
    value = max;
  }
  if (value < min) {
    value = min;
  }

  return value;
}

export default function InputText({
  value,
  handleValue,
  className,
  max = 50,
  min = -50,
  measureText,
  ...rest
}: InputTextProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (!handleValue) return;

    const value = Number(e.target.value);
    const fixedValue = fixValuesIfTheyExtrapolateMaxOrMin(value, max, min);

    handleValue(fixedValue);
  }

  if (typeof value === "number")
    value = fixValuesIfTheyExtrapolateMaxOrMin(value, max, min);

  return (
    <div className={`outline-0 bg-transparent ${className}`}>
      <input
        value={value}
        onChange={handleChange}
        className={`outline-0 bg-transparent ${className}`}
        data-testid="input"
        {...rest}
      />
      {measureText && <span>{measureText}</span>}
    </div>
  );
}
