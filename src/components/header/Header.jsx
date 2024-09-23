import React from 'react'
import './header.css'

function Header() {
  return (
    <header className='container-header'>
        <div className='logoHeader'>
            <h1 className='logoBorges'>BORGES</h1>
            <h1 className='logoPDV'>PDV</h1>
        </div>
        <div className='container-header-right'>
            <div className='VendCupom'>
                <span>Cupom: 00001</span>
                <span>Vendedor: Pedro barboza</span>
            </div>
            <div className='headerTotal'>
                <h4>R$: 284,00</h4>
            </div>
        </div>

    </header>
  )
}

export default Header