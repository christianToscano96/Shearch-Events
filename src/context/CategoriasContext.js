import React, { Component } from 'react';
//importamos axios
import axios from 'axios';

//crear el context
const CategoriaContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvder extends Component {
    
    token= '4PRETVBUDKPA5ZE3MP';

    state = {  }
    
    componentDidMount() {
        this.ObtenetCategorias();
    }

    //metodo
    ObtenetCategorias = () => {

    }

    render() { 
        return (  );
    }
}
 
export default CategoriasProvder;