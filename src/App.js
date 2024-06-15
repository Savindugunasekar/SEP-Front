import AdminDash from './components/AdminDash';
import Authorization from './components/Authorization';
import OrphanageForm from './components/OrphanageForm';
import Orphanage from './components/Orphanage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Authorization/>} />
          
          
          <Route path="/admin" element={<AdminDash />} />

          <Route path="/admin/addOrphanage" element={<OrphanageForm />} />


          <Route path='/orphanage' element={<Orphanage/>}>

          <Route path=':orphanageId' element={<Orphanage/>}/>

          </Route>


          
            
          
          
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
