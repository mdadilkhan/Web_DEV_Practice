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
import Accordian from './components/Accordian'
import Comments from './components/comments/Comments'


function App() {
   const [language,setLanguage]=useState('en')

  
  return (
    <>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px', backgroundColor:'grey'}}>
         <nav style={{display:"flex",gap:10}}>
            <a style={{textDecoration:'none', color:'black'}} href="/">Home</a>
            <a style={{textDecoration:'none', color:'black'}} href="/about">About</a>
            <a style={{textDecoration:'none', color:'black'}} href="/team">Team</a>
            <a style={{textDecoration:'none', color:'black'}} href="/draw">Draw</a>
            <a style={{textDecoration:'none', color:'black'}} href="/login">Login</a>
            <a style={{textDecoration:'none', color:'black'}} href="/infinte-scroll">infinteScroll</a>
            <a style={{textDecoration:'none', color:'black'}} href="/accordian">Accordian</a>
            <a style={{textDecoration:'none', color:'black'}} href="/nested-comments">Nested Comments</a>
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
             <Route path='/accordian' element={<Accordian/>} />
             <Route path='/nested-comments' element={<Comments/>} />
             
          </Route>




            // 2nd way
             {/* <Route path="/about" element={<ProtectedRoutes><About/></ProtectedRoutes>} />
             <Route path="/team" element={<ProtectedRoutes><Team/></ProtectedRoutes>} />
             <Route path="/draw" element={<ProtectedRoutes><DrawingTool/></ProtectedRoutes>} /> */}

       


         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
