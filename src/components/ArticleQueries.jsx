export const ArticleQueries = ({ setSearchParams, searchParams }) => {
  const handleChange = (event) => {
    if (event.target.value === "ASC" || event.target.value === "DESC") {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("order", event.target.value);
      setSearchParams(newParams);
    } else {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("sort_by", event.target.value);
      setSearchParams(newParams);
    }
  };

  return (
    <nav className="query">
      <legend>
        {" "}
        {"Sort by "}
        <select className="dropdown" onChange={handleChange}>
          <option value="DESC">Most</option>
          <option value="ASC">Least</option>
        </select>
        <select className="dropdown" onChange={handleChange}>
          <option value="created_at">Recent</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
      </legend>
    </nav>
  );
};
