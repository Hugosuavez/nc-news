import { useEffect, useState } from "react";
import { fetchArticles } from "../utils/apicalls";
import { ArticleCards } from "./ArticleCards";
import { PageButtons } from "./Pagebuttons";
import { useParams, useSearchParams } from "react-router-dom";
import { ArticleQueries } from "./ArticleQueries";
import { ErrorPage } from "./ErrorPage";
import { ClimbingBoxLoader } from "react-spinners";

export const Articles = ({ articles, setArticles, setGrid }) => {
  const [totalArticles, setTotalArticles] = useState(0);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState(null);

  const { topic } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  useEffect(() => {
    
    fetchArticles(pageNumber, topic, sortByQuery, orderQuery)
      .then((body) => {
        setLoading(false);
        setArticles(body.data.articles);
        setTotalArticles(body.data.total_count);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [topic, sortByQuery, orderQuery, pageNumber]);

  if (loading) {
    return (
      <div className="spinner-container">
        <ClimbingBoxLoader />
      </div>
    );
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return (
    <>
      <ArticleQueries
        setSearchParams={setSearchParams}
        setPageNumber={setPageNumber}
      />
      <ArticleCards articles={articles} setGrid={setGrid} />
      <PageButtons
        totalArticles={totalArticles}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </>
  );
};
