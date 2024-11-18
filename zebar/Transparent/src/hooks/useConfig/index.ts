import { type ZebarConfig } from "../../assets/types";
import { useState, useEffect } from "react";
import { log } from "../../assets/utils";

const useConfig = () => {
  const [config, setConfig] = useState<ZebarConfig>();

  useEffect(() => {
    log("[useConfig]", "Loading Config...");

    fetch("../main.zebar.json")
      .then((res) => res.json())
      .then(({ $schema, ...data }: { $schema: string } & ZebarConfig) => {
        setConfig(data);
        log("[useConfig]", "Loaded Config:", data);
      });
  }, []);

  return config;
};

export default useConfig;
