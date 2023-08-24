import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'

const dashboard = () => {
  return (
    <div className="relative  flex-wrap flex min-h-[calc(100vh-3.5rem)]">

      {/* sidebar for links */}
       <SideBar/>
    {/* used outlet show child route */}
    <div className='h-[calc(100vh-3.5rem)] overflow-auto flex-1 '>
                    <div className=' mx-auto w-11/12 max-w-[1000px] py-10'>
                    <Outlet/>
                    </div>
            </div>
        
    </div>
  )
}

export default dashboard