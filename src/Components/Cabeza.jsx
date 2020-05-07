import React from 'react';
import PropTypes from 'prop-types';


function Cabeza(props) {
    return (

        <img className="creator__cabeza" src={`/Imagenes/RecursosPersonaje/Cabezas/Cabeza${props.cabeza}/Cabeza${props.cabeza}-Forma${props.forma}.png`} alt=""/>
        

    )};

    
    Cabeza.propTypes = {   
    cabeza: PropTypes.number,
    forma: PropTypes.number,
   
    }

export default Cabeza;