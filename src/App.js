import React from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';
import ListaEventos from './component/ListaEventos';


import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';

function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header
          titulo="Eventos en React con EvnetBrite API"
        />
        
        <div className="uk-container">
            <Formulario />

            <ListaEventos/>
        </div>

      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
