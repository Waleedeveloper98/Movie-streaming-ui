import React from 'react'
import TopBar from './TopBar/TopBar'

const MainLayout = () => {
  return (
    <div className='flex-1 h-full text-white bg-[var(--color-primary)] rounded-xl p-2 px-4'>
      <TopBar/>
    </div>
  )
}

export default MainLayout