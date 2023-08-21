import React from 'react'
import VodItem from './vodItem'

const VodLis = ({ vod_ar }) => {
  return (
    <div className='container-fluid py-5'>
      <div className="container">
        <h2>list of tv shows</h2>
        <div className="row">
          {vod_ar.map(item => {
            return (
              <VodItem item={item} key={item.imdbID} />

            )
          })}
        </div>
      </div>

    </div>
  )
}

export default VodLis