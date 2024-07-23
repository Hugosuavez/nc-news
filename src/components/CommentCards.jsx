import { DeleteButton } from "./DeleteButton";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const CommentCards = ({ comments, setComments }) => {
  const { username } = useContext(UserContext);

  return comments.map((comment) => {
    const date = new Date(comment.created_at).toDateString();
    return (
      <article className="comment-card" key={comment.comment_id}>
        <p className="comment-body">{comment.body}</p>
        <p className="article-author">
          {comment.author} | {date}
        </p>
        <button>Votes: {comment.votes}</button>
        {comment.author === username ? (
          <DeleteButton
            comment_id={comment.comment_id}
            setComments={setComments}
            comments={comments}
          />
        ) : null}
      </article>
    );
  });
};
