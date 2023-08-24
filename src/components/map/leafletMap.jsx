
import { MapContainer, TileLayer, useMap , Marker , Popup } from 'react-leaflet'
import Mapcountrydata from "../../data/mapcountrydata.json"


const leafletMap = () => {

  // const filterdCountry= Mapcountrydata.filter( (country)=>{
  //   return(
  //     country.country=== "India"
  //   )
  // })


  return (
    <div className=' w-full h-full overflow-hidden'>
      <MapContainer center={[20.5937, 78.9629]} zoom={3} scrollWheelZoom={true} >
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
     

     {
      Mapcountrydata.map( (country)=>{
        return(
          <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]}>

          <Popup position={[country.countryInfo.lat, country.countryInfo.long]}>
          <div>
            <h2>
              {"Country Name: "+country.country}
            </h2>
            <h2>
              {"Active Cases: "+country.active}
            </h2>
            <h2>
              {"Recovered Cases: "+country.recovered}
            </h2>
            <h2>
              {"Deaths : "+country.deaths}
            </h2>
          </div>

          </Popup>

          </Marker>
        )
      })
     }
   
  


      </MapContainer>
    </div>
  )
}

export default leafletMap