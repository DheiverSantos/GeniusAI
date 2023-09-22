import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Analise from './pages/angioCor'
import Catalogue from './pages/catalogue'
import GlaucoSwin from './pages/glaucoSwin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Catalogo" element={<Catalogue />} />
      <Route path="/AngioCor" element={<Analise />} />
      <Route path="/GlaucoSwin" element={<GlaucoSwin />} />
      <Route path="/BTSwin" element={<Analise />} />
      <Route path="/ABUS" element={<Analise />} />
      <Route path="/ASCD" element={<Analise />} />
    </Routes>
  )
}

export default App
