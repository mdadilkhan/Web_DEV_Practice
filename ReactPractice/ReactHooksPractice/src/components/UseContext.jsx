import { useState } from "react"
// import { ThemeContext } from "../utils/Context"
import Child1 from "./Child1"
import Child2 from "./Child2"
import ThemeProvider from "../utils/ThemeProvider"


const UseContext=()=>{

    return (
        <>
        {/* wraping context to all the children */}
          <ThemeProvider>
            <Child1/>
            <Child2/>
          </ThemeProvider>
         
        </>
    )
}

export default UseContext