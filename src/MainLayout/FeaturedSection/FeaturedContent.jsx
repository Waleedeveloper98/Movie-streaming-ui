import React from 'react'
import Title from '../../GeneralComponents/Title'
import Description from '../../GeneralComponents/Description'

const FeaturedContent = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Title text={"Dimensional Kids on an Adventure"}/>
      <Description details={"When two curious kids stumble into a hidden portal, they travel across magical dimensions while trying to find their way home...."}/>
    </div>
  )
}

export default FeaturedContent