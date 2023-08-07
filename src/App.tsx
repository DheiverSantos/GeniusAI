import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Analise from './pages/analise'

function App() {
  return (
    <Routes>
      <Route path="/GeniusAI_Front" element={<Login />} />
      <Route path="/analise" element={<Analise />} />
    </Routes>
  )
}

export default App
