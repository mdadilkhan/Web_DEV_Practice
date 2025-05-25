import React, { useReducer } from 'react'

const ACTIONS={
    INCREMENT: "increment",
    DECREMENT:"decrement"
}

function reducer(state,action){
    // console.log("state",state);
    // console.log("action",action);
     switch (action.type){
        case ACTIONS.INCREMENT:
            return {count:state.count+1}   
        case ACTIONS.DECREMENT:
            return {count:state.count-1}
        default:
            return state
     }
    
}
const intialStte={
    count:0,
}

const UseReducer = () => {
    const [state,dispatch]=useReducer(reducer,intialStte)

    const increment=()=>{
       dispatch({type: ACTIONS.INCREMENT})
    }

    const decrement=()=>{
       dispatch({type: ACTIONS.DECREMENT})
    }

  return (
    <div style={{display:'flex',gap:10}}>
         <button onClick={increment}>Inc</button>
          <p>{state.count}</p>
         <button onClick={decrement}>Dec</button>
    </div>
  )
}

export default UseReducer
