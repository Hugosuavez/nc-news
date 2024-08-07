import ScrollIntoView from "react-scroll-into-view";
export const PageButtons = ({
  totalArticles,
  pageNumber,
  setPageNumber,
}) => {
  const handleClick = (event) => {
    const page = event.target.id;
    setPageNumber(page);
  };

  const buttonArray = [];
  const pages = Math.ceil(totalArticles / 10);

  let totalButtons = totalArticles / 10;
  let i = 1;

  while (totalButtons > 0) {
    buttonArray.push(
      <button id={i} key={i} onClick={handleClick}>
        {i}
      </button>
    );
    totalButtons--;
    i++;
  }
  return (
    <section className="footer">
      <ScrollIntoView selector="#top">{buttonArray}</ScrollIntoView>
      <p>
        Viewing page {pageNumber} of {pages}
      </p>
      <p>Total Results {totalArticles}</p>
    </section>
  );
};
