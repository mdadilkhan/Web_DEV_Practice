// two library are best like one is exaclidraw(free open source) and then Tldraw(paid) 

// import React from "react";
// import { Tldraw } from "tldraw";
// import "tldraw/tldraw.css";

// const DrawingTool: React.FC = () => {
//   return (
//     <div style={{ width: "100%", height: "100vh" }}>
//       <Tldraw />
//     </div>
//   );
// };

// export default DrawingTool;









import { Excalidraw } from "@excalidraw/excalidraw";
import '@excalidraw/excalidraw/index.css';


const Draw=()=>{

  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1> */}
      <div style={{width:"100%", height: "95vh",border:'1px solid red' }}>
        <Excalidraw
    
        theme="dark"
        />
      </div>
    </>
  );
}



export default Draw