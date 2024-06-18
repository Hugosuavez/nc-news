import './App.css'
import {Header} from './components/Header'
import { Navbar } from './components/Navbar'
import { Articles } from './components/Articles'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { IndividualArticle } from './components/IndividualArticle'

function App() {
const [articles, setArticles] = useState([])
 
 return (<div className='container'>
  <div className='header'>
  <Header />
  </div>
  <div className='sidebar'>
  <Navbar />
  </div>
  <div className='content'>
  <Routes>
    <Route path="/" element={<Articles articles={articles} setArticles={setArticles} />} />
    <Route path="/api/articles/:article_id" element={<><IndividualArticle /></>}/>
  </Routes>
  </div>
  </div>
 )
}

export default App
