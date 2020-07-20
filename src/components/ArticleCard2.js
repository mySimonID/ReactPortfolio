import React from 'react'
import { Link } from 'react-router-dom'

function ArticleCard(props) {

  const { article } = props;

  return (
    <div className="col-6 col-sm-6 col-lg-6">
      <div className="article-card shadow">
        <Link  to={{ pathname: '/article/' + article.id, article: article }}>
          
          <div className="card-body">
            <h3>{article.title}</h3>
            <p className="card-text">{article.detail}</p>

          </div>
        </Link>
      </div>

    </div>
  )
}

export default ArticleCard;
