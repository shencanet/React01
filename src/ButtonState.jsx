import { useState } from "react";

const ButtonState = () => {
    //let count = 0;
    const [count, setCount ] = useState(1);//inicializado
    const arrayState = useState(1);//inicializado
    //const stateNumber = arrayState[0];//ESTADO
    //const stateFunction = arrayState[1];//FUNCION  MODIFICADORA



    const handleClick = () => {
        console.log('Boton Clickeado');
        //count++;
        setCount(count + 1);
        console.log(arrayState);
    };
  return <button onClick={handleClick}>Counter  {count}</button>;
}

export default ButtonState;