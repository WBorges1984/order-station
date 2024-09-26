import React from 'react'
import './itensPedido.css'
import deleteIcon from '../../assets/delete.png';
import editIcon from '../../assets/edit.png';

function ItensPedido({...props}) {
    const item={
        cod: 0,
        descricao: "",
        unidade: "",
        quantidade: 0,
        desconto: 0,
        unitario: 0,
        valTot: 0
    }

  return (<div className='bodyItens'>
            <div className='containerItensPedido'>
                <input type="number" name="codigo" id="codigo" value={item.cod} disabled/>
                <input type="text" name="codigo" id="descricao" value={item.cod} disabled/>
                <input type="text" name="codigo" id="unidade" value={item.cod} disabled/>
                <input type="number" name="codigo" id="quantidade" value={item.cod} disabled/>
                <input type="number" name="codigo" id="desconto" value={item.cod} disabled/>
                <input type="number" name="codigo" id="unitario" value={item.unitario} disabled/>
                <input type="number" name="codigo" id="total" value={item.valTot} disabled/>
            </div>
            <div className='imgDiv'>
            <img id='imgCab' src={editIcon} alt="Icone de edição"/>
            <img id='imgCab' src={deleteIcon} alt="Icone de excluir"/>
            </div>
        </div>
  )
}

export default ItensPedido