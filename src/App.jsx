import './App.css'
import {Header} from './components/header'
import { Navbar } from './components/navbar'
import { Articles } from './components/articles'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

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
  </Routes>
  </div>
  </div>
 )
}

export default App
