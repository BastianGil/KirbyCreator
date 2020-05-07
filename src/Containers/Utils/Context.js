import React from 'react';

const Context= React.createContext({


    Kirbys:[

    ], 

    setKirbys:() => null,
    
    handleDelete:() => null,

    save:()=> null,

    Kirby:{
        forma: 1,
        emocion: "",
        nivel: 1,
        cabeza: 1,
        gris: '0',
        tamano: '25',
        id: "",
        fav: false,
    },
    setKirby:() => null,

});

export default Context;
