
//destructuring props and fixing console.log
const MyButton = ({ text }) => {

    return (
    
         //console.log(text);
         <button onClick={ () => PulsarBoton(text)}>
         {text}
       </button>)
    };

    const PulsarBoton = (text) => {
        console.log('Pulsado  ' + text);
      }
      

    export default MyButton;