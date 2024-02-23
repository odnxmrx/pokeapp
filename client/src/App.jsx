import './App.css';
import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail'

function App() {

  return (
    <>
      <h1>My PokéApp</h1>
      <Routes>
        <Route path="/home" element={<Cards />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
