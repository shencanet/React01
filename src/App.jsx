import { Fragment } from 'react';
import Img1 from './assets/images/react.svg';

const OnlineText = () => {
  return (
    <div>
      <h1>Online</h1>
    </div>
  );
};

const OfflineText = () => {
  return (
    <div>
      <h1>Offline</h1>
    </div>
  );
};

//destructuring props and fixing console.log
const MyButton = ({ text }) => {
  console.log(text);
  return <button>{text}</button>;
};

const ItemFruit = ({ fruit, index }) => {
  return <li key={index}>{fruit} --- {index}</li>;
};

const App = () => {
  const name = 'Mi Titulo desde una constante';
  const classTitle = 'text-center';
  const patkImg = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  const user = false;
  const fruits = ['manzana', 'pera', 'uva', 'sandia'];

  return (
    <>
      <h1 className={classTitle}>{name.toUpperCase()}</h1>
      <img src={patkImg} alt={`imagen-${name}`} />
      <img src={Img1} alt={`imagen-${name}`} />
      <MyButton text="Boton 1" />
      <MyButton text="Boton 2" />
      <MyButton text="Boton 3" />
      <MyButton text="Boton 4" />
      {user ? <OnlineText /> : <OfflineText />}
      <ul>
        {fruits.map((fruit, index) => (
          <ItemFruit key={index} fruit={fruit} index={index} />
        ))}
      </ul>
    </>
  );
};

export default App;

