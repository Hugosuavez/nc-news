import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/apicalls";
import { Link, useNavigate } from "react-router-dom";

export const TopicButtons = ({ setGrid }) => {
  const [topics, setTopics] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchTopics().then((response) => {
      setTopics(response.data.topics);
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = `/`;
  };
  const handleTopic = () => {
    setGrid("home-view");
  };

  const buttons = topics.map((topic) => {
    return (
      <Link
        key={topic.slug}
        id={topic.slug}
        to={`/api/${topic.slug}`}
        className="nav-button"
        onClick={handleTopic}
      >
        {topic.slug}
      </Link>
    );
  });

  const allArticles = (
    <Link className="nav-button" to={"/api/articles"} onClick={handleTopic}>
      all
    </Link>
  );

  return (
    <nav>
      <Link className="nav-button" onClick={handleClick}>
        home
      </Link>
      {allArticles}
      {buttons}
    </nav>
  );
};
