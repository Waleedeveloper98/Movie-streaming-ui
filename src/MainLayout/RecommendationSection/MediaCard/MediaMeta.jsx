import React from 'react'

const MediaMeta = () => {
  return (
    <div className='flex items-center justify-between'>
      <div className="episode_season">
        <p className='text-xs px-2 py-1 rounded-full bg-white/30 border border-white/20'>S1, Ep-3</p>
      </div>
      <div className="time text-xs">
        <p>30min 55sec</p>
      </div>
    </div>
  )
}

export default MediaMeta