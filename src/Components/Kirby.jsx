import React from 'react';
import PropTypes from 'prop-types';
import Base from './Base';
import Emocion from './Emocion';
import Cabeza from './Cabeza';
import Gris from './Gris';

function Kirby(props) {
    let styles ={
        width:`${props.tamano}vh`
    }
    return (
    <div className="creator__kirby" style={styles}>

        <Base forma={props.forma}/>

        <Cabeza forma={props.forma} cabeza={props.cabeza}/>

        <Emocion forma={props.forma} emocion={props.emocion} nivel={props.nivel}/>
        
        <Gris forma={props.forma} cabeza={props.cabeza} gris={props.gris} />
    </div>

    )};

    
    Kirby.propTypes = {   
    forma: PropTypes.number,
    emocion: PropTypes.string,
    nivel: PropTypes.string,
    cabeza: PropTypes.number,
    tamano: PropTypes.string,
    gris:PropTypes.string
    }

export default Kirby;

