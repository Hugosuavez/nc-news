export const ArticleQueries = ({ setSearchParams, setPageNumber }) => {
  const handleChange = (event) => {
    setSearchParams(event.target.value);
    setPageNumber(1)
  };

  return (
    <nav className="query">
      <legend>
        {"Sort by "}
        <select className="dropdown" onChange={handleChange}>
          <option value="?sort_by=created_at">Most recent</option>
          <option value="?sort_by=created_at&order=ASC">Least Recent</option>
          <option value="?sort_by=comment_count">Most Comments</option>
          <option value="?sort_by=comment_count&order=ASC">Least Comments</option>
          <option value="?sort_by=votes">Most Votes</option>
          <option value="?sort_by=votes&order=ASC">Least Votes</option>
        </select>
      </legend>
    </nav>
  );
};
