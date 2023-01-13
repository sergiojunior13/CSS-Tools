import { Check, Copy } from "phosphor-react";
import { useState } from "react";

interface CssCodeProps {
  cssCode: string;
  className?: string;
  truncate?: boolean;
}
export default function CssCode({
  cssCode,
  className,
  truncate = true,
}: CssCodeProps) {
  const [isCopying, setIsCopying] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(cssCode);
    setIsCopying(true);
    setTimeout(() => setIsCopying(false), 1500);
  }

  return (
    <div
      className={`flex justify-between items-center bg-zinc-900 shadow-neomorphism p-2 rounded-t-lg ${className}`}
    >
      <span
        className={`${truncate && "truncate"} font-mono mr-2 text-sm w-11/12`}
      >
        {cssCode}
      </span>
      {isCopying ? (
        <Check size={20} className="text-orange-500" />
      ) : (
        <Copy
          size={20}
          className="rounded-full cursor-pointer"
          onClick={handleCopy}
        />
      )}
    </div>
  );
}
