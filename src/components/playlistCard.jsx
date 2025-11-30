import Card from "./card";

export default function PlaylistCard({ playlist }) {
  return (
    <Card>
      <img
        src={playlist.images[0]?.url}
        alt={playlist.name}
        className="album-img"
      />
      <h4 className="album-name">{playlist.name}</h4>
      <p className="album-artist">{playlist.owner.display_name}</p>
    </Card>
  );
}
