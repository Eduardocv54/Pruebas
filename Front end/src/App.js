import so from './so.png';
import './App.css';
import Formulario from './Componentes/Formulario.js';
import { useState } from 'react';


function App() {
  const [personaNombre, setPersona] = useState("Eduardo");
  return (
    <div className="App">
      <header className="App-header">

        <img src={so} className="App-logo" alt="fam" />
        <Formulario personaNombre = {personaNombre}/>
      </header>
             
    </div>
  );
}

export default App;
