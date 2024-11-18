export type ZebarConfig = {
  htmlPath: string;
  zOrder: ZOrder;
  shownInTaskbar: boolean;
  focused: boolean;
  resizable: boolean;
  transparent: boolean;
  presets: Preset[];
};

export type Preset = {
  name: string;
  anchor: Anchor;
  offsetX: string;
  offsetY: string;
  width: string;
  height: string;
  monitorSelection: MonitorSelection;
};

export type ZOrder = "top_most" | "normal" | "bottom_most";

export type Anchor =
  | "top_left"
  | "top_center"
  | "top_right"
  | "center"
  | "bottom_left"
  | "bottom_center"
  | "bottom_right";

export type MonitorSelection = {
  type: "all" | "primary" | "secondary";
};
