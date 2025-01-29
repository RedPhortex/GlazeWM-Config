export type ZebarConfig = {
  htmlPath: string;
  zOrder: ZOrder;
  shownInTaskbar: boolean;
  focused: boolean;
  resizable: boolean;
  transparent: boolean;
  caching: Caching;
  privileges: Privileges;
  presets: Preset[];
};

export type ZOrder = "top_most" | "normal" | "bottom_most";

export type Caching = {
  defaultDuration: number;
  rules: CachingRule[];
};

export type CachingRule = {
  urlRegex: string;
  duration: number;
};

export type Privileges = {
  shellCommands: ShellCommand[];
};

export type ShellCommand = {
  program: string;
  argsRegex: string;
};

export type Preset = {
  name: string;
  anchor: Anchor;
  offsetX: string;
  offsetY: string;
  width: string;
  height: string;
  monitorSelection: MonitorSelection;
  dockToEdge: DockToEdge;
};

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

export type DockToEdge = {
  enabled: boolean;
  edge: null | "top" | "left";
  windowMargin: string;
};
