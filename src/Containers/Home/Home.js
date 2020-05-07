import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";



function Home() {
    return (
        <div className="home">
    
                <div className="home__cuaderno"> 
                <div className="home__izquierda">
                     
                </div>
                <div className="home__derecha">

                
                    <div className="home__crear">
                        <Link className = "home__link" to = "/creator">
                        <div className="crear__imag"></div>        
                        <p className = "crear__text" >Create</p>        
                        </Link>                
                    </div>
                

                    <div className="home__galeria">
                        <Link className = "home__link" to = "/gallery">
                        <div className="galeria__imag"></div>
                        <p className="galeria__text" >Gallery</p> 
                        </Link>
                        
                    </div>
{/* 
                    <div className="home__favoritos">
                        <Link className = "home__link" to = "/favorites">
                    <div className="favoritos__imag"></div>
                        <div className="favoritos__text">Favorites</div>  
                        </Link>
                    </div>
*/}
                </div>
            </div>
        </div>
      );
}

export default Home;
