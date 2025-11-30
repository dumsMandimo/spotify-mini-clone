import "./trackItem.css";

export default function TrackItem({ track }) {
  return (
    <div className="track-item">
      <img
        src={track.album.images[2]?.url}
        alt={track.name}
        className="track-img"
      />

      <div className="track-info">
        <p className="track-title">{track.name}</p>
        <p className="track-artist">{track.artists[0].name}</p>
      </div>

      <audio controls className="audio-control">
        <source src={track.preview_url} type="audio/mpeg" />
      </audio>
    </div>
  );
}
