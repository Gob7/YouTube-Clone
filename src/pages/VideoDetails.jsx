import "./VideoDetails.css";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FaThumbsUp, FaThumbsDown, FaBell } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { videos, comments } from "../assets/dummyData";
import VideoPlayer from "../components/VideoPlayer";
import CommentSection from "../components/CommentSection";
import VideoCard from "../components/VideoCard";

export default function VideoDetails() {
  const { id } = useParams();
  const { dark } = useTheme();
  const video = videos.find((v) => v.id === id);
  const recommendations = videos.filter((v) => v.id !== id).slice(0, 9);
  const videoComments = comments.filter((c) => c.videoId === id);

  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState(videoComments);
  const [subscribe, setSubscribe] = useState(false);
  console.log(video);
  const [likeCount, setLikeCount] = useState(video.likes);
  const [dislikeCount, setDislikeCount] = useState(video.dislikes);

  function handleLike() {
    if (like) setLikeCount(likeCount - 1);
    else {
      setLikeCount(likeCount + 1);

      if (dislike) {
        setDislikeCount(dislikeCount - 1);
        setDislike(false);
      }
    }
    setLike(!like);
  }

  function handleDislike() {
    if (dislike) setDislikeCount(dislikeCount - 1);
    else {
      setDislikeCount(dislikeCount + 1);

      if (like) {
        setLikeCount(likeCount - 1);
        setLike(false);
      }
    }
    setDislike(!dislike);
  }

  function handleComment(e) {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      videoId: parseInt(id),
      user: "You",
      text: comment,
    };

    setAllComment([newComment, ...allComment]);
    setComment("");
  }

  function handleSubscribe() {
    setSubscribe(!subscribe);
  }

  if (!video) return <div>Loading...</div>;
  console.log("inside VideoDetails.jsx");

  return (
    <div
      className={`video-page-container ${dark ? "dark-mode" : "light-mode"}`}
    >
      <div className="video-layout">
        <div className="main-content">
          <VideoPlayer video={video} />

          <div className="video-info">
            <h1>{video.title}</h1>
            <div className="video-meta">
              <span>
                {video.views} views • {video.postedTime}
              </span>
            </div>

            <div className="video-actions">
              <button onClick={handleLike} className={like ? "active" : ""}>
                <FaThumbsUp /> {likeCount.toLocaleString()}
              </button>
              <button
                onClick={handleDislike}
                className={dislike ? "active" : ""}
              >
                <FaThumbsDown /> {dislikeCount.toLocaleString()}
              </button>
              <button
                onClick={handleSubscribe}
                className={subscribe ? "subscribed" : "not-subscribed"}
              >
                {subscribe ? "Subscribed" : "Subscribe"}
              </button>
              {subscribe && (
                <button className="bell-icon">
                  <FaBell />
                </button>
              )}
            </div>

            <div className="channel-info">
              <img
                src={video.profilePic}
                alt={video.channel}
                className="channel-avatar"
              />
              <div className="channel-details">
                <h3>{video.channel}</h3>
                <p>1.2M subscribers</p>
              </div>
            </div>

            <div className="video-description">
              <p>{video.description}</p>
            </div>
          </div>

          <div className="comment-form">
            <form onSubmit={handleComment}>
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit">Comment</button>
            </form>
          </div>

          <CommentSection comments={allComment} />
        </div>

        <div className="recommendations-sidebar">
          <h3>Recommended</h3>
          {recommendations.map((video) => (
            <VideoCard key={video.id} video={video} horizontal />
          ))}
        </div>
      </div>
    </div>
  );
}
