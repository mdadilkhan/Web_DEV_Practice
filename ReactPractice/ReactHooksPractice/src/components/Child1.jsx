import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../utils/ThemeProvider'

// 3rd step
//this is how we consume context
const Child1 = () => {
    const {theme,setTheme}=useContext(ThemeContext)
    console.log(theme);
    
  return (
    <div style={{backgroundColor:theme}}>
     <button onClick={() => setTheme(theme === 'blue' ? 'purple' : 'blue')}>
        Toggle Theme
      </button>
    </div>
  )
}

export default Child1
