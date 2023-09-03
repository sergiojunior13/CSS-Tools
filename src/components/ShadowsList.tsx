import { Trash } from "phosphor-react";
import { useContext, createContext, useState, useCallback } from "react";
import { useBoxShadow } from "../../hooks/useBoxShadow";

interface ShadowProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  selectedShadowCode: string;
  removeShadow: (shadow: string) => void;
  changeSelectedShadowCode: (shadow: string) => void;
}

interface ShadowsListContextProps {
  removeShadow: (shadow: string) => void;
  changeSelectedShadowCode: (shadow: string) => void;
  addShadow: () => void;
  selectedShadowCode: string;
  shadows: string[];
}

export const ShadowsListContext = createContext<ShadowsListContextProps | null>(
  null
);

export default function ShadowsList() {
  const {
    addShadow,
    selectedShadowCode,
    shadows,
    changeSelectedShadowCode,
    removeShadow,
  } = useContext(ShadowsListContext) as ShadowsListContextProps;

  return (
    <div className="bg-zinc-900 p-2 rounded-xl grid gap-4">
      <div className="font-mono grid sm:grid-cols-2 gap-2">
        {shadows.map(shadow => (
          <Shadow
            changeSelectedShadowCode={changeSelectedShadowCode}
            removeShadow={removeShadow}
            selectedShadowCode={selectedShadowCode}
            key={shadow}
          >
            {shadow}
          </Shadow>
        ))}
      </div>

      <button
        onClick={addShadow}
        className="w-full rounded-lg py-1 bg-blue-700 hover:bg-blue-800"
      >
        Add Shadow
      </button>
    </div>
  );
}

function Shadow({
  children: shadowCode,
  changeSelectedShadowCode,
  removeShadow,
  selectedShadowCode,
  ...rest
}: ShadowProps) {
  const isThisShadowSelected = selectedShadowCode === shadowCode;

  function handleClick() {
    changeSelectedShadowCode(shadowCode);
  }

  function handleRemove() {
    removeShadow(shadowCode);
  }

  return (
    <div
      className="flex justify-between items-center gap-2 bg-zinc-700 hover:bg-zinc-800 cursor-pointer transition-colors rounded-lg p-2 text-sm data-[selected=true]:hover:bg-orange-800 data-[selected=true]:bg-orange-600 sm:w-[250px]"
      style={{ boxShadow: shadowCode }}
      data-selected={isThisShadowSelected}
    >
      <button
        onClick={handleClick}
        className="truncate text-ellipsis mx-auto"
        {...rest}
      >
        {shadowCode}
      </button>
      {isThisShadowSelected ? (
        ""
      ) : (
        <button className="hover:text-red-500" onClick={handleRemove}>
          <Trash size={20} />
        </button>
      )}
    </div>
  );
}
