import so from './so.png';
import './App.css';
import { useState } from 'react';
import Formulario from './Componentes/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row } from 'react-bootstrap';
import Tablas from './Componentes/Tablas';


function App() {
  const [personaNombre, setPersona] = useState("Eduardo");
  return (
    <div className="App" >
      
      <header className="App-header">

        <img src={so} className="App-logo" alt="fam" />
        <br></br>     
      </header>
      <br></br>
      <Row className='justify-content-center'>
      <Col sm={10}>
        <Tablas></Tablas>
         </Col>
      </Row>
     
      
    </div>
    
  );
}

export default App;
