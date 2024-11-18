import { type GlazeWmOutput } from "zebar";
import { Chip } from "@mui/joy";

const TilingDirection = ({glazewm}: { glazewm: GlazeWmOutput }) => {
  return (
    <>
      {glazewm && (
        <Chip
          className={`tiling-direction tiling-direction-${glazewm.tilingDirection}`}
          onClick={() => glazewm.runCommand("toggle-tiling-direction")}>
          <i className="nf nf-md-swap_vertical tiling-direction-icon" />
        </Chip>
      )}
    </>
  );
};

export default TilingDirection;
