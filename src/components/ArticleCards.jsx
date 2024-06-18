import { Link } from "react-router-dom";
export const ArticleCards = ({ articles }) => {
  
  return articles.map((article) => {
    const date = new Date(article.created_at).toDateString()
    return (
      <li className="article-card" key={article.article_id}>
        <h1>
          {article.title} by {article.author} 
        </h1>
        <img className="article-image" src={article.article_img_url} alt="" />
        <br />
        <p>{date}</p>
        <button>Votes: {article.votes}</button>
        <button>Comments: {article.comment_count}</button>
        <Link to={`/api/articles/${article.article_id}`}>View Article</Link>
      </li>
    );
  });
};
