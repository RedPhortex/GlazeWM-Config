import { type HostOutput } from "zebar";
import { Chip } from "@mui/joy";

const Host = ({ host }: { host: HostOutput }) => {
  return <>{host && <Chip className="host">{host.osName}</Chip>}</>;
};

export default Host;
