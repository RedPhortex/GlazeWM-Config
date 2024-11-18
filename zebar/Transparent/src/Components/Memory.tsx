import { type MemoryOutput } from "zebar";
import { Chip } from "@mui/joy";

const Memory = ({ memory }: { memory: MemoryOutput }) => {
  return (
    <>
      {memory && (
        <Chip className="memory">
          <i className="nf nf-fae-chip" />
          &nbsp;
          <span className={memory.usage >= 85 ? "high-usage" : ""}>
            {Math.round(memory.usage)}%
          </span>
        </Chip>
      )}
    </>
  );
};

export default Memory;
