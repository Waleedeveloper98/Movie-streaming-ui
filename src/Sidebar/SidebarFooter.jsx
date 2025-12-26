import { LogOut } from 'lucide-react'
import React from 'react'

const SidebarFooter = () => {
  return (
    <div className='flex items-center gap-4 my-4 cursor-pointer'>
      <LogOut size={18}/>
      <h4 className='text-xs'>Logout</h4>
    </div>
  )
}

export default SidebarFooter