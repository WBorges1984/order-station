import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import ButtonRadius from './components/buttonRadius/buttonRadius.jsx';
import CabecalhoItens from './components/cabecalhoItens/CabecalhoItens.jsx';
import ItensPedido from './components/itensPedido/ItensPedido.jsx';
import ButtonBottom from './components/buttonBottom/ButtonBottom.jsx';

// img icons
import encerrar from './assets/encerrar.png'
import revisa from './assets/revisa.png'
import abandona from './assets/abandonar.png'
import consulta from './assets/consulta.png'
import outras from './assets/outras.png'
import finaliza from './assets/finaliza.png'


  const App = () => {

    const [orders, setOrders] = useState([]);

    // Função para buscar os dados da API
  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3001/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      } else {
        console.error('Erro ao buscar pedidos:', response.statusText);
      }
    } catch (error) {
      console.error('Erro de requisição:', error);
    }

  };


   useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="App">
      
      <Header cupom={'123'} total={350}/>
      <main>
        
        <ButtonRadius>
          F9 Novo
        </ButtonRadius>
        <CabecalhoItens />

        {orders.map((order) => (
          <li key={order.id}>
            
              {order.products.map((product) => (
                <div key={product.id}>
                  <ItensPedido key={product.id}
                               codigo={product.id}
                               descricao={product.name}
                               quantidade={product.qtd}
                               unidade={product.unidade}
                               desconto={product.desconto}
                               unitario={product.price}
                               total={product.total}/>
           </div>
              ))}
           
          </li>
        ))}


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
