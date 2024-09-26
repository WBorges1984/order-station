import React from 'react'
import './itensPedido.css'
import deleteIcon from '../../assets/delete.png';
import editIcon from '../../assets/edit.png';

function ItensPedido({key, codigo, descricao, unidade, quantidade, desconto, unitario, total,...props}) {

  return (<div className='bodyItens' key={key}>
            <div className='containerItensPedido'>
                <input type="number" name="codigo" id="codigo" value={codigo} disabled/>
                <input type="text" name="codigo" id="descricao" value={descricao} disabled/>
                <input type="text" name="codigo" id="unidade" value={unidade} disabled/>
                <input type="number" name="codigo" id="quantidade" value={quantidade} disabled/>
                <input type="number" name="codigo" id="desconto" value={desconto} disabled/>
                <input type="number" name="codigo" id="unitario" value={unitario} disabled/>
                <input type="number" name="codigo" id="total" value={total} disabled/>
            </div>
            <div className='imgDiv'>
            <img id='imgCab' src={editIcon} alt="Icone de edição"/>
            <img id='imgCab' src={deleteIcon} alt="Icone de excluir"/>
            </div>
        </div>
  )
}

export default ItensPedido