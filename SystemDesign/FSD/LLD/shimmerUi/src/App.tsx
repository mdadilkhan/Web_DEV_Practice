import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'


import Cards from './components/Cards'
import About from './components/About'
import Team from './components/Team'
import DrawingTool from './components/DrawingTool'


function App() {


  return (
    <div>
      <header>
        hello world

      </header>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Cards/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/draw' element={<DrawingTool/>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
