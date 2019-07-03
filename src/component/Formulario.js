import React, * as react from 'react';

import {CategoriasConsumer} from '../context/CategoriasContext';
import {EventosConsumer} from '../context/EventosContext';

class Formulario extends react.Component {

    state = {
        nombre : '',
        categoria : ''
      }
    
      //si el susario grega un evento o categoria
      obtenerDatosEvento = e => {
          this.setState({
              [e.target.name] : e.target.value
          })
      }
    render() { 
        return ( 
            <EventosConsumer>
                {(value) =>{
                    
                    return (
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                value.obtenerEventos(this.state)
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por Nombre o Categoria
                                </legend>

                                <div className="uk-column-1-3@m uk-margin">
                                    <div className="uk-margin" uk-margin="true">
                                        <input
                                            name="nombre"
                                            className="uk-input uk-text-center"
                                            type="text"
                                            placeholder="Nombre de Evento o Ciudad"
                                            onChange={this.obtenerDatosEvento}
                                        />
                                    </div>

                                    <div className=" uk-margin">
                                        <select
                                        className="uk-select"
                                        name="categorias"
                                        onChange={this.obtenerDatosEvento}
                                        >
                                            <option className="uk-text-center" value="">--Selecione Categoría--</option>
                                            <CategoriasConsumer>
                                                {(value) => {
                                                    return (
                                                        value.categorias.map(categoria => (
                                                            <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                                                {categoria.name_localized}
                                                            </option>
                                                        ))
                                                    )
                                                }}
                                            </CategoriasConsumer>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="submit" className="uk-button uk-button-danger uk-transition-toggle" value="Buscar" />
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                 )
            }}
            </EventosConsumer>
         );
    }
}
 
export default Formulario;