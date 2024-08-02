import React from 'react'

const Titles = ({title, text}) => {
  return (
    <div className='text-center'>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{__html: text}} className='text-secondary my-7'></div>
    </div>
  )
}

export default Titles
