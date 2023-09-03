import Draggable from "react-draggable";
import InputText from "./InputText";

interface AxisBoxProps {
  handleAxis: ({ x, y }: { x: number; y: number }) => void;
  axis: {
    x: number;
    y: number;
  };
  max?: number;
  min?: number;
  convertAxis?: (value: number) => number;
}

export default function AxisBox({
  handleAxis,
  axis,
  max = 50,
  min = -50,
  convertAxis = defaultConvertAxis,
}: AxisBoxProps) {
  return (
    <div className="bg-zinc-900 shadow-neomorphism z-[1] rounded-lg p-2 w-full sm:w-auto">
      <div className="relative w-[212px] m-auto aspect-square bg-zinc-900 rounded-md outline-zinc-700 outline-2 outline">
        <Draggable
          bounds="parent"
          onDrag={(e, data) => handleAxis(data)}
          position={{ x: convertAxis(axis.x), y: convertAxis(axis.y) }}
          defaultPosition={{ x: 100, y: 100 }}
        >
          <div className="absolute bg-orange-500 w-3 h-3 rounded-full cursor-move"></div>
        </Draggable>
      </div>
      <div className=" pt-2 flex flex-col justify-between gap-2">
        <div className="flex justify-between bg-zinc-800 rounded-md px-1">
          <span className="text-zinc-400">X</span>{" "}
          <InputText
            max={max}
            min={min}
            type="number"
            value={axis.x}
            handleValue={x => {
              handleAxis({
                x: convertAxis(x),
                y: convertAxis(axis.y),
              });
            }}
            className="text-right text-orange-500"
          />
        </div>
        <div className="flex justify-between bg-zinc-800 rounded-md px-1">
          <span className="text-zinc-400">Y</span>{" "}
          <InputText
            max={max}
            min={min}
            type="number"
            value={axis.y}
            handleValue={y =>
              handleAxis({
                x: convertAxis(axis.x),
                y: convertAxis(y),
              })
            }
            className="text-right text-orange-500"
          />
        </div>
      </div>
    </div>
  );
}

function defaultConvertAxis(number: number) {
  return (Number(number) + 50) * 2;
}
