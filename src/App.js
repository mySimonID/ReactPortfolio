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


      {/* EDUCATION */}
      <div className="aboutme shadow">
        <h1>Education</h1>
        {
          education.map(exp => <EducationCard key={exp.id} exp={exp} />)
        }
      </div>

      {/* EXPERIENCE */}
      <div className="aboutme shadow">
        <h1>Work Experience</h1>
        {
          experience.map(exp => <ExperienceCard key={exp.id} exp={exp} />)
        }
      </div>

      {/* CURRENT PROJECTS */}
      <section>
        <div className="aboutme shadow">
          <h1>Active Projects</h1>
          <CurrentProjectsPage filename={'./content/issueJ001.txt'} />
        </div>
      </section>

      {/* PROJECT PORTFOLIO */}
      <section>
        <div className="feature-row shadow"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/img/background01.jpg)`,
          }}
        >

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




      <footer>
        <div className="footerLink">
          <p>Contact: <a href="mailto:mySimonID@gmail.com">mySimonID@gmail.com</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
