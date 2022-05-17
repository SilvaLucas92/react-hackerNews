import React from 'react'

const Buttons = ({ page, setPage }) => {
  return(
    <div className='btn-container'>
      <button onClick={() => page === 0? setPage(49) : setPage(page - 1)}>prev</button>
      <p>
      { page }
      
      </p>
      <button onClick={() => page === 49? setPage(0) : setPage(page + 1)}>next</button>
    </div>
  )
}

export default Buttons
