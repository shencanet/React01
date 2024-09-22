import { Fragment } from 'react';

const MyButton = () =>{
  return <button>Click me!</button>
}
const App = () => {

  const name = 'Mi Titulo desde una constante';
  const classTitle = 'text-center';
  const patkImg = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  
  return (
    <>
    <h1 className={classTitle}>{name.toUpperCase()}</h1>
    <img src={patkImg} alt={`imagen-${name}`}/>
    </>
  );
  };


export default App;

//alt 96 comillas invertidas
