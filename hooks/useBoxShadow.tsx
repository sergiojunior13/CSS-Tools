import { useEffect, useReducer } from "react";
import { ReducerProps, Shadow, handleAxisProps } from "./useBoxShadowTypes";

const InitialShadow: Shadow = {
  color: "#000",
  axis: { x: 0, y: 0 },
  spread: 0,
  blur: 0,
  inset: false,
  shadows: ["0 0 0 0 #000"],
  selectedShadowCode: "0 0 0 0 #000",
  code: generateCssCode(["0 0 0 0 #000"]),
};

function generateCssCode(shadows: string[]) {
  return shadows.join(", ");
}

function generateShadowCode({
  axis,
  blur,
  color,
  inset,
  spread,
}: Omit<Shadow, "code">) {
  const shadowCssCode = `${inset ? "inset " : ""}${axis.x}px ${
    axis.y
  }px ${blur}px ${spread}px ${color}`.replaceAll(
    /(?<=(?:^|\s))[0]px(?=\s)/g,
    "0"
  );

  return shadowCssCode;
}

function reducer(
  state: ReducerProps["state"],
  { type, newValue }: ReducerProps["action"]
): Shadow {
  switch (type) {
    case "change_shadow_color":
      return { ...state, color: newValue };

    case "change_axis":
      return { ...state, axis: newValue };

    case "change_blur":
      return { ...state, blur: newValue };

    case "change_spread":
      return { ...state, spread: newValue };

    case "set_inset":
      return { ...state, inset: newValue };

    case "change_shadows_list":
      return { ...state, shadows: newValue };

    case "change_selected_shadow_code":
      return { ...state, selectedShadowCode: newValue };

    case "set_code":
      return { ...state, code: newValue };

    default:
      return state;
  }
}

export function useBoxShadow() {
  const [state, dispatch] = useReducer(reducer, InitialShadow);

  function handleColor(color: string) {
    dispatch({ type: "change_shadow_color", newValue: color });
  }

  function handleAxis({
    x,
    y,
    isToConvertAxis: isToconvertAxis = true,
  }: handleAxisProps) {
    if (isToconvertAxis) {
      x = Math.floor(x / 2 - 50);
      y = Math.floor(y / 2 - 50);
    }

    dispatch({ type: "change_axis", newValue: { x, y } });
  }

  function handleBlur(blur: number) {
    dispatch({ type: "change_blur", newValue: blur });
  }

  function handleSpread(spread: number) {
    dispatch({ type: "change_spread", newValue: spread });
  }

  function handleInset(checked: boolean | "indeterminate") {
    const isActive = checked === true;

    dispatch({ type: "set_inset", newValue: isActive });
  }

  function addShadow() {
    const shadow = "0 0 0 0 #000";
    const newShadowsList = [...state.shadows, shadow];

    if (state.shadows.includes(shadow)) {
      alert("This shadow already exists");
      return;
    }

    changeSelectedShadowCode(shadow);

    dispatch({
      type: "change_shadows_list",
      newValue: newShadowsList,
    });

    dispatch({ type: "set_code", newValue: generateCssCode(newShadowsList) });
  }

  function removeShadow(shadow: string) {
    const newShadowsList = state.shadows.filter(
      crrShadow => crrShadow !== shadow
    );

    dispatch({
      type: "change_shadows_list",
      newValue: newShadowsList,
    });

    dispatch({ type: "set_code", newValue: generateCssCode(newShadowsList) });
  }

  function changeSelectedShadowCode(shadow: string) {
    changeStateValuesToSelectedShadow(shadow);

    dispatch({ type: "change_selected_shadow_code", newValue: shadow });
  }

  function changeStateValuesToSelectedShadow(shadow: string) {
    const { x, y, blur, spread, color, isInset } = getValuesFromShadow(shadow);

    handleAxis({ x, y, isToConvertAxis: false });
    handleBlur(blur);
    handleSpread(spread);
    handleColor(color);
    handleInset(isInset);
  }

  function getValuesFromShadow(shadow: string) {
    const isInset = shadow.includes("inset");

    if (isInset) {
      shadow = shadow.replace("inset ", "");
    }

    const [x, y, blur, spread, color] = shadow
      .split(" ")
      .map(shadowProp => shadowProp.replace("px", ""));

    const shadowPropsToNumber = {
      x: Number(x),
      y: Number(y),
      blur: Number(blur),
      spread: Number(spread),
    };

    return { ...shadowPropsToNumber, color, isInset };
  }

  useEffect(() => {
    const generatedShadow = generateShadowCode({ ...state });

    if (state.shadows.includes(generatedShadow)) {
      return;
    }

    const indexOfSelectedShadow = state.shadows.indexOf(
      state.selectedShadowCode
    );

    const newShadowsList = [...state.shadows];
    newShadowsList[indexOfSelectedShadow] = generatedShadow;

    dispatch({ type: "change_shadows_list", newValue: newShadowsList });

    dispatch({
      type: "change_selected_shadow_code",
      newValue: generatedShadow,
    });

    dispatch({ type: "set_code", newValue: generateCssCode(newShadowsList) });
  }, [state.axis, state.blur, state.color, state.inset, state.spread]);

  return {
    state,
    dispatch,
    handleAxis,
    handleInset,
    handleSpread,
    handleBlur,
    handleColor,
    addShadow,
    removeShadow,
    changeSelectedShadowCode,
  };
}
