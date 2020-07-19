import React from 'react'

function EducationCard(props) {

  var { exp } = props;

  return (
    <div className="experience">
      <div className="experience-title">
        <p>{exp.title}</p>
      </div>
    </div>
  )
}

export default EducationCard
