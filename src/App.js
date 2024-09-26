import React from 'react';
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
  return (
    <div className="App">
      
      <Header />
      <main>
        <ButtonRadius>
          F9 Novo
        </ButtonRadius>

        <CabecalhoItens />
        <ItensPedido />

        <footer className='footerApp'>
          <ButtonBottom text={"ENCERAR"} imgSrc={encerrar}/>
          <ButtonBottom text={"REVISA"} imgSrc={revisa}/>
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
