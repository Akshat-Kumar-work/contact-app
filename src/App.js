
import './App.css';
import Dashboard from './page/dashboard';
import Index from './components/ChartsAndMaps/Index';
import Main from './components/contact/main';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div>

      <Routes>

        {/* dashboard route */}
        <Route path='/' element={<Dashboard/>}>

        <Route path='/dashboard/maps-charts' element={  <Index/>  }/> 
        <Route path="/dashboard/contacts" element={<Main />}/>

        </Route>

      </Routes>
    </div>
  );
}

export default App;
