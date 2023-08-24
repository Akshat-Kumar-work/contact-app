import React from 'react'
import {sidebarLinks} from "../data/link"
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
<div >

<div  className="flex flex-wrap lg:h-[calc(100vh-3.5rem)] min-w-[220px] flex-row lg:flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">

    <div className=' flex flex-row lg:flex-col flex-wrap'>
        {
          sidebarLinks.map( (element)=>{
            return(
                <div>
                   <NavLink to={element.path}>
                    {element.name}
                   </NavLink>
                </div>
            )
          })
        }
    </div>

    <div className="mx-auto mt-6 mb-6 h-[1px] w-10/12 bg-richblack-700"></div>

   

</div>

      
</div>
  )
}

export default SideBar