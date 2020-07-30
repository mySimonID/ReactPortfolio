import React, { Component } from 'react'

import { getSkill, getArticlesForSkill } from '../data/Content'
import ArticleCard from './ArticleCard2'

class SkillsPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      skill: [],
      articles: []
    }
  }
  // var {article} = props.location;

  //var article = { id: '001', title: 'First article', detail: 'This is some detail', link: 'article' };

  componentWillMount = () => {

    var skill = getSkill(this.state.id);
    var articles = getArticlesForSkill(this.state.id);

    // console.log(this.state.articles);

    this.setState({
      //article:  { id: '001', title: 'First article', detail: 'This is some detail', link: 'article' }
      skill: skill,
      articles: articles
    })

    // console.log(this.state.articles);
  }

  render() {

    return (
      <div className="col-12 col-sm-12 col-lg-12">

        <div className="article-page">

          <h1>{this.state.skill.title} projects</h1>
      
          <div>
            {this.state.articles.length > 0 ?
              <div className="row">
                {this.state.articles.map((article, index) => {
                  return (
                    <ArticleCard key={index} article={article} />
                  )
                })}
              </div>
              : <div>There are no articles documented yet</div>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsPage;
