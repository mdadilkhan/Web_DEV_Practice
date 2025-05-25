import { useRef, useState, useEffect } from "react";


//>>>>>>>>>>>>>> Example 1 <<<<<<<<<<<<<<<<<<<<<<<<<<<


// Exapmple for accessing DOM Element
// const UseRef=()=>{
//     const [name,setName]=useState("")
//     const inputRef=useRef(null)

//     const handleClick=()=>{
//         inputRef.current.focus()
//         console.log(inputRef.current);
//     }

//     return (
//         <>
//             <div>
//                 <input ref={inputRef} value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="testing ref" id="adil" className="khan"/>
//                 <button onClick={handleClick}>click</button>
//             </div>
//         </>
//     )
// }



//>>>>>>>>>>>>>> Example 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<


// Example for auto focusing the input box
// const UseRef=()=>{

//     const inputRef=useRef(null)

//     useEffect(()=>{
//        inputRef.current.focus();
//     },[])

//     return (
//         <>
//             <div>
//                 <input ref={inputRef}   type="text" placeholder="testing ref" id="adil" className="khan"/>
//                 <button>click</button>
//             </div>
//         </>
//     )
// }





//>>>>>>>>>>>>>> Example 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<
// Store a mutable value (like a timer)
// Clearing a timer on unmount.
// const UseRef = () => {
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       console.log("Timer running...");
//     }, 1000);

//     return () => {
//       console.log("cleared");

//       clearInterval(intervalRef.current);
//     };
//   }, []);

//   return (
//     <>
//       <div>check your console</div>
//       <button onClick={() => console.log(intervalRef.current)}>
//         Log Interval ID
//       </button>
//     </>
//   );
// };



//>>>>>>>>>>>>>> Example 4 <<<<<<<<<<<<<<<<<<<<<<<<<<<
// Track Previous State

const UseRef=()=>{
    const [count,setCount]=useState(0)
    const prevCountRef = useRef();


    useEffect(()=>{
        prevCountRef.current=count
    },[count])
    
    return (
        <>
            <div>
                <p>current count: {count}</p>
                <p>Previous: {prevCountRef.current}</p>
                <button onClick={()=>setCount(prev=>prev+1)}>+</button>
            </div>
        </>
    )
}
export default UseRef;
