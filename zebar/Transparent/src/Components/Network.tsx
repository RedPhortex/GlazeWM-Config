import { type NetworkOutput, type InterfaceType } from "zebar";
import { Chip } from "@mui/joy";

const Network = ({ network }: { network: NetworkOutput }) => {
  const getIcon = (interfaceType: InterfaceType) => {
    switch (interfaceType) {
      case "ethernet":
        return <i className="nf nf-md-ethernet network-icon" />;
      case "wifi":
        return <i className="nf nf-fa-wifi network-icon" />;
      default:
        return <i className="nf nf-md-wifi_off network-icon" />;
    }
  };

  return (
    <>
      {network && (
        <Chip className="network">
          {getIcon(network.defaultInterface.type)}&nbsp;&nbsp;
          <i className="nf nf-fa-arrow_up network-speed-icon" />
          {network.traffic.transmitted.siValue.toFixed(1)}&nbsp;
          {network.traffic.transmitted.siUnit}&nbsp;&nbsp;
          <i className="nf nf-fa-arrow_down network-speed-icon" />
          {network.traffic.received.siValue.toFixed(1)}&nbsp;
          {network.traffic.received.siUnit}
        </Chip>
      )}
    </>
  );
};

export default Network;
