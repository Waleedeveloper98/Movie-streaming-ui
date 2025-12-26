import React from 'react'

const MediaTitle = ({title}) => {
  return (
    <>
    {title && <h4 className='font-medium'>{title}</h4>}
    </>
  )
}

export default MediaTitle