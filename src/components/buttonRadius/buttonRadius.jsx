import React from 'react'
import './buttonRadius.css'
function buttonRadius({children, onCLick,...props}) {
  return (
    <button className='buttonradius' onClick={onCLick}>
        {children}
    </button>
  )
}

export default buttonRadius