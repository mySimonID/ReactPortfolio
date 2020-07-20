import React from 'react'
import TagItem from './TagItem'

function tags(props) {

  const { tagList } = props;

  return (
    <div className="row tagRow">
      {tagList.split(',').map(tag => {
        return(
          <div><TagItem tag={tag} /></div>
        )
      })}
    </div>
  )

}

export default tags;
