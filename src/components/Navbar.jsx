import { TopicButtons } from "./TopicButtons";

export const Navbar = ({ setArticles }) => {
  return (
    <nav className="navbar">
      <TopicButtons setArticles={setArticles} />
    </nav>
  );
};
