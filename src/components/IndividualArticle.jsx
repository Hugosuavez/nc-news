import { useParams } from "react-router-dom";
import { fetchIndividualArticle } from "../utils/apicalls";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { UpdateVotes } from "./UpdateVotes";
import { ErrorPage } from "./ErrorPage";

export const IndividualArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleComments, setToggleComments] = useState(false);
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchIndividualArticle(article_id).then((response) => {
      setLoading(false);
      setArticle(response.data.article);
    })
    .catch((err) => {
      setLoading(false)
      setError(err)
    });
  }, [article_id]);

   const handleClick = () => {
    toggleComments ? setToggleComments(false) : setToggleComments(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if(error){return <ErrorPage error={error}/>}
  const date = new Date(article.created_at).toDateString();

  return (
    <>
      <section className="individual-article">
        <h3 id="title">
          {article.title} by {article.author}
        </h3>
        <img className="article-image" width="200px" src={article.article_img_url} alt="" />
        <p>{article.body}</p>
        <p>{date}</p>
        <UpdateVotes article={article} />
        <button onClick={handleClick}>{article.comment_count} comments, click to view</button>
      </section>
      {toggleComments ? (
        <Comments
          article_id={article_id}
          totalComments={article.comment_count}
        />
      ) : null}
    </>
  );
};
