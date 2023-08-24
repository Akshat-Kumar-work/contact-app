
import { useState } from "react";
import WorldwideData from "../../data/woldWide.json";
import Chart from "react-apexcharts";

const objectProperties = Object.keys(WorldwideData[0]);


const objectValues = Object.values(WorldwideData[0]);




//line chart
const WorldWide = () => {
  const[state , setState] = useState({
    options: {
      chart: {
        id: "basic-line"
      },
      xaxis: {
        categories:  objectProperties.map( (prop)=>{
    return(prop)
  })
      }
    },
    series: [
      {
        name: "series-1",
        data: objectValues.map( (value)=>{return(value)})
      }
    ]
  })












  return (
    <div>

    <Chart
                  options={state.options}
                  series={state.series}
                  type="line"
                
                />
        </div>

  )
}

export default WorldWide