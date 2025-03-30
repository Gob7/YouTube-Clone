import "./VideoCard.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTheme } from "../context/ThemeContext";

export default function VideoCard({ video, horizontal = false }) {
  const { id, thumbnail, title, channel, views, postedTime, duration } = video;
  const { dark } = useTheme();

  return (
    <div
      className={`video-card ${horizontal ? "horizontal" : ""} ${
        dark ? "dark-mode" : "light-mode"
      }`}
    >
      <Link to={`/video/${id}`} className="video-link">
        <div className="thumbnail-container">
          <LazyLoadImage
            className="thumbnail"
            src={thumbnail}
            effect="blur"
            width={horizontal ? "168px" : "100%"}
            height={horizontal ? "94px" : "auto"}
            alt={title}
          />
          {duration && <span className="duration">{duration}</span>}
        </div>

        <div className="video-info">
          <h3 className="video-title">{title}</h3>
          <p className="video-channel">{channel}</p>
          <div className="video-metadata">
            <span>{views}</span>
            <span>{postedTime}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
