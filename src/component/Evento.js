import React from 'react';


const Evento = ({evento}) => {


        //extraer el texto
        let { text } = evento.description;
        //cortar la descripción 
        if( text) {
            if(text.length > 250) {
                text = text.substr(0 , 250);
            }
        }else {
            text = null;
        }
    return ( 
        <div>
            <div className="uk-card uk-card-default uk-margin-xlarg tarjeta">
                <div className="uk-card-media-top ">
                    {evento.logo 
                    ? <img className="imagen-radio" src={evento.logo.url} alt={evento.name} />
                    : null }
                </div>
                
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{evento.name.text}</h3>
                    <p>{ text }</p>
                </div>

                <div className="uk-card-footer">
                    <a href={evento.url} className="uk-button uk-button-secondary" target="_blank" rel="noopener noreferrer">
                        Más Información
                    </a>
                </div>
            </div>
        </div>
    
        );
}
 
export default Evento;