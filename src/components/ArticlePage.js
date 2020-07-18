import React, { Component } from 'react'

import { getArticle } from '../data/Content'

class ArticlePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      article: []
    }
  }

  componentWillMount = () => {

    const article = getArticle(this.state.id);

    this.setState({
      article:article
    })
  }

  render() {
    return (
      <div className="col-12 col-sm-12 col-lg-10">

        <div className="article-page">

          <h1>{this.state.article.title}</h1>
          <p>{this.state.article.detail}</p>
        </div>

      </div>
    )
  }
}

export default ArticlePage;
