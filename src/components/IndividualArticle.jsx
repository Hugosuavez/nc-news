import { useParams } from "react-router-dom";
import { fetchIndividualArticle } from "../utils/apicalls";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { UpdateVotes } from "./UpdateVotes";
import { ErrorPage } from "./ErrorPage";
import ScrollIntoView from "react-scroll-into-view";
import { ClimbingBoxLoader } from "react-spinners";

export const IndividualArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIndividualArticle(article_id)
      .then((response) => {
        setLoading(false);
        setArticle(response.data.article);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [article_id]);

  const handleClick = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <ClimbingBoxLoader />
      </div>
    );
  }
  if (error) {
    return <ErrorPage error={error} />;
  }
  const date = new Date(article.created_at).toDateString();

  return (
    <>
      <main id="container2">
        <section className="individual-article">
        <h3 id="title">{article.title}</h3>
        <img
          className="article-image"
          width="200px"
          src={article.article_img_url}
          alt=""
        />
        <p>{article.body}</p>
        <p className="article-author">
          {article.author} | {article.topic} | {date}
        </p>
      </section>
      
        <ScrollIntoView selector="#cmt">
          <button className="cmnt-button" onClick={handleClick}>
            {article.comment_count} comments, click to view
          </button>
        </ScrollIntoView>
        <UpdateVotes article={article} />
      
      <section id="cmt">
        <Comments
          article_id={article_id}
          totalComments={article.comment_count}
        />
      </section>
      </main>
    </>
  );
};
