import React from 'react'
// import CaseWithDate from "../graphs/caseWithDate";
// import WorldWide from "../graphs/worldWide";
// import LeafletMap from "../map/leafletMap";
import { NavLink } from 'react-router-dom';

const Index = () => {
  return (
    <div className=' flex flex-col gap-y-11 '>

        <NavLink to={"/dashboard/maps-charts/graph-data"} className=" border-[2px] border-solid">
         Graph  for Covid cases with date
        </NavLink>

        <NavLink to={"/dashboard/maps-charts/line-chart"} className=" border-[2px] border-solid">
        Line chart  for World wide cases
        </NavLink>

        <NavLink to={"/dashboard/maps-charts/map"} className=" border-[2px] border-solid">
          Map for Country Covid Info
        </NavLink>
      
    </div>
  )
}

export default Index