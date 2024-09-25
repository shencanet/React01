import { Fragment } from 'react';

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

const MyButton = () => {
  return <button>Click me!</button>;
};

const App = () => {
  const name = 'Mi Titulo desde una constante';
  const classTitle = 'text-center';
  const patkImg = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  const pathImg2 = "./src/assets/images/react.svg";
  const user = false;

  return (
    <>
      <h1 className={classTitle}>{name.toUpperCase()}</h1>
      <img src={patkImg} alt={`imagen-${name}`} />
      <img src={pathImg2} alt={`imagen-${name}`} />
      <MyButton />
      {user ? <OnlineText /> : <OfflineText />}
      {user && <OnlineText />}

    </>
  );
};

export default App;

//alt 96 comillas invertidas
