import React, { Component } from 'react';
//importamos axios
import axios from 'axios';

//crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {
    
    token= 'VPKKPTG3RP4HGWKGMDH5';

    state = { 
        categorias : []
     }
    
    componentDidMount() {
        this.ObtenerCategorias();
    }

    //metodo
    ObtenerCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let categorias = await axios.get(url);

        this.setState({
            categorias : categorias.data.categories
        })

    }

    render() { 
        return ( 
            <CategoriasContext.Provider
                value={{
                    categorias : this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
         );
    }
}
 
export default CategoriasProvider;