import "./App.css";
import github from "./images/github.png";
import Boton from "./components/Boton";
import Contador from "./components/Contador";
import { useState } from "react";
function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={github} alt="Logo Github" />
      </div>
      <div className="container-principal">
        <Contador numClics={numClics}/> 
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
