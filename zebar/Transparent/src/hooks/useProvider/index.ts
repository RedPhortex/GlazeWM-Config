import { createProviderGroup } from "zebar";
import { useState, useEffect } from "react";
import { log } from "../../assets/utils";

const providers = createProviderGroup({
  network: { type: "network", refreshInterval: 500 },
  cpu: { type: "cpu", refreshInterval: 750 },
  date: { type: "date", formatting: "EEE dd MMM hh:mm" },
  battery: { type: "battery", refreshInterval: 30000 },
  memory: { type: "memory", refreshInterval: 1000 },
  keyboard: { type: "keyboard" },
  glazewm: { type: "glazewm" },
  weather: { type: "weather", refreshInterval: 60000 * 5 },
  host: { type: "host" },
  ip: { type: "ip" },
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
