import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../utils/ThemeProvider'
const Child1 = () => {

  const {theme,setTheme}=useContext(ThemeContext)

  
  return (
    <div style={{
      backgroundColor:`${theme.bgColor}`,
      width:'500px',
      margin:'10px auto',
      height:"200px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
      }}>
      <p style={{color:`${theme.color}`}}>Hii Adil How Are you</p>
    </div>
  )
}

export default Child1
