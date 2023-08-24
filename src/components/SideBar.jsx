import React from 'react'
import {sidebarLinks} from "../data/link"
import { NavLink } from 'react-router-dom'
import { matchPath } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const SideBar = () => {
  const location = useLocation();
   //function to match route by comparing the passed route and a current location route path
   const matchRoute = (route)=>{
    return matchPath( {path:route},location.pathname);
}



  return (
<div>

<div  className="flex flex-wrap lg:h-[calc(100vh-3.5rem)] min-w-[220px] flex-row lg:flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800 py-10">

    <div className=' flex flex-row lg:flex-col flex-wrap gap-8'>
        {
          sidebarLinks.map( (element)=>{
            return(
                <div key={element.id}>
                   <NavLink to={element.path} className={ ` relative px-8 py-2 text-sm font-medium ${matchRoute(element.path) ?   "bg-blue-800 text-yellow-50"
                    : "bg-opacity-0 text-richblack-300"
                      } transition-all duration-200`}>
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