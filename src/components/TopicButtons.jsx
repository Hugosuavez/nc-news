import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/apicalls";
import { Link } from "react-router-dom";

export const TopicButtons = ({ setGrid }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics()
      .then((response) => {
        setTopics(response.data.topics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    setGrid("home-view");
  };

  const buttons = topics.map((topic) => {
    return (
      <Link
        key={topic.slug}
        id={topic.slug}
        to={`/api/${topic.slug}`}
        className="nav-button"
        onClick={handleClick}
      >
        {topic.slug}
      </Link>
    );
  });

  const allArticles = (
    <Link className="nav-button" to={"/api/articles"} onClick={handleClick}>
      all
    </Link>
  );

  return (
    <nav>
      <Link className="nav-button" to={"/"} onClick={handleClick}>
        home
      </Link>
      {allArticles}
      {buttons}
    </nav>
  );
};
