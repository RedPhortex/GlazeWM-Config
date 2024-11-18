import { Battery, Cpu, Memory, Network, Date } from "./Components";
import { useConfig, useCssVariables, useProvider } from "./hooks";
import { CssVarsProvider } from "@mui/joy";
import theme from "./assets/theme";

const App = () => {
  const output = useProvider();
  const config = useConfig();

  useCssVariables(config);

  return (
    <CssVarsProvider
      theme={theme}
      defaultMode="system"
      modeStorageKey="zebar-mode">
      {config && (
        <div className="app">
          <div className="left"></div>

          <div className="center">
            <Date date={output.date} />
          </div>

          <div className="right">
            <Network network={output.network} />
            <Memory memory={output.memory} />
            <Cpu cpu={output.cpu} />
            <Battery battery={output.battery} />
          </div>
        </div>
      )}
    </CssVarsProvider>
  );
};

export default App;
