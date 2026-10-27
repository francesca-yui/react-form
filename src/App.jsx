import { useState } from 'react';
import './App.css';
import { Articles } from './components/Articles.jsx';
import { NewArticles } from './components/NewArticles.jsx';

export const App = () => {
  const [articles, setArticles] = useState([]);

  return (
    <>
    <header><h1>Upload article</h1></header>
    
    <main>
      <Articles articles={articles} />
      <NewArticles setArticles={NewArticles} />
    </main>
    </>
  )
};