import React, { Component } from 'react'

import ArticleReader from './ArticleReader'

class CurrentProjectsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      article: []
    }
  }

  componentDidMount = () => {

  }

  render() {

    return (
      <div>

      
          <ArticleReader filename={this.props.filename} />
    

      </div>
    )
  }
}

export default CurrentProjectsPage;
