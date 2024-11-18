import { type IpOutput } from "zebar";
import { Chip } from "@mui/joy";

const Ip = ({ ip }: { ip: IpOutput }) => {
  return <>{ip && <Chip className="ip">{ip.address}</Chip>}</>;
};

export default Ip;
