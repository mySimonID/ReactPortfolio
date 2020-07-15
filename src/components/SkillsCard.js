import React from 'react'

function SkillsCard(props) {

  const { skill } = props;

  return (
    <div className="col-6 col-md-6 col-lg-3 links">
      <a href='article' alt='skills'>
        <div className="feature-box">
          <i className="material-icons feature-box__icon">{skill.icon}</i>
          <h3 className="feature-box-heading u-margin-bottom-small">{skill.title}</h3>

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
