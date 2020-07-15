import React from 'react'

function ArticlePage(props) {

  console.log(props);

  // var {article} = props.location;

  var article = { id: '001', title: 'First article', detail: 'This is some detail', link: 'article' };

  return (
    <div className="col-12 col-sm-12 col-lg-10">
      <div className="article-page">

        <h1>{article.title}</h1>
        <p>{article.detail}</p>

      </div>
    </div>
  )
}

export default ArticlePage;
