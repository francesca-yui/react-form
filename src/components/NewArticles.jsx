import { useState } from 'react';
import './NewArticles.css'; 
import { IcofontUiAdd } from "./icons/IcofontUiAdd ";

export const NewArticles = props => {
  const [ formArticle, setFormArticles ] = useState ({
    title: '',
    author: '',
    content: '',
    public: false,
  });

  const handleFormChange = e => {
    const value = 
    e.target.type === 'checkbox' ?
    e.target.checked : e.target.value;

    setFormArticles(
      formArticle => ({
      ...formArticle,
      [e.target.name]: value
    }))
  };
  
  return (
  <form onSubmit={e => {
      e.preventDefault();
      
      props.setArticles(currentArticles =>
      currentArticles.concat(formArticle));

      setFormArticles({
        title: '',
        author: '',
        content: '',
        public: false,
      });
      }}>

      <input
      type="text"
      name="title"
      placeholder='New title'
      value={formArticle.title}
      onChange={handleFormChange}
      />
      <input
      type="text"
      name="author"
      placeholder='Author'
      value={formArticle.author}
      onChange={handleFormChange}
      />
      <input
      type="text"
      name="content"
      placeholder='Content'
      value={formArticle.content}
      onChange={handleFormChange}
      />
    <label className="checkbox-row">
      Public article
      <input
        type="checkbox"
        name="public"
        checked={formArticle.public}
        onChange={handleFormChange}
      />
    </label>
      
      <button type="submit">
      <IcofontUiAdd/>
      add article</button>
  </form>
  );
};


export default NewArticles;