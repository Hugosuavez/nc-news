import './App.css'
import {Header} from './components/Header'
import { Navbar } from './components/Navbar'
import { Articles } from './components/Articles'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { IndividualArticle } from './components/IndividualArticle'
import { DefaultErrorPage } from './components/DefaultErrorPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
function App() {

const [articles, setArticles] = useState([])

 return (<div className='container'>
  <div className='header'>
    <ToastContainer/>
  <Header />
  </div>
  <div className='sidebar'>
  <Navbar setArticles={setArticles} />
  </div>
  <div className='content'>
  <Routes>
    <Route path="*" element={<DefaultErrorPage />} />
    <Route path="/" element={<Articles articles={articles} setArticles={setArticles}/>} />
    <Route path="/api/articles/:article_id" element={<IndividualArticle />}/>
    <Route path="/api/articles" element={<Articles articles={articles} setArticles={setArticles} />}/>
  </Routes>
  </div>
  </div>
 )
}

export default App
