import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Analise from './pages/analise'
import Catalogue from './pages/catalogue'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/catalogo" element={<Catalogue />} />
      <Route path="/analise" element={<Analise />} />
    </Routes>
  )
}

export default App
