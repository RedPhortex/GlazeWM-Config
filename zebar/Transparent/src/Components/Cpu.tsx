import { type CpuOutput } from "zebar";
import { Chip } from "@mui/joy";

const Cpu = ({ cpu }: { cpu: CpuOutput }) => {
  return (
    <>
      {cpu && (
        <Chip className="cpu">
          <i className="nf nf-oct-cpu" />
          &nbsp;
          <span className={cpu.usage > 85 ? "high-usage" : ""}>
            {Math.round(cpu.usage)}%
          </span>
        </Chip>
      )}
    </>
  );
};

export default Cpu;
