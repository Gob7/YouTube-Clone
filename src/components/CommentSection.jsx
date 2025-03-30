import "./Comment.css";

export default function CommentSection({ comments }) {
  return (
    <div className="comment-section">
      <h3>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <strong>{comment.user}</strong>: {comment.text}
        </div>
      ))}
    </div>
  );
}
