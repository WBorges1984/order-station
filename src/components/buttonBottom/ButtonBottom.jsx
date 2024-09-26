import React, { useState } from 'react'
 import './buttonBottom.css'
 import encerrar from '../../assets/encerrar.png'
 import revisa from '../../assets/revisa.png'
 import abandona from '../../assets/abandonar.png'

function ButtonBottom({text,imgSrc, ...props}) {

  return (
    <>
        <button className='btnBottom'>
            <img className='imgFooterbnt' src={imgSrc}/>
            <h4>{text}</h4>
        </button>
    </>
  )
}

export default ButtonBottom
