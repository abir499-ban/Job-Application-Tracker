import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/shared/Header'
import Dashboard from './pages/Dashboard'
import Addjob from './pages/Addjob'
import Editjob from './pages/Editjob'
import SignUp from './pages/auth/SignUp'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Dashboard/>} />
      <Route path='/addjob' element={<Addjob/>} />
      <Route path='/editjob' element={<Editjob/>} />
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
