import { Fragment } from 'react';
import Img1 from './assets/images/react.svg';
import MyButton from '../public/components/Button';
import WelcomeText from '../public/components/WelcomeText';
import ButtonState from './ButtonState';


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


const ItemFruit = ({ fruit, index }) => {
  return <li key={index}>{fruit} --- {index}</li>;
};



const App = () => {
  const name = 'Mi Titulo desde una constante';
  const classTitle = 'text-center';
  const patkImg = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  const user = true;
  const fruits = ['manzana', 'pera', 'uva', 'sandia'];
  const user2 = 'shen';

  return (
    <>
      <ButtonState />
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

//{user && <WelcomeText text = "shen" user={user2}/>}

