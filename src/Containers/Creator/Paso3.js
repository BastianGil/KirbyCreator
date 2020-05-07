import React from 'react';
import './Creator.css';
import Context from '../Utils/Context';

function Paso3() {

    const cabezas = [

        {
            class: 1,
            img: 1,
          
        },
        {
            class: 2,
            img: 2,
          
        },
        {
            class: 3,
            img: 5,
           
        },
        {
            class: 4,
            img: 3,
            
        },

        {
            class: 5,
            img: 4,
            
        },


    ];

  

    const context = React.useContext(Context);
    function handleHead(cabeza){
       
        context.setKirby({
            ...context.Kirby,
            cabeza:cabeza
        });
        
    }

    function handleSize(event){
        context.setKirby({
            ...context.Kirby,
            tamano:event.target.value
        });
    }

    function handleSaturation(event){
        context.setKirby({
            ...context.Kirby,
            gris:event.target.value
    });
    }

    return (

<div className="paso3">

<p className="paso3__title">ELEMENT</p>
<div className="paso3__botones">


    {cabezas.map(cab => {

    let className=`paso3__objeto paso3__objeto--${cab.class} paso3__objeto--${cab.class}`;
    
    

    if(context.Kirby.cabeza==cab.img){
        className+=`--hover`;
        console.log({className});
    }else{
        className=`paso3__objeto paso3__objeto--${cab.class} paso3__objeto--${cab.class}`;
    }

    return <div key={cab.class} className={className} onClick={()=>handleHead(cab.img)}></div>

    })}


</div>

<p className="paso3__title">COLOR SATURATION</p>

<div className="paso3__botones2">
<input type="range"min="0" max="100" value={context.Kirby.gris} onChange={handleSaturation} className="test"/>
</div>



<p className="paso3__title">SIZE</p>
<div className="paso3__botones3">
<input type="range" min="10" max="30" value={context.Kirby.tamano} onChange={handleSize}/>
</div>

<div className="paso2__valoresInput">
<p className="paso2__textinput">Small</p>
<p className="paso2__textinput">Big</p>
</div>

</div>  

);
}

export default Paso3;
