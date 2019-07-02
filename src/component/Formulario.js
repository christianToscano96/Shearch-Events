import React, { Component } from 'react';
import {CategoriasConsumer} from '../context/CategoriasContext';

class Formulario extends Component {

    state = {
        nombre : '',
        categorias : ''
      }
    
    render() { 
        return ( 
            <form>
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
                            />
                        </div>

                        <div className=" uk-margin">
                            <select
                            className="uk-select"
                            name="categorias"
                            >
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
         );
    }
}
 
export default Formulario;