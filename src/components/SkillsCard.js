import React from 'react'

function SkillsCard(props) {

  const { skill } = props;

  return (
    <div class="col-6 col-md-6 col-lg-3">
      <div class="feature-box">
        <i class="material-icons feature-box__icon">{skill.icon}</i>
        <h3 class="feature-box-heading u-margin-bottom-small">{skill.title}</h3>

        <ul>
          {skill.items.map(item => <li>{item}</li>)}
        </ul>
        <p></p>
      </div>
    </div>
  )
}

export default SkillsCard;
