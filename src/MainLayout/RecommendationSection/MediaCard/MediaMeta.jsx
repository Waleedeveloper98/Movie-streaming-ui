import React from 'react'

const MediaMeta = ({episode,time}) => {
  return (
    <div className='flex items-center justify-between'>
      <div className="episode_season">
        <p className='text-xs px-2 py-1 rounded-full bg-white/30 border border-white/20'>{episode}</p>
      </div>
      <div className="time text-xs">
        <p>{time}</p>
      </div>
    </div>
  )
}

export default MediaMeta