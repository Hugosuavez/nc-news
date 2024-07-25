import { useState, useEffect } from "react";
import { fetchComments } from "../utils/apicalls";
import { CommentCards } from "./CommentCards";
import { CommentPageButtons } from "./CommentPageButtons";
import { PostComment } from "./PostComment";
import { ErrorPage } from "./ErrorPage";

export const Comments = ({ article_id, totalComments }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    fetchComments(article_id, pageNumber)
      .then((response) => {
        setLoading(false);
        setComments(response.data.comments);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [article_id, pageNumber]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  return (
    <>
      <nav id="post-cmnt">
        <PostComment article_id={article_id} setComments={setComments} />
      </nav>
      <CommentCards comments={comments} setComments={setComments} />
      <CommentPageButtons
        totalComments={totalComments}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
    </>
  );
};
