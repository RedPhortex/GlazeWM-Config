import { type DiskOutput } from "zebar";
import { Chip } from "@mui/joy";

const Disk = ({ disk }: { disk: DiskOutput }) => {
  return (
    <>
      {disk?.disks && (
        <Chip className="disk">
          <i className="nf nf-fa-hdd_o" />
          &nbsp; &nbsp;
          <span
            className={
              disk.disks[0].availableSpace.bytes < disk.disks[0].totalSpace.bytes / 10 ? "high-usage" : ""
            }>
            {disk.disks[0].availableSpace.siValue.toFixed(1)}&nbsp;
            {disk.disks[0].availableSpace.siUnit}
          </span>
        </Chip>
      )}
    </>
  );
};

export default Disk;
