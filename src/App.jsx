import './App.css'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Trending from './components/Trending'

function App() {

  return (
    <div className='bg-[#1f1e24] w-full h-full flex'>
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element ={<Trending/>}/>
     </Routes>
    </div>
  )
}

export default App
