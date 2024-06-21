import { Link } from "react-router-dom";

export const ArticleCards = ({ articles }) => {
  return articles.map((article, index) => {
    const date = new Date(article.created_at).toDateString();
    return (
      <article className={`article-card`} key={article.article_id}>
        <h3 className="topic">{article.topic}</h3>
        <h2>
          {article.title} by {article.author}
        </h2>
        <img className="article-image" src={article.article_img_url} alt="" />
        <br />
        <p>{date}</p>
        <button>Votes: {article.votes}</button>
        <button>Comments: {article.comment_count}</button>
        <Link to={`/api/articles/${article.article_id}`}>View Article</Link>
      </article>
    );
  });
};
