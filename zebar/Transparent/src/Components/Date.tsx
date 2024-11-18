import { type DateOutput } from "zebar";
import { Chip } from "@mui/joy";

const Date = ({ date }: { date: DateOutput }) => {
  return (
    <>
      {date && (
        <Chip
          className="date"
          sx={{
            fontSize: "calc(var(--font-size) + 2px)",
            ["&:hover"]: { backgroundColor: "transparent" },
          }}>
          {date.formatted}
        </Chip>
      )}
    </>
  );
};

export default Date;
