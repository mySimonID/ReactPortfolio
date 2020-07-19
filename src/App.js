import React from 'react';


import SkillsCard from './components/SkillsCard'
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'

import { skills, experience, education } from './data/Content'

import './App.css';

function App() {
  return (
    <div className="App">

      <div className="aboutme">
        <h1>About Me</h1>
        <p>I am an experienced Business and Technical Project Manager with over 20 years of experience in a number of industries delivering a range of
        different infrastructure, process and software projects.
        </p>
        <p>Alongside my project management work, I have also innovated a number of software solutions.</p>
        <p>My ideal role would involve working with software development and delivery.</p>
        <p><b>Industries:</b> Engineering, Data Insight, Agency, Retail and Automotive.</p>
      </div>

 
      <div className="aboutme">
        <h1>Education</h1>
        {
          education.map(exp => <EducationCard exp={exp} />)
        }
      </div>

      <div className="aboutme">
        <h1>Work Experience</h1>
        {
          experience.map(exp => <ExperienceCard exp={exp} />)
        }
      </div>

      <section>
        <div class="feature-row">

          <div class="feature-container">
            <div class="feature-title">

              <h2>Example Projects</h2>
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
