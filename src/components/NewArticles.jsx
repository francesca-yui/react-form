import { useState } from 'react';

export const NewArticles = props => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState ('');

  return (
  <form onSubmit={e => {
      e.preventDefault();
      props.setArticles(articles => articles.concat(title, content));
      props.setTitle('');
      props.setContent('');
      }}>

      <input
      type="text"
      placeholder='New article title'
      value={title}
      onChange={ e => setTitle(e.target.value)}
      />
      <input
      type="text"
      placeholder='Content title'
      value={content}
      onChange={ e => setContent(e.target.value)}
      />

      <button type="submit">add article</button>
  </form>
  );
};


export default NewArticles;