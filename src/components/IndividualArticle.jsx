import { useParams } from "react-router-dom";
import { fetchIndividualArticle, updateVotes } from "../utils/apicalls";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";

export const IndividualArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toggleComments, setToggleComments] = useState(false);
  const [votes, setVotes] = useState()
  const [err, setErr] = useState(null)

  useEffect(() => {
    fetchIndividualArticle(article_id).then((response) => {
      setLoading(false);
      setArticle(response.data.article);
      setVotes(response.data.article.votes)
    });
  }, [article_id]);

   const handleClick = () => {
    toggleComments ? setToggleComments(false) : setToggleComments(true);
  };

  const handleVote = (event) => {
    const plusOrMinus = event.target.id
    let inc_votes = 1
    if(plusOrMinus === 'minus'){inc_votes = -1}
    
    setVotes(votes + inc_votes)
    updateVotes(article_id, 'hello').catch((err) => {
      console.log('err')
      setVotes(votes - inc_votes)
      setErr('Something went wrong, log in to vote on articles')
    })
    
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  
 
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
        <fieldset>
        <legend>Votes {votes}</legend>
        <button id="minus" onClick={handleVote}>-</button>
        <button id="plus" onClick={handleVote}>+</button>
        {err ? <p>{err}</p> : null}
        </fieldset>
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
