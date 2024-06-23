import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";


export const ScrollToTop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const topicQuery = searchParams.get("topic")
  const { pathname } = useLocation();
  
  useEffect(() => {
    console.log
    window.scrollTo(0, 0);
  }, [pathname, topicQuery]);

  return null;
}