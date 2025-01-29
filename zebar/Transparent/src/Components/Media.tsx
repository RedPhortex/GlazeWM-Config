import { type MediaOutput } from "zebar";
import { Chip } from "@mui/joy";

const Media = ({ media }: { media: MediaOutput }) => {
  return (
    <>
      {media && (
        <Chip className="media">
          <i className="nf nf-fa-music" />
          &nbsp;
          {media.currentSession.artist} - {media.currentSession.title}
        </Chip>
      )}
    </>
  );
};
