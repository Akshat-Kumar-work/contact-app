import React from 'react'
// import CaseWithDate from "../graphs/caseWithDate";
// import WorldWide from "../graphs/worldWide";
// import LeafletMap from "../map/leafletMap";
import { NavLink } from 'react-router-dom';

const Index = () => {
  return (
    <div className=' flex flex-col gap-y-3'>

        <NavLink to={"/dashboard/maps-charts/graph-data"}>
         Graph Data of Cases with Date
        </NavLink>

        <NavLink to={"/dashboard/maps-charts/line-chart"}>
        Line chart Data for World wide cases
        </NavLink>

        <NavLink to={"/dashboard/maps-charts/map"}>
          Map
        </NavLink>
      
    </div>
  )
}

export default Index