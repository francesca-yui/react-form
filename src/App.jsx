import { useState } from 'react';
import './App.css';
import { Articles } from './components/Articles.jsx';
import { NewArticles } from './components/NewArticles.jsx';
import { firstArticles } from './data/firstArticles.js';

export const App = () => {
  const [articles, setArticles] = useState(firstArticles);

  return (
    <>
    <header><h1>Upload article</h1></header>
    
    <main>

      <Articles
      articles={articles}
      setArticles={setArticles}
      />
      <NewArticles
      setArticles={setArticles}
      />
      
    </main>
    </>
  )
};

export default App;