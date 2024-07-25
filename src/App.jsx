import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Articles } from "./components/Articles";
import { Routes, Route } from "react-router-dom";
import { IndividualArticle } from "./components/IndividualArticle";
import { DefaultErrorPage } from "./components/DefaultErrorPage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  const [articles, setArticles] = useState([]);
  const [grid, setGrid] = useState('home-view')

  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <div id="browser-nav">
        <Navbar setArticles={setArticles} />
      </div>
      <main className={`container ${grid}`}>
        <div id="mobile-nav">
          <Navbar setArticles={setArticles} setGrid={setGrid} />
        </div>
        <Header />
        <Routes>
          <Route path="*" element={<DefaultErrorPage />} />
          <Route
            path="/"
            element={<Articles articles={articles} setArticles={setArticles} setGrid={setGrid} />}
          />
          <Route
            path="/api/articles"
            element={<Articles articles={articles} setArticles={setArticles} />}
          />
          <Route 
            path="/api/articles/:article_id"
            element={<IndividualArticle />}
          />
          <Route 
            path="/api/:topic"
            element={<Articles articles={articles} setArticles={setArticles} setGrid={setGrid}/>}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
