import React from 'react'

import {Link} from 'react-router-dom';

function SkillsCard(props) {

  const { skill } = props;

  return (
    <div className="col-6 ">
      <Link to={`/skill/${skill.id}`} >
        <div className="skills-card">
          <i className="material-icons feature-box-icon">{skill.icon}</i>
          <h3 className="skills-card-heading u-margin-bottom-small">{skill.title}</h3>

          <ul>
            {skill.items.map(item => <li>{item}</li>)}
          </ul>
          <p></p>
        </div>
      </Link>
    </div>
  )
}

export default SkillsCard;
