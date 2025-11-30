import TrackItem from "./trackItem";

export default function TrackList({ tracks }) {
  return (
    <div>
      {tracks.map((track) => (
        <TrackItem key={track.id} track={track} />
      ))}
    </div>
  );
}
