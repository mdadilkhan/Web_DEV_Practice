import React from 'react'

const Shimer = ({count}) => {

    
  return Array(count).fill(0).map((n,i)=>(
    <div key={i} className='card'>
      <div className='shimmer'></div>
    </div>
  )
)
}

export default Shimer
