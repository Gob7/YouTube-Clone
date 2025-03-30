import VideoCard from "../components/VideoCard";
import { videos } from "../assets/dummyData";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="video-list">
      {filteredVideos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
