import React from 'react'
import '../App.css'

const card = ({data}) => {

    const {title,url,author}=data
  return (
    <div className='card'>
      <p>{title}</p>
      <img src={url} alt="" className='img'/>
      <p>{author}</p>
    </div>
  )
}

export default card
