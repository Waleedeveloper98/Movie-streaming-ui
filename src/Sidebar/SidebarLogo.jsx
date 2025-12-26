import { TvMinimalPlay } from 'lucide-react'
import React from 'react'

const SidebarLogo = () => {
  return (
    <div className='flex items-center gap-2'>
      <TvMinimalPlay />
      <h2 className='font-semibold text-lg'>Drameeo</h2>
    </div>
  )
}

export default SidebarLogo