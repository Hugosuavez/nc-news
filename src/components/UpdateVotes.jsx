import { useEffect, useState } from "react";
import { updateArticleVotes } from "../utils/apicalls";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UpdateVotes = ({ article }) => {
  const { username } = useContext(UserContext);

  const [votes, setVotes] = useState(article.votes);

  const [err, setErr] = useState(null);
  const [userVoted, setUserVoted] = useState();

  const handleVote = (event) => {
    if (username) {
      let inc_votes = 1;
      if (userVoted) {
        setUserVoted(false);
        inc_votes = -1;
      }
      if (!userVoted) {
        setUserVoted(true);
        inc_votes = 1;
      }

      setVotes((currentCount) => currentCount + inc_votes);

      updateArticleVotes(article.article_id, inc_votes)
        .then(() => {
          setErr(null);
        })
        .catch((err) => {
          setUserVoted((current) => !current);
          setVotes((currentCount) => currentCount - 1);
          setErr("Something went wrong, please try again");
        });
    } else setErr("Please log in to vote");
  };

 
  if(article.author === username){
    return (<>
        <p className="vote-tag">Votes: {votes}</p>
    </>)
  }
  return (
    <>
      <label className="vote-tag">
        Votes: {votes}
        <button className="vote-button" onClick={handleVote}>
          {userVoted ? "-" : "+"}
        </button>
        {err ? <p className="error-message">{err}</p> : null}
      </label>
    </>
  );
};
