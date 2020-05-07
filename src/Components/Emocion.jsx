import React from 'react';
import PropTypes from 'prop-types';


function Emocion(props) {
    return (

        <img className="creator__emocion" src={`/Imagenes/RecursosPersonaje/Emociones/${props.emocion}Forma${props.forma}/${props.emocion}${props.forma}-N${props.nivel}.png`} alt=""/>

    )};

    
    Emocion.propTypes = {   
    emocion: PropTypes.string,
    forma: PropTypes.number,
    nivel: PropTypes.string,
    }

export default Emocion;