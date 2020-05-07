import React from 'react';
import PropTypes from 'prop-types';

function Base(props) {
    return (
        
        <img className="creator__base" src={`/Imagenes/RecursosPersonaje/FormasBase/FormaBase${props.forma}.png`} alt=""/>

    )};

    
    Base.propTypes = {   
    forma: PropTypes.number
    }

export default Base;