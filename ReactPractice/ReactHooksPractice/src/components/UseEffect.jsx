import {useState,useEffect} from 'react'



const UseState=()=>{

    const [resourceTye,setResourceType]=useState("posts")
    const [count,setCount]=useState(0)
    const [user,setUser]=useState({})
    const [widht,setWidht]=useState(window.innerWidth);

    console.log("render");


    useEffect(()=>{
        console.log("useEffect called");
        fetch('https://api.github.com/users/mdadilkhan').then((res)=>{
            if (!res.ok) throw new Error("Network Error");
            return res.json();
        }).then((res)=>{
            setUser(res)
        }).catch((err)=>{
            console.log(err); 
        })
    },[])


    useEffect(()=>{
console.log("event triggerd");

        const handleResize = () => setWidht(window.innerWidth);
        window.addEventListener("resize", handleResize);     
        return ()=>{
            console.log("cleanup called");
            
            window.removeEventListener('resize',handleResize)
        }
    },[])
    
    const inc=()=>{
        setCount(prev=>prev+1)
    }
    return (
        <>
            <div style={{display:'flex', gap:10}}>
                <button onClick={()=>{setResourceType("posts")}}>
                    Post
                </button>
                <button onClick={()=>{setResourceType("users")}}>
                    Users
                </button>
                <button onClick={()=>{setResourceType("comments")}}>
                    Comments
                </button>
                <span>{count}</span>
                <button onClick={()=>{setCount(prev=>prev+1)}}>Inc</button>
           
            </div>
            <h1>{innerWidth}</h1>
        </>
    )
}


export default UseState