
import React from 'react'
import SectionTitle from '../../GeneralComponents/SectionTitle'
import SecondaryButton from '../../GeneralComponents/SecondaryButton'

const SectionHead = () => {
  return (
    <div className='w-full flex items-center justify-between'>
      <SectionTitle text={"Continue Watching"}/>
      <SecondaryButton text={"See all"}/>
    </div>
  )
}

export default SectionHead