import "./VideoPlayer.css";

export default function VideoPlayer({ video }) {
  return (
    <div className="video-player">
      <iframe
        width="100%"
        height="400"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={video.title}
      ></iframe>
    </div>
  );
}
