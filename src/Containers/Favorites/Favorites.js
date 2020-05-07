import React from 'react';
import './Favorites.css';
import { Link } from "react-router-dom";


function Favorites() {
    return (
        <div className="favorites">
    
                <div className="favorites__cuaderno"> 
                <div className="favorites__izquierda">
                    <Link className = "favorites__link" to = "/">
                        <div className="favorites__home">
                            <div className="favorites__toHome"></div>
                        </div>
                     </Link>
                     <div className="favorites__preview"></div>
                     <div className="favorites__back">
                        <div className="favorites__toBack"></div>
                     </div>
                </div>
                <div className="favorites__derecha">

                    <div className="favorites__stikers">

                        
                    </div>
                    <div className="favorites__next">
                        <div className="favorites__toNext"></div>
                    </div>

                </div>
            </div>
        </div>
      );
}

export default Favorites;
