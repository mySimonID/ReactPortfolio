import React from 'react'

function ExperienceCard(props) {

  var { exp } = props;

  return (
    <div className="experience">
      <div className="experience-title">
        <h3>{exp.title} - </h3>
         
          <p>{exp.role} - </p>
          <p>({exp.dates})</p>

      </div>
      <div className="experience-detail">
        <p>{exp.text}</p>
      </div>
    </div>
  )

}

export default ExperienceCard
