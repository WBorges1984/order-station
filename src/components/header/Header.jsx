import React from 'react'
import './header.css'

function Header({cupom, total}) {
  return (
    <header className='container-header'>
        <div className='logoHeader'>
            <h1 className='logoBorges'>BORGES</h1>
            <h1 className='logoPDV'>PDV</h1>
        </div>
        <div className='container-header-right'>
            <div className='VendCupom'>
                <span>Cupom: {cupom}</span>
                <span>Vendedor: Pedro barboza</span>
            </div>
            <div className='headerTotal'>
                <h4>R$: {total}</h4>
            </div>
        </div>

    </header>
  )
}

export default Header