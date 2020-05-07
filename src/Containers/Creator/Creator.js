import React from 'react';
import './Creator.css';
import { Link, Redirect, useHistory } from "react-router-dom";
import Paso1 from './Paso1';
import Paso2 from './Paso2';
import Paso3 from './Paso3';
import Kirby from '../../Components/Kirby';
import Context from '../Utils/Context';
import { v4 as uuidv4 } from 'uuid'; 

function Creator(props) {


    const context = React.useContext(Context);

    const history = useHistory();
    var nextPage="";

    React.useEffect(() => {

        context.setKirby({
            ...context.Kirby,
            id: uuidv4(),          
        });

    },[]);
  

    if (props.match.params.steps ==="step1") {
        nextPage="./step2"
    }
    if (props.match.params.steps ==="step2") {
        nextPage="./step3"
    }
    if (props.match.params.steps ==="step3") {
        nextPage="/gallery"
    }
    function handleSave(){
        context.save();
        history.push(nextPage);

        

    }
    function handleNext(){
        history.push(nextPage);
    } 
    function handleBack(){

        history.goBack();

    }

    if(!props.match.params.steps){;
        return <Redirect to="/creator/step1"/>
    }


    

    return (
        <div className="creator">
    
            <div className="creator__cuaderno"> 
                <div className="creator__izquierda">

                    <Link className = "creator__link" to = "/">
                        <div className="creator__home">
                                <div className="creator__toHome"></div> 
                        </div>
                     </Link>

                     <div className="creator__preview">
                        
                         <Kirby forma={context.Kirby.forma} emocion={context.Kirby.emocion} nivel={context.Kirby.nivel} cabeza={context.Kirby.cabeza} tamano={context.Kirby.tamano} gris={context.Kirby.gris}/>
                         
                     </div>

                     <div className="creator__back">

                        <div onClick={handleBack} className="creator__toBack"></div>

                     </div>
                </div>
                <div className="creator__derecha">

            <div className = "creator__pasos">        

                {props.match.params.steps==="step1" && <Paso1/>}

                {props.match.params.steps==="step2" && <Paso2/>}

                {props.match.params.steps==="step3" && <Paso3/>}
                                    
            </div>
                           
                    <div className="creator__next">
                        
                        {props.match.params.steps==="step1" && 
                            <div onClick={handleNext}  className="creator__toNext"></div>
                        }

                        {props.match.params.steps==="step2" && 
                            <div onClick={handleNext}  className="creator__toNext"></div>
                        }

                        {props.match.params.steps==="step3" &&
                            <div onClick={handleSave}  className="creator__toSave"></div>
                        }

                    </div>            

                </div>
            </div>
        </div>
      );
}

export default Creator;
