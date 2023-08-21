import React from 'react'
import {Link} from 'react'
const VodItem = ({ item }) => {

  return (
    <div className='col-md-4  p-2'>
      <div className='border p-2 h-100 overflow-hidden shadow'>
       
        <img src={item.Poster} alt="" className='float-start me-2 w-25' />
        
        <h3>{item.Title}</h3>
        <div>year: {item.Year}</div>
        <button className='btn btn-dark mx-2 my-2'>more info</button>
      </div>
    </div>
  )
}

export default VodItem