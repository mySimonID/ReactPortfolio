import React, { Component } from 'react'

import { getArticle } from '../data/Content'

import ArticleReader from './ArticleReader'

class ArticlePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      article: []
    }
  }

  componentDidMount = () => {

    const article = getArticle(this.state.id);

    this.setState({
      article: article
    })
  }

  render() {

    console.log(">>>" + this.state.article.file );
    var fileName = this.state.article.file ? this.state.article.file : "unknown.txt"

    fileName = "../content/" + fileName;
    console.log(fileName);

    return (
      <div className="col-12 col-sm-12 col-lg-12">

        <div className="article-page">

          <h1>{this.state.article.title}</h1>
          <p>{this.state.article.detail}</p>
          <ArticleReader txt={fileName} />
        </div>

      </div>
    )
  }
}

export default ArticlePage;