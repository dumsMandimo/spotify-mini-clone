import AlbumCard from "./albumCard";
import "./card.css";

export default function AlbumGrid({ albums }) {
  return (
    <div className="grid">
      {albums.map((album) => (
        <AlbumCard key={album.id} album={album} />
      ))}
    </div>
  );
}
