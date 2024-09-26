import { useState } from "react";

const ButtonState = () => {
    let count = 0;
    const arrayState = useState(1);//inicializado
    const stateNumber = arrayState[0];//ESTADO
    const stateFunction = arrayState[1];//FUNCION  MODIFICADORA



    const handleClick = () => {
        console.log('Boton Clickeado');
        //count++;
        stateFunction(stateNumber + 1);
        console.log(arrayState);
    };
  return <button onClick={handleClick}>Counter  {stateNumber}</button>;
}

export default ButtonState;