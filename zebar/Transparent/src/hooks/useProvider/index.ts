import { createProviderGroup } from "zebar";
import { useState, useEffect } from "react";
import { log } from "../../assets/utils";

const providers = createProviderGroup({
  audio: { type: "audio", refreshInterval: 5000 },
  battery: { type: "battery", refreshInterval: 30000 },
  cpu: { type: "cpu", refreshInterval: 750 },
  date: { type: "date", formatting: "EEE dd MMM hh:mm" },
  glazewm: { type: "glazewm" },
  host: { type: "host" },
  ip: { type: "ip" },
  media: { type: "media", refreshInterval: 5000 },
  memory: { type: "memory", refreshInterval: 1000 },
  network: { type: "network", refreshInterval: 500 },
  weather: { type: "weather", refreshInterval: 60000 * 5 },
  keyboard: { type: "keyboard" },
  disk: { type: "disk", refreshInterval: 10000 },
});

const useProvider = () => {
  const [output, setOutput] = useState(providers.outputMap);

  useEffect(() => {
    providers.onOutput(() => setOutput(providers.outputMap));

    log("useProvider", "Loaded Providers");
  }, []);

  return output;
};

export default useProvider;
