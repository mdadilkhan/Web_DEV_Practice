import { useState,createContext } from "react"
// import { ThemeContext } from "../utils/Context"

// 1st step
//context creation
const  ThemeContext=createContext()

// 2nd Step
//providing context to all the children 
const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('blue');
    
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
     {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext}
export default ThemeProvider
