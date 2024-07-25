import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/apicalls";
import { Link } from "react-router-dom";

export const TopicButtons = () => {
  const [topics, setTopics] = useState([]);

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
    e.preventDefault();
    window.location.href;
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
      <button className="home-button" onClick={handleClick}>
        home
      </button>
      {allArticles}
      {buttons}
    </nav>
  );
};
