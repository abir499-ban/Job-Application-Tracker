import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Dashboard from './pages/Dashboard'
import Addjob from './pages/Addjob'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/addjob' element={<Addjob/>} />
    </Routes>
    </>
  )
}

export default App
