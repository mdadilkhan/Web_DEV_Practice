import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../utils/ThemeProvider'

// 3rd step
//this is how we consume context
const Child2 = () => {
    const {theme,setTheme}=useContext(ThemeContext)
    console.log(theme);
    
  return (
    <div style={{backgroundColor:theme}}>
     <button onClick={() => setTheme(theme === 'blue' ? 'red' : 'blue')}>
        Toggle Theme 2
      </button>
    </div>
  )
}

export default Child2
