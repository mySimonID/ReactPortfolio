import React from 'react'

function ArticleCard(props) {

  const { article } = props;

  return (
    <div className="col-6 col-sm-6 col-lg-3">
      <div className="card article-card-area links">
      <a href={article.link} class="btn btn-primary">
        <img className="card-img-top" src="img/img_avatar3.png" alt="article" />
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.detail}</p>
          
        </div>
        </a>
      </div>
      
    </div>
  )
}

export default ArticleCard;
