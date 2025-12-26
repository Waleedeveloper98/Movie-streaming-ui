import React from 'react'

const Title = ({text}) => {
  return (
    <h1 className='font-medium text-3xl md:text-4xl md:w-4/5 lg:w-2/5 tracking-tight'>{text}</h1>
  )
}

export default Title