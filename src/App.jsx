import { Fragment } from 'react';

const App = () => {

  const name = 'shen';
  const classTitle = 'text-center';
  const patkImg = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
  
  return (
    <>
    <h1 className={classTitle}>{name.toUpperCase()}</h1>
    <img src={patkImg} alt="google" />
    </>
  );
  };


export default App;
