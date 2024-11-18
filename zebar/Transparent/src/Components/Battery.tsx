import { type BatteryOutput } from "zebar";
import { Chip } from "@mui/joy";

const Battery = ({ battery }: { battery: BatteryOutput }) => {
  const getIcon = (chargePercent: number) => {
    if (chargePercent > 90) return <i className="nf nf-fa-battery_4" />;
    if (chargePercent > 70) return <i className="nf nf-fa-battery_3" />;
    if (chargePercent > 40) return <i className="nf nf-fa-battery_2" />;
    if (chargePercent > 20) return <i className="nf nf-fa-battery_1" />;
    return <i className="nf nf-fa-battery_0" />;
  };

  return (
    <>
      {battery && (
        <Chip className="battery">
          {getIcon(battery.chargePercent)}&nbsp;
          {Math.round(battery.chargePercent)}%
        </Chip>
      )}
    </>
  );
};

export default Battery;
