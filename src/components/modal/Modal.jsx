import React, { useEffect, useState } from "react";
import "./modal.css";

export default function Modal({ isOpen, onOrderUpdate }) {
    const[modal, setModal]= useState(isOpen)
    const[produto, setProduto]= useState([])

    const [orders, setOrders] = useState([]);
  const [newProduct, setNewProduct] = useState({
    "id": '',
    "name": '',
    "qtd": '',
    "unidade": '',
    "desconto": '',
    "price": '',
    "total": ''
  });

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      if (response.ok) {
        const data = await response.json();
        setProduto(data)
        
      } else {
        console.error('Erro ao buscar pedidos:', response.statusText);
      }
    } catch (error) {
      console.error('Erro de requisição:', error);
    }

  };

   // Função para buscar a ordem "0001"
   const fetchOrder = async () => {
    try {
      const response = await fetch('http://localhost:3001/orders/0001');
      if (response.ok) {
          const data = await response.json();
          setOrders(data); // Armazena a ordem no estado
          
      } else {
        console.error('Erro ao buscar o pedido:', response.statusText);
      }
    } catch (error) {
      console.error('Erro de requisição:', error);
    }
  };



  const addProductToOrder = async (id, name, un , price) => {
    try {
        
        let item={
         id,
         name,
         qtd: 1,
         un,
         desconto: 0,
         price,
         total:price
        }
      if (orders) {
        
        const updatedOrder = {
          ...orders,
          products: [...orders.products, item]
        };
        //Envia a requisição PUT para atualizar a ordem "0001"
        const response = await fetch('http://localhost:3001/orders/0001', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedOrder)
        });
        console.log('cracra', response)

        if (response.ok) {
          const updatedOrderFromServer = await response.json();
          setOrders(updatedOrderFromServer); // Atualiza o estado com a nova ordem

          onOrderUpdate();
        }
      }

      setModal(false)
    } catch (error) {
      console.error('Erro ao adicionar produto à ordem:', error);
    }
  };
    
    
    useEffect(() => {
        fetchProducts();
        fetchOrder();
    }, []);


  if (modal) {
    return (
      <div className="containerModal">
        <div className="conteudoModal">
            <ul className="ulModal">
            <li><button onClick={()=> setModal(!modal)}>CLOSE</button></li>
            <li id="codigo">Codigo</li>
            <li id="descricao">Descrição</li>
            <li id="unidade">Unidade</li>
            <li id="unitario">Preço</li>
            </ul>
            {produto.map((item, index)=>{
                return(
                    <ul className="ulModalItens" key={index}>
                        <li><button onClick={()=>addProductToOrder(item.id, item.name, item.un, item.price)}>ADD</button></li>
                        <li id="codigo">{item.id}</li>
                        <li id="descricao">{item.name}</li>
                        <li id="unidade">{item.un}</li>
                        <li id="unitario">{item.price}</li>
                    </ul>
                    
                )
            })}
        </div>  
        
        
      </div>
    );
  }

  return null;
}
