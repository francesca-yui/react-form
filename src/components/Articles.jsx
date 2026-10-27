import './Articles.css';

export const Articles = props => (
  <ul>
      {props.articles.map(article => (
        <li key={article.title}>
          {article.title}
          <button onClick={() => setArticles(articles.filter(_article => _article !== article))}>delete</button>
        </li>
      ))}
  </ul>
);

export default Articles;