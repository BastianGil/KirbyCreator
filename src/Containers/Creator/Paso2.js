import React from 'react';
import './Creator.css';
import Context from '../Utils/Context';

function Paso2() {

    const emociones = [

        {
            num: 1,
            ing: 'HAPPY',
            esp: 'Feliz'
        },
        {
            num: 2,
            ing: 'SAD',
            esp: 'Triste'
        },
        {
            num: 3,
            ing: 'TIRED',
            esp: 'Cansado'
        },
        {
            num: 4,
            ing: 'ANGRY',
            esp: 'Enojado'
        },


    ];

    const context = React.useContext(Context);
    function handleEmotion(emocion){
       
        context.setKirby({
            ...context.Kirby,
            emocion:emocion
        });
   
    }

    function handleLevel(event){
        context.setKirby({
            ...context.Kirby,
            nivel:event.target.value
        });
    }

    return (       

<div className="paso2">
<p className="paso2__title">HOW IS KIRBY??</p>
<div className="paso2__botones">

{emociones.map(emo => {

    var palabra="";

    let className= `paso2__how paso2__how--${emo.num} paso2__how--${emo.num}`;
    if(context.Kirby.emocion==emo.esp){
        className+=`--hover`;
        palabra="";
    }else{
        palabra=emo.ing;
    }

return <div key={emo.num} className={`paso2__how-boton paso2__how-boton--${emo.num}`} onClick={()=>handleEmotion(emo.esp)}><div className={className}>{palabra}</div> </div>
})}



</div>

<p className="paso2__title">HOW MUCH??</p>
<div className="paso2__botones2">
<input  type="range" min="1" max="3" value={context.Kirby.nivel} onChange={handleLevel}/>
</div>

<div className="paso2__valoresInput">
<p className="paso2__textinput">Normal</p>
<p className="paso2__textinput">Very</p>
<p className="paso2__textinput">Too</p>
</div>

</div>
 );
}

export default Paso2;
