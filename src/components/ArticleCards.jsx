import { Link } from "react-router-dom";

export const ArticleCards = ({ articles }) => {
  return articles.map((article) => {
    const date = new Date(article.created_at).toDateString();
    return (
      <article className={`article-card`} key={article.article_id}>
        <img className="article-image" src={article.article_img_url} alt="" />
        <h2 className="article-header">{article.title} </h2>
        <p className="article-author">{article.author} | {article.topic} | {date}</p>
        <p></p>
        <Link className="nav-button" to={`/api/articles/${article.article_id}`}>View Article</Link>
      </article>
    );
  });
};
