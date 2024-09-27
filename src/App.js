import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import ButtonRadius from './components/buttonRadius/buttonRadius.jsx';
import CabecalhoItens from './components/cabecalhoItens/CabecalhoItens.jsx';
import ItensPedido from './components/itensPedido/ItensPedido.jsx';
import ButtonBottom from './components/buttonBottom/ButtonBottom.jsx';

// img icons dos buttons do bottom
import encerrar from './assets/encerrar.png'
import revisa from './assets/revisa.png'
import abandona from './assets/abandonar.png'
import consulta from './assets/consulta.png'
import outras from './assets/outras.png'
import finaliza from './assets/finaliza.png'
import Modal from './components/modal/Modal.jsx';


  const App = () => {

    const [orders, setOrders] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [totalHeader, setTotalHeader] = useState(0);

    // Função para buscar os dados da API
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3001/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
        //Utilizado o Reduce para acumular o total
        const totalAmount = data[0].products.reduce((acc, product) => acc + product.total, 0);
        setTotalHeader(totalAmount)
        
      } else {
        console.error('Erro ao buscar pedidos:', response.statusText);
      }
    } catch (error) {
      console.error('Erro de requisição:', error);
    }

  };

  // Atualiza as ordens após uma alteração
  const handleOrderUpdate = () => {
    fetchOrders();
    setOpenModal(false)  
  };

   useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="App">
      
      <Header cupom={'123'} total={totalHeader}/>
      <main>
        <ButtonRadius onCLick={()=>setOpenModal(!openModal)}>
          F9 Novo
        </ButtonRadius>
        <CabecalhoItens />

        {orders.map((order) => (
          <li key={order.id}>
            
              {order.products.map((product, index) => (
                <div key={index}>
                  <ItensPedido key={product.id}
                               codigo={product.id}
                               descricao={product.name}
                               quantidade={product.qtd}
                               unidade={product.un}
                               desconto={product.desconto}
                               unitario={product.price}
                               total={product.total}/>
           </div>
              ))}
           
          </li>
        ))}
        
        {openModal && <Modal isOpen={openModal} onOrderUpdate={handleOrderUpdate} />}

        <footer className='footerApp'>
          <ButtonBottom text={"ENCERAR"} imgSrc={encerrar}/>
          <ButtonBottom text={"REVISA"} imgSrc={revisa} />
          <ButtonBottom text={"ABANDONA"} imgSrc={abandona}/>
          <ButtonBottom text={"CONSULTA"} imgSrc={consulta}/>
          <ButtonBottom text={"OUTRAS"} imgSrc={outras}/>
          <ButtonBottom text={"FINALIZA"} imgSrc={finaliza}/>
        </footer>
      </main>
      
    </div>
  );
};

export default App;
