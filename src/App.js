
//import './App.css';
import { DataProvider } from './context/DataContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavegadorPublico from './components/NavegadorPublico';
import Home from './views/Home';
import Ingresar from './views/Ingresar';
import Registrarse from './views/Registrase';
import Novedades from './views/Novedades';
import Tienda from './views/Tienda';
import Nosotros from './views/Nosotros';
import MiPerfil from './views/MiPerfil';
import Detalles from './views/Detalles';
import NotFound from './views/Notfound';




function App() {
  return (
    <BrowserRouter>
      <DataProvider> 
  
          <NavegadorPublico />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ingresar' element={<Ingresar />} />
            <Route path='/registrarse' element={<Registrarse />} />
            <Route path='/novedades' element={<Novedades />} />
            <Route path='/tienda' element={<Tienda />} />
            <Route path="/tienda/:id" element={<Detalles />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/nombre' element={<MiPerfil />} />
           < Route path='/*' element={<NotFound />} />
          </Routes>

   </DataProvider>
    </BrowserRouter>
  );
}

export default App;
