import React from 'react'

const VodInput = () => {
  return (
    <header className='container-fluid bg-dark p-2'>
      <div className="container">
        <div className="row">
          <div className="logo col-auto">
            <h2 className='text-white'>my vod</h2>
          </div>
          <nav className='d-flex col-6 col-md-4 col-lg-3 '>
            <input type="search" className='form-control' />
            <button className='btn btn-warning'>Search</button>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default VodInput