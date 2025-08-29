import React from 'react'

const AccordianItem = ({title,body,isOpen,setIsOpen}) => {
  return (
    <div style={{border:'1px solid black' }}>
       <div style={{
           display:'flex',
           justifyContent:'space-between', 
           alignItems:'center', 
           padding:'8px', 
           backgroundColor:'slategrey',
           cursor:'pointer'
           }}
           onClick={()=>{
            setIsOpen((prev)=>!prev)
           }}
           >
        <span style={{   fontWeight:800,fontSize:'24px'}}>{title}</span>
        {
          isOpen  ?  
             <span>˃</span> :
             <span>⌄</span>
        }

       </div>
       {
         isOpen &&  <div>{body}</div>
       }

    </div>
  )
}

export default AccordianItem





// import React, { useState } from 'react'

// const AccordianItem = ({title,body,isOpen,setIsOpen}) => {


  
    
//   return (
//     <div style={{border:'1px solid black',overflow:'hidden'}}>
//       <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontWeight:800,fontSize:'24px', padding:'16px', backgroundColor:'slategrey',cursor:'pointer'}}
//       onClick={()=>setIsOpen((prev)=>!prev)}
      
//       >
//         <span>{title}</span>
//         <span>⌄</span>
//       </div>

//       {
//            isOpen && <div style={{padding:'8px'}}>{body}</div>
//       }

//     </div>
//   )
// }

// export default AccordianItem
