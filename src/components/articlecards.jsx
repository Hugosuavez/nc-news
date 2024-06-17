export const ArticleCard = ({ articles }) => {
  
  return articles.map((article) => {
    return (
      <li className="article-card" key={article.article_id}>
        <h1>
          {article.title} by {article.author} {article.created_at}
        </h1>
        <img className="article-image" src={article.article_img_url} alt="" />
        <br />
        <button>Votes: {article.votes}</button>
        <button>Comments: {article.comment_count}</button>
      </li>
    );
  });
};
