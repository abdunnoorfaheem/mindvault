
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Rootlayout from './components/layouts/Rootlayout'
import Home from './components/pages/Home'

function App() {


  return (
   <>
   
   <Routes>
    <Route path='/' element={<Rootlayout/>}>
    <Route index element={<Home/>}/>
    </Route>
   </Routes>

   </>
  )
}

export default App
