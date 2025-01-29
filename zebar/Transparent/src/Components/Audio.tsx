import { type AudioOutput } from "zebar";
import { Chip } from "@mui/joy";

const Audio = ({ audio }: { audio: AudioOutput }) => {
  const getIcon = (volume: number) => {
    if (volume > 65) return <i className="nf nf-fa-volume_high" />;
    if (volume > 20) return <i className="nf nf-fa-volume_down" />;
    return <i className="nf nf-fa-volume_off" />;
  };

  return (
    <>
      {audio && (
        <Chip className="audio">
          {getIcon(audio.defaultPlaybackDevice.volume)}&nbsp;
          {Math.round(audio.defaultPlaybackDevice.volume)}%
        </Chip>
      )}
    </>
  );
};

export default Audio;
