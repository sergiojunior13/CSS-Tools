import Draggable from "react-draggable";
import InputText from "./inputs/InputText";

interface AxisBoxProps {
  handleAxis: ({ x, y }: Axis) => void;
  axis: Axis;
  max?: number;
  min?: number;
  convertAxis?: (axis: number) => number;
}

export type Axis = {
  x: number;
  y: number;
};

export function defaultConvertAxis(axis: number) {
  return (Number(axis) + 50) * 2;
}

export function generateConvertedAxesObject(
  { x, y }: Axis,
  convertAxis: (axis: number) => number
) {
  return { x: convertAxis(x), y: convertAxis(y) };
}

export function AxisBox({
  handleAxis,
  axis,
  max,
  min,
  convertAxis = defaultConvertAxis,
}: AxisBoxProps) {
  return (
    <div className="bg-zinc-900 shadow-neomorphism z-[1] rounded-lg p-2 w-4/5 sm:w-auto">
      <div className="relative w-[212px] m-auto aspect-square bg-zinc-900 rounded-md outline-zinc-700 outline-2 outline">
        <Draggable
          bounds="parent"
          onDrag={(_, data) => handleAxis(data)}
          position={generateConvertedAxesObject(
            { x: axis.x, y: axis.y },
            convertAxis
          )}
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
              handleAxis(
                generateConvertedAxesObject({ x: x, y: axis.y }, convertAxis)
              );
            }}
            className="text-right text-orange-500"
          />
        </div>
        <div className="flex justify-between bg-zinc-800 rounded-md px-1">
          <span className="text-zinc-400">Y</span>{" "}
          <InputText
            max={50}
            min={-50}
            type="number"
            value={axis.y}
            handleValue={y =>
              handleAxis(
                generateConvertedAxesObject({ x: axis.x, y: y }, convertAxis)
              )
            }
            className="text-right text-orange-500"
          />
        </div>
      </div>
    </div>
  );
}
