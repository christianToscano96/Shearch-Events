import React from 'react';
import Header from './component/Header';
import CategoriasProvider from './context/CategoriasContext';
import Formulario from './component/Formulario';


function App() {
  return (
    <CategoriasProvider>
      <Header
        titulo="Eventos en React con EvnetBrite API"
      />
      
      <div className="uk-container">
          <Formulario />
      </div>

    </CategoriasProvider>
  );
}

export default App;
