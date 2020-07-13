import React from 'react';

import ArticleCard from './components/ArticleCard'
import SkillsCard from './components/SkillsCard'

import {articles, skills} from './data/Content'

import './App.css';



function App() {
  return (
    <div className="App">
      <div class="jumbotron jumbotron-fluid">
        <div class="container">

          <h1 class="display-4">Simon Joyce</h1>
          <h2 class="lead">project manager / software engineer - portfolio</h2>
        </div>
      </div>

      <div class="body-container">
        <h1 class="heading">Title</h1>
        <h1 class="sub-text">This is a title</h1>
      </div>

      <div className="row">
        {articles.map(article => {
          return (
            <ArticleCard article={article} />
          )
        })}

      </div>

      <section>
        <div class="feature-row">
          <div class="feature-container">
            <div class="feature-title">

              <h2>Example Work</h2>
            </div>

            <div class="row">
              {skills.map(skill => {
                return (
                  <SkillsCard skill={skill} />
                )
              })
              }
            </div>

          </div>
        </div>
      </section>


      <footer>
        <p>Author: Simon Joyce</p>
        <p><a href="mailto:sj@example.com">sj@example.com</a></p>
      </footer>
    </div>
  );
}

export default App;
