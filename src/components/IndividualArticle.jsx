import { useParams } from "react-router-dom";
import { fetchIndividualArticle } from "../utils/apicalls";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";

export const IndividualArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleComments, setToggleComments] = useState(false);

  useEffect(() => {
    fetchIndividualArticle(article_id).then((response) => {
      setLoading(false);
      setArticle(response.data.article);
    });
  }, [article_id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = () => {
    toggleComments ? setToggleComments(false) : setToggleComments(true);
  };

  const date = new Date(article.created_at).toDateString();

  return (
    <>
      <section className="individual-article">
        <h2>
          {article.title} by {article.author}
        </h2>
        <img width="200px" src={article.article_img_url} alt="" />
        <p>{article.body}</p>
        <p>{date}</p>
        <button>Votes: {article.votes}</button>
        <button onClick={handleClick}>Comments: {article.comment_count}</button>
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
