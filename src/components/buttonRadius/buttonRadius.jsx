import React from 'react'
import './buttonRadius.css'
function buttonRadius({children, ...props}) {
  return (
    <button className='buttonradius'>
        {children}
    </button>
  )
}

export default buttonRadius