import React from 'react'
import './cabecalhoItens.css'

function CabecalhoItens() {
  return (
    <div className='cabecalhoItens'>
        <span className='spanCod'>Código produto</span>
        <span className='spanDes'>Descrição resumida</span>
        <span className='spanUn'>Cód. Unidade</span>
        <span className='spanQtd'>Quantidade</span>
        <span className='spanDesc'>% Desconto</span>
        <span className='spanUni'>Valor Unitário</span>
        <span className='spanTot'>valor Total</span>
        
    </div>
  )
}

export default CabecalhoItens