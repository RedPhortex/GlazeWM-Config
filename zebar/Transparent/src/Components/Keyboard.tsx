import { type KeyboardOutput } from "zebar";
import { Chip } from "@mui/joy";

const Keyboard = ({ keyboard }: { keyboard: KeyboardOutput }) => {
  return <>{keyboard && <Chip className="keyboard">{keyboard.layout}</Chip>}</>;
};

export default Keyboard;
