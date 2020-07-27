import React from 'react';


import SkillsCard from './components/SkillsCard'
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'

import { skills, experience, education } from './data/Content'

import './App.css';
import './Article.css'
import './Skills.css'



function App() {
  return (
    <div className="App">

      <div className="aboutme shadow">
        <h1>About Me</h1>
        <p>I am an experienced Business and Technical Project Manager with over 20 years of experience in a number of industries delivering a range of
        different infrastructure, process and software projects using both Waterfall and Agile methods.
        </p>
        <p>Using a flexible approach to my work, I have on occasion filled the roles of Business Analyst, Tester and Developer.</p>
        <p>KPI's:</p>
        <ul>
          <li>Successful delivery of projects involved on time and budget.</li>
          <li>Managed requirements to ensure correct project delivery.</li>
          <li>Performed system analysis to aid with understanding and system testing.</li>
          <li>Lead, mentored, monitored and managed multi-disciplined teams through different phases of projects.</li>
          <li>Suggested the best course of action to management on project delivery.</li>
          <li>Innovated a number of solutions, including RPA.</li>
        </ul>

        <p>Originally from a developer background, I maintain a firm interest in software development and I continue to develop a number software projects (see below).</p>
        <p><b>Industries:</b> Transport, Engineering, Data Insight, Agency, Retail and Automotive.</p>
      </div>


      <div className="aboutme shadow">
        <h1>Education</h1>
        {
          education.map(exp => <EducationCard exp={exp} />)
        }
      </div>

      <div className="aboutme shadow">
        <h1>Work Experience</h1>
        {
          experience.map(exp => <ExperienceCard exp={exp} />)
        }
      </div>

      <section>
        <div class="feature-row shadow"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/background01.jpg)`,
          }}
        >

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
        <div className="footerLink">
          <p>Contact: <a href="mailto:mySimonID@gmail.com">mySimonID@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
