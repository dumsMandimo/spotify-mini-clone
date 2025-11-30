import Card from "./card";

export default function AlbumCard({ album }) {
  return (
    <Card>
      <img 
        src={album.images[0]?.url} 
        alt={album.name} 
        className="album-img"
      />
      <h4 className="album-name">{album.name}</h4>
      <p className="album-artist">{album.artists[0].name}</p>
    </Card>
  );
}
