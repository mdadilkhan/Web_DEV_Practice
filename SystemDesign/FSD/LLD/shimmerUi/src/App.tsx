import {Route,Routes,BrowserRouter} from 'react-router-dom'
import './App.css'


import Cards from './components/Cards'
import About from './components/About'
import Team from './components/Team'
import DrawingTool from './components/DrawingTool'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import InfiniteScroll from './components/InfiniteScroll'
import { useState } from 'react'


function App() {
   const [language,setLanguage]=useState('en')

  
  return (
    <div>
      <header>
         <nav style={{display:"flex",gap:10}}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/draw">Draw</a>
            <a href="/login">Login</a>
            <a href="/infinte-scroll">infinteScroll</a>
          </nav>


          <select name="language" id="" onChange={(e)=>setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="sp">Spanish</option>
            <option value="ru">Russian</option>
          </select>
      </header>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Cards/>} />
          <Route path='/login' element={<Login/>} />


         // 1st way
          <Route element={<ProtectedRoutes />}>
             <Route path='/about' element={<About lang={language}/>} />
             <Route path='/team' element={<Team/>} />
             <Route path='/draw' element={<DrawingTool/>} />
             <Route path='/infinte-scroll' element={<InfiniteScroll/>} />
          </Route>




            // 2nd way
             {/* <Route path="/about" element={<ProtectedRoutes><About/></ProtectedRoutes>} />
             <Route path="/team" element={<ProtectedRoutes><Team/></ProtectedRoutes>} />
             <Route path="/draw" element={<ProtectedRoutes><DrawingTool/></ProtectedRoutes>} /> */}

       


         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
