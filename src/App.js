import React from 'react';
import Header from './component/Header';
import CategoriasProvider from './context/CategoriasContext';


function App() {
  return (
    <CategoriasProvider>
      <Header
        titulo="Eventos en React con EvnetBrite API"
      />

    </CategoriasProvider>
  );
}

export default App;
