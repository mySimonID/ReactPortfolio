import React from 'react'

function SkillsCard(props) {

  const { skill } = props;

  return (
    <div className="col-6 col-md-6 col-lg-3">
      <a href={`skill/${skill.id}`} alt='skills'>
        <div className="skills-card">
          <i className="material-icons feature-box_icon">{skill.icon}</i>
          <h3 className="skills-card-heading u-margin-bottom-small">{skill.title}</h3>

          <ul>
            {skill.items.map(item => <li>{item}</li>)}
          </ul>
          <p></p>
        </div>
      </a>
    </div>
  )
}

export default SkillsCard;
