
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.tsx';
import Servicios from './Pages/Servicios.tsx';
import Nosotros from './Pages/Nosotros.tsx';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Servicios' element={<Servicios />} />
        <Route path='/Nosotros' element={<Nosotros />} />
      </Routes>
    </>
  )
}

export default App
