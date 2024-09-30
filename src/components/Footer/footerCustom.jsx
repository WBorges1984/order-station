import React from 'react'
import ButtonBottom from '../buttonBottom/ButtonBottom.jsx';
import './footerCustom.css'
// img icons dos buttons do bottom
import encerrar from '../../assets/encerrar.png'
import revisa from '../../assets/revisa.png'
import abandona from '../../assets/abandonar.png'
import consulta from '../../assets/consulta.png'
import outras from '../../assets/outras.png'
import finaliza from '../../assets/finaliza.png'

function FooterCustom() {
  return (
    <footer className='footerApp'>
          <ButtonBottom text={"ENCERAR"} imgSrc={encerrar}/>
          <ButtonBottom text={"REVISA"} imgSrc={revisa} />
          <ButtonBottom text={"ABANDONA"} imgSrc={abandona}/>
          <ButtonBottom text={"CONSULTA"} imgSrc={consulta}/>
          <ButtonBottom text={"OUTRAS"} imgSrc={outras}/>
          <ButtonBottom text={"FINALIZA"} imgSrc={finaliza}/>
        </footer>
  )
}

export default FooterCustom