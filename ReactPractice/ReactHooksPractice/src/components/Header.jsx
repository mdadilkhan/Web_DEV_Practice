import React, { useContext } from 'react'
import { ThemeContext } from '../utils/ThemeProvider'

const Header = () => {

const {theme,setTheme}=useContext(ThemeContext)
    const changeTheme=()=>{
         setTheme((prev)=>{
            return prev.bgColor==='#e0e0e0' ? { bgColor: "#333", color: "white" } : { bgColor: "#e0e0e0", color: "black" };
         })
    }
  return (
    <div style={{
        display:'flex',
        justifyContent:'center'

    }}>
      <button
       style={{
          padding:"4px 20px",
          backgroundColor:"#e0e0e0",
          border:"none",
          borderRadius:'8px',
          cursor:'pointer',
       }}
       onClick={changeTheme}
      >Change Theme</button>
    </div>
  )
}

export default Header
