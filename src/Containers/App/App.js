import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
import Creator from '../Creator/Creator';
import Favorites from '../Favorites/Favorites'
import Context from '../Utils/Context';
import { KirbysCol } from '../Utils/Firebase';

function App() {

  const [Kirbys, setKirbys]=React.useState([]);

  
    const [Kirby, setKirby]=React.useState({
      forma: 1,
        emocion: "Feliz",
        nivel: '1',
        cabeza: 5,
        gris: '0',
        tamano: '20',
        id: "",
        fav:false,
    })

    const [ loaded, setLoaded ] = React.useState(false);

  React.useEffect(() => {
    KirbysCol.doc('K').onSnapshot((doc) => {
      if(doc.exists && doc.data().list){
        setKirbys(doc.data().list);
      }
      setLoaded(true);
    });
  }, []);

  React.useEffect(() => {
    if(loaded){
      KirbysCol.doc('K').set({
        list: Kirbys,
      });
    }
  }, [ Kirbys, loaded ]);

  const handleDelete = (id) => {
      
    const index = Kirbys.findIndex((elem) => {
      return elem.id === id;
    });
    setKirbys([
      ...Kirbys.slice(0, index),
      ...Kirbys.slice(index + 1),
    ]);
  }

    const save = () => {
   /*   const newKirby = {
        forma:  Kirby.forma,
          emocion:  Kirby.emocion,
          nivel:  Kirby.nivel,
          cabeza:  Kirby.cabeza,
          gris:  Kirby.gris,
          tamano:  Kirby.tamano,
      };*/
      setKirbys ([
        ...Kirbys,
        {
          forma:  Kirby.forma,
          emocion:  Kirby.emocion,
          nivel:  Kirby.nivel,
          cabeza:  Kirby.cabeza,
          gris:  Kirby.gris,
          tamano:  Kirby.tamano,
          id: Kirby.id,
          fav: Kirby.fav,
        }
      ]);

      setKirby({
        forma: 1,
        emocion: "Feliz",
        nivel: '1',
        cabeza: 5,
        gris: '0',
        tamano: '25',
        id: '',
        fav:false,
      })
     /* KirbysCol.add(newKirby);*/
    };

    const value = {
      Kirby:Kirby,
      setKirby:setKirby,

      Kirbys:Kirbys,
      setKirbys:setKirbys,
      save:save,
      handleDelete:handleDelete,
    }

   
  return (
    <div className="App">
      <Context.Provider value = {value}>

      <Router>

        <Route path = "/" exact component = {Home}/>
        <Route path = "/gallery" exact component = {Gallery}/>
        <Route path = "/creator/:steps?"  component = {Creator}/> 
        <Route path = "/favorites" exact component = {Favorites}/>

      </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
