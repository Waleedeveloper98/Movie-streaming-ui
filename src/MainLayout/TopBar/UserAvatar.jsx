import { Crown } from 'lucide-react'
import React from 'react'

const UserAvatar = () => {
  return (
    <div className='w-10 h-10 rounded-full bg-amber-400 relative'>
      <img className='size-full object-cover rounded-full' src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="user" />

    <div className="crown bg-yellow-500 absolute top-0 right-0 rounded-full flex items-center justify-center size-3">
      <Crown size={11} />
    </div>

    </div>
  )
}

export default UserAvatar