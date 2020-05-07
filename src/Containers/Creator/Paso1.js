import React from 'react';
import './Creator.css';
import Context from '../Utils/Context';
import { v4 as uuidv4 } from 'uuid'; 

function Paso1() {

    const formas = [1,2,3,4,5,6];

    const context = React.useContext(Context);
    function handleForma(form){
        context.setKirby({
            ...context.Kirby,
            forma:form
        });
    }

   

    return (

        <div className = "paso1">
        <p className="paso1__title">SHAPE</p>
        <div className="paso1__botones">
        {formas.map((form,index)=> {
            
            let className=`paso1__shape-boton paso1__shape-boton--${form} paso1__shape-boton--${form}`;
                if (context.Kirby.forma-1==index){
                className+=`--hover`;
                }else{
                    className=`paso1__shape-boton paso1__shape-boton--${form} paso1__shape-boton--${form}`;
                }
            return  <div 
            onClick={()=>handleForma(form)} className={className}>
            </div>
        
        })}
          
        </div>
    </div>

    );
}

export default Paso1;
