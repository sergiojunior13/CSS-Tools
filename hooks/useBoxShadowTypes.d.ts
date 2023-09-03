type ReducerActions =
  | { type: "change_shadow_color"; newValue: string }
  | { type: "change_axis"; newValue: { x: number; y: number } }
  | { type: "change_spread"; newValue: number }
  | { type: "change_blur"; newValue: number }
  | { type: "set_inset"; newValue: boolean }
  | { type: "change_shadows_list"; newValue: string[] }
  | { type: "change_selected_shadow_code"; newValue: string }
  | { type: "set_code"; newValue: string };

export type ReducerProps = {
  state: Shadow;
  action: ReducerActions;
};

export interface Shadow {
  color: string;
  axis: { x: number; y: number };
  spread: number;
  blur: number;
  inset: boolean;
  shadows: string[];
  selectedShadowCode: string;
  code: string;
}

export interface handleAxisProps {
  x: number;
  y: number;
  isToConvertAxis?: boolean;
}
