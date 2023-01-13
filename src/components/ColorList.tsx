import { Trash } from "phosphor-react";

interface ColorListProps {
  colors: string[];
  handleRemove: (color: string) => void;
}

export default function ColorList({ colors, handleRemove }: ColorListProps) {
  return (
    <ul className="grid sm:grid-cols-2 gap-2 flex-1 content-start bg-zinc-900 z-[2] shadow-neomorphism rounded-lg p-2 min-w-[250px]">
      {colors.map(color => (
        <li
          key={color}
          style={{
            backgroundColor: color,
            textShadow: "0 0 5px black",
          }}
          className="flex-1 flex items-center justify-between p-2 rounded-lg uppercase h-min text-sm"
        >
          {color}
          <Trash
            onClick={() => handleRemove(color)}
            size={20}
            className="bg-white text-black hover:bg-red-500 transition-colors hover:text-white rounded-full p-0.5 ml-1 cursor-pointer"
          />
        </li>
      ))}
    </ul>
  );
}
