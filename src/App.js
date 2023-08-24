
import './App.css';
import Dashboard from './page/dashboard';
import Index from './components/ChartsAndMaps/Index';
import Main from './components/contact/main';
import { Route,Routes } from 'react-router-dom';

import CaseWithDate from "./components/graphs/caseWithDate";
import WorldWide from "./components/graphs/worldWide";
import LeafletMap from "./components/map/leafletMap";


function App() {
  return (
    <div>

      <Routes>

        {/* dashboard route */}
        <Route path='/' element={<Dashboard/>}>

        <Route path='/dashboard/maps-charts' element={  <Index/>  }/> 
        <Route path="/dashboard/contacts" element={<Main />}/>

        <Route path='/dashboard/maps-charts/graph-data' element={<CaseWithDate/>}></Route>
        <Route path='/dashboard/maps-charts/line-chart' element={<WorldWide/>}></Route>
        <Route path='/dashboard/maps-charts/map' element={<LeafletMap/>}></Route>

        </Route>

       


      </Routes>
    </div>
  );
}

export default App;
