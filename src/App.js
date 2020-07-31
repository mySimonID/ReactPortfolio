import React from 'react';


import SkillsCard from './components/SkillsCard'
import ExperienceCard from './components/ExperienceCard'
import EducationCard from './components/EducationCard'
import CurrentProjectsPage from './components/CurrentProjectsPage'

import { skills, experience, education } from './data/Content'

import './App.css';
import './Article.css'
import './Skills.css'



function App() {
  return (
    <div className="App">

      {/* ABOUT ME */}
      <div className="aboutme shadow">
        <h1>About Me</h1>
        <p>I am an experienced Business and Technical Project Manager with over 20 years of experience in a variety of industries delivering a range of
        different infrastructure, process and software projects using both Waterfall and Agile methods.
        </p>
        <p>Using a flexible approach to my work, I have on occasion filled the roles of Business Analyst, Tester and Developer.</p>
        <p>KPI's:</p>
        <ul>
          <li>Successful delivery of a number of projects on time and within budget.</li>
          <li>Managed requirements to ensure accurate project delivery.</li>
          <li>Performed system analysis to aid understanding and system testing.</li>
          <li>Managed multi-disciplined teams, through different phases of projects.</li>
          <li>Offered solutions to management on the best approach for project delivery.</li>
          <li>Able to prioritise and manage several complex projects at one time.</li>
          <li>Able to successfully coordinate third party providers to deliver solutions.</li>
          <li>Innovated a number of solutions, e.g using RPA to deploy users globally.</li>
        </ul>

        <p>Originally from a developer background, I maintain a firm interest in software 
              development and I continue to develop a number of software projects (see below).</p>
        <p><b>Industries:</b> Transport, Engineering, Data Insight, Agency, Retail and Automotive.</p>
      </div>


      {/* CURRENT PROJECTS */}
      <section>
        <div className="aboutme shadow">
          <h1>Active Projects</h1>
          <CurrentProjectsPage filename={`${process.env.PUBLIC_URL}/content/issueJ001.txt`} />

        </div>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section>
        <div className="feature-row shadow">

          <div className="feature-container">
            <div className="feature-title">

              <h2>Example Projects</h2>
            </div>

            <div className="row">
              {skills.map(skill => {
                return (
                  <SkillsCard key={skill.id} skill={skill} />
                )
              })
              }
            </div>

          </div>
        </div>
      </section>


      {/* EXPERIENCE */}
      <div className="aboutme shadow">
        <h1>Work Experience</h1>
        {
          experience.map(exp => <ExperienceCard key={exp.id} exp={exp} />)
        }
      </div>

      {/* EDUCATION */}
      <div className="aboutme shadow">

        <h1>Skills & Education</h1>
        <div className="skills-section">
          <p><b>Skills:</b> Project Management, Business Analysis, Programming, Testing/UAT, Innovation</p>
          <p><b>Software:</b> MS Office, MS Project, JIRA/Confluence, Visual Studio/Code</p>
          <p><b>Development:</b> Excel VBA, MS Project VBA, SQL, HTML, CSS, Javascript, React, Xamarin, C#, RPA</p>
        </div>
        <br />
        <div className="skills-section">
        <ul>
          {
            education.map(exp => {return(<li><EducationCard key={exp.id} exp={exp} /></li>)})
          }
          </ul>
        </div>
      </div>


      <footer>
        <div className="footerLink">
          <p>Contact: <a href="mailto:mySimonID@gmail.com">mySimonID@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
