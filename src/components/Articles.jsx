import './Articles.css';
import { IcofontBin } from "./icons/IcofontBin";

export const Articles = props => (
  <ul>
      {props.articles.map(article => (
        <li key={article.title}>
          <p className='author'>{article.author}</p>
          <h2>{article.title}</h2>
          <p className='content'>{article.content}</p>
          <p className="public">{article.public ? 'Public' : 'Draft'}</p>
                    
          <button className="delete-button" onClick={() => 
          props.setArticles(
            props.articles.filter(_article => _article !== article)
          )}>
            <IcofontBin/></button>
        </li>
      ))}
  </ul>
);

export default Articles;