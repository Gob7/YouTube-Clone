import "./Home.css";
import { videos } from "../assets/dummyData";
import VideoCard from "../components/VideoCard";

export default function Home() {
  return (
    <div className="video-feed">
      <div className="video-list">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
