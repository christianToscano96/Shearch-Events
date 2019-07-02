import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
    token= 'VPKKPTG3RP4HGWKGMDH5';
    ordenar='date'

    state = { 
        eventos : []
     }
    
    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/q=${busqueda.nombre}&categories=${busqueda.categorias}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;
    
    //consultar la appi con la url
    const eventos = await axios(url);
    console.log(eventos);
    }
    render() { 
        return ( 
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos : this.obtenerEventos
                }}
            >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 
export default EventosProvider;