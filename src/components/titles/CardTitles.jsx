import React from 'react'

const CardTitles = ({title, text}) => {
  return (
    <div className='text-center my-6'>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{__html: text}} className='text-secondary my-5'></div>
    </div>
  )
}

export default CardTitles