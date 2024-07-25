import { useEffect, useState } from "react";
import { fetchTopics } from "../utils/apicalls";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const TopicButtons = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((response) => {
      setTopics(response.data.topics);
    });
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

 
  const buttons = topics.map((topic) => {
    return (
      <Link
        key={topic.slug}
        id={topic.slug}
        to={`/api/articles?topic=${topic.slug}`}
        className="nav-button"
      >
        {topic.slug}
      </Link>
    );
  });

  const allArticles = (
    <Link className="nav-button" to={"/api/articles"}>
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
