import React from 'react';
import PropTypes from 'prop-types';

function Gris(props) {
    let styles ={
        opacity:`${props.gris}%`
    }
    return (
        
        <img style={styles} className="creator__gris" src={`/Imagenes/RecursosPersonaje/KirbyGris/Cabeza${props.cabeza}Gris/Cabeza${props.cabeza}-Forma${props.forma}Gris.png`} alt=""/>

    )};

    
    Gris.propTypes = {   
    forma: PropTypes.number,
    cabeza: PropTypes.number,
    gris: PropTypes.string
    }

export default Gris;