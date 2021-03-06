import React from 'react'
import { Link } from 'react-router-dom'

function ArticleCard(props) {

  const { article } = props;

  return (
    <div className="col-6 col-sm-6 col-lg-6">
      <div className="card shadow">
        <Link  to={{ pathname: '/article/' + article.id, article: article }}>
          <img className="card-img-top" src="/img/img_avatar3.png" alt="article" />
          <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.detail}</p>

          </div>
        </Link>
      </div>

    </div>
  )
}

export default ArticleCard;
