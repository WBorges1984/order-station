import React from 'react'
import './cabecalhoItens.css'

function CabecalhoItens() {
  return (
    <div className='cabecalhoItens'>
        <span>Código produto</span>
        <span>Descrição resumida</span>
        <span>Cód. Unidade</span>
        <span>Quantidade</span>
        <span>% Desconto</span>
        <span>Valor Unitário</span>
        <span>valor Total</span>
        <img src="../assets/delete.png" alt="" />
    </div>
  )
}

export default CabecalhoItens