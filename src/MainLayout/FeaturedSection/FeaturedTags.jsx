import React from 'react'
import Tag from '../../GeneralComponents/Tag'

const FeaturedTags = () => {
  return (
    <div className='flex items-center gap-4'>
      {["Drama","Fantasy"].map((t,indx)=> <Tag key={indx} text={t} />)}
    </div>
  )
}

export default FeaturedTags