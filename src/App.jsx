import './App.css'
import {Header} from './components/Header'
import { Navbar } from './components/Navbar'
import { Articles } from './components/Articles'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { IndividualArticle } from './components/IndividualArticle'
import { DefaultErrorPage } from './components/DefaultErrorPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

const [articles, setArticles] = useState([])

 return (<>
    <ToastContainer/>
 <main className='container'>
    <Header />
    <Navbar setArticles={setArticles} />
    <Routes>
     <Route path="*" element={<DefaultErrorPage />} />
      <Route path="/" element={<Articles articles={articles} setArticles={setArticles}/>} />
     <Route path="/api/articles" element={<Articles articles={articles} setArticles={setArticles} />}/>
     <Route path="/api/articles/:article_id" element={<IndividualArticle />}/>
    </Routes>
  </main>
  </>
 )
}

export default App
