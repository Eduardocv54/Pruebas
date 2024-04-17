import so from './so.png';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios'

import Formulario from './Componentes/Formulario'
import Tablas from './Componentes/Tablas';
import UserIndex from './Componentes/Index';



function App() {

  function martes (){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
    console.log("Datos Lunes", response)
  });
 }
  

  return (
    <div className="App" >
      <header className="App-header">
        <img src={so} className="App-logo" alt="fam" />
        <br></br>     
      </header>

  <br></br>
  <br></br>
  
      <Row className='justify-content-center'>
        <Col sm={10}>
          <Button onClick={martes}>Si</Button>
        </Col>
      </Row>
    </div>
    
  );
}



export default App;
