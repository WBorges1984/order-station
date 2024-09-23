import React from 'react';
import './App.css';
import Header from './components/header/Header';
import ButtonRadius from './components/buttonRadius/buttonRadius.jsx';
import CabecalhoItens from './components/cabecalhoItens/CabecalhoItens.jsx';


const App = () => {
  return (
    <div className="App">
      
      <Header />
      <main>
        <ButtonRadius>
          F2 Novo
        </ButtonRadius>

        <CabecalhoItens />
      </main>
      
    </div>
  );
};

export default App;
