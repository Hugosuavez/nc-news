import { TopicButtons } from "./TopicButtons";

export const Navbar = ({ setArticles, setGrid }) => {
  return (
    <nav className="navbar">
      <TopicButtons setArticles={setArticles} setGrid={setGrid}/>
    </nav>
  );
};
