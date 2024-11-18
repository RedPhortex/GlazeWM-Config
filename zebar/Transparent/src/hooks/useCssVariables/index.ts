import { type ZebarConfig } from "../../assets/types";
import { log } from "../../assets/utils";
import { useEffect } from "react";

const useCssVariables = (config: ZebarConfig) => {
  useEffect(() => {
    const root = document.documentElement;

    switch (config?.transparent) {
      case true:
        root.style.setProperty("--hover-color", "rgb(255 255 255 / 12.5%)");
        root.style.setProperty("--border-color", "rgb(255 255 255 / 5%)");
        root.style.setProperty("--color", "rgb(255 255 255 / 90%)");
        root.style.setProperty("--background-color", "transparent");
        log(
          "useCssVariables",
          "Applied CSS Variables for:",
          { transparent: config.transparent }
        );
        break;
      case false:
        root.style.setProperty("--hover-color", "#2d3031");
        root.style.setProperty("--border-color", "#414344");
        root.style.setProperty("--color", "#ffffff");
        root.style.setProperty("--background-color", "#1f2223");
        log(
          "useCssVariables",
          "Applied CSS Variables for:",
          { transparent: config.transparent }
        );
        break;
      default:
        log("useCssVariables", "Config not yet loaded");
        break;
    }
  }, [config]);
};

export default useCssVariables;
