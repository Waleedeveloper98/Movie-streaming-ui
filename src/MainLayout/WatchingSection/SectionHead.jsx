
import React from 'react'
import SectionTitle from '../../GeneralComponents/SectionTitle'
import SecondaryButton from '../../GeneralComponents/SecondaryButton'

const SectionHead = () => {
  return (
    <div className='px-2 md:px-0 w-full flex items-center justify-between'>
      <SectionTitle text={"You Might Like"}/>
      <SecondaryButton text={"See all"}/>
    </div>
  )
}

export default SectionHead