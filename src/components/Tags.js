import React from 'react'

function tags(props) {

  const { tagList } = props;

  return (
    <div>
      {tagList.map(tag => {
        return(
          {tag}
        )
      })}
    </div>
  )

}

export default tags;
