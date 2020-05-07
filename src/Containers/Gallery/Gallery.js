import React from 'react';
import './Gallery.css';
import { Link } from "react-router-dom";
import Context from '../Utils/Context';
import Kirby from '../../Components/Kirby';

function Gallery() {


    const [select, setSelect]=React.useState(null);  
    const [pagina, setPagina]=React.useState(2);
    const context = React.useContext(Context);

    const handleDelete = (id)=>{
       context.handleDelete(id);
       setSelect(null);
    }

    const handleBack = ()=>{
        var copiapg=pagina;
        setPagina(copiapg-=2);
    }
    const  handlePagina = ()=>{
        var copiapg=pagina;
        setPagina(copiapg+=2);
    }
    const handleSelect = (stiker)=>{
        setSelect(stiker);
        console.log(stiker);
    }
    
    return (
        <div className="gallery">
    
                <div className="gallery__cuaderno"> 
                <div className="gallery__izquierda">
                    <Link className = "gallery__link" to = "/">
                        <div className="gallery__home">
                            <div className="gallery__toHome"></div>
                         </div>
                    </Link>
                     <div className="gallery__preview">
                          
                    {select && <Kirby forma={select.forma} emocion={select.emocion} nivel={select.nivel} cabeza={select.cabeza} tamano={select.tamano} gris={select.gris} id={select.gris}/>}

                    {context.Kirbys.map((stiker,index)=>{
                       
                    /*    if((index==context.Kirbys.length-1)){
                                return<Kirby key={stiker.id} {...stiker}/>
                            }
                            */ 
                        })}



                     </div>
                     <div className="gallery__back" >
                        <div onClick={handleBack} className="gallery__toBack"></div>

                        {select && <div className="gallery__toDelete" onClick={()=>handleDelete(select.id)}> x </div>
                        }

                     </div>
                </div>
                <div className="gallery__derecha">

                    <div className="gallery__stikers">
                        {context.Kirbys.map((stiker,index)=>{

                        if((context.Kirbys.length>2)){
                            if((index>=context.Kirbys.length-pagina) && (index<context.Kirbys.length-pagina+2)){             
                                return<div onClick={()=>handleSelect(stiker)} > 
                                   <Kirby key={stiker.id} {...stiker}/>
                                </div>
        
                                }
                        }else{
                            return<div onClick={()=>handleSelect(stiker)} > 
                            <Kirby key={stiker.id} {...stiker}/>
                         </div>                        }

                           
                        })}
                        
                    </div>

                    {context.Kirbys.length>2 &&
                       
                    <div className="gallery__next">
                        <div className="gallery__toNext" onClick={handlePagina}></div>
                    </div>

                    }                    

                </div>
            </div>
        </div>
      );
}

export default Gallery;
