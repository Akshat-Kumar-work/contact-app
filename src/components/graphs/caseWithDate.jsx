import React from 'react'
import caseWithDate from "../../data/caseWithDate.json"

import { useState } from 'react';
import Chart from "react-apexcharts";

const CaseWithDate = () => {


  const objectProperties = Object.keys(caseWithDate.cases).slice(0,50)
  console.log(objectProperties)

  const objectValuecase = Object.values(caseWithDate.cases).slice(0,50)

  const objectValuedeath = Object.values(caseWithDate.deaths).slice(0,50)

  const objectValueRecovered = Object.values(caseWithDate.recovered).slice(0,50)

  








  const[state , setState] = useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories:objectProperties
      }
    },
    series: [
      {
        name: "cases",
        data: objectValuecase
      },
      {
        name: "death",
        data: objectValuedeath
      },
      {
        name: "recovered",
        data: objectValueRecovered
      }
    ]
  })






  return (
    <div>
       <Chart
            options={state.options}
            series={state.series}
            type="bar"
          />
 </div>
  )
}

export default CaseWithDate

