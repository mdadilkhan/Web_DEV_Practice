
import ThemeProvider from "../utils/ThemeProvider";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Header from "./Header";



const UseContext=()=>{
  return (
     <ThemeProvider>
      <Header/>
      <Child1/>
      <Child2/>
     </ThemeProvider>
  )
}



export default UseContext