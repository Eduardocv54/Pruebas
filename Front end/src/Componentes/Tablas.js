import MUIDataTable from "mui-datatables"

import {Col, Button, Row } from 'react-bootstrap'
import { useState} from 'react';
import axios from 'axios'

const columns = [
    "userid", 
    "id", 
    "title", 
    "body"
];

export default function Tablas ({settable}) {

  function martes (){
    const getUser = (settable)
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log("Datos Lunes", response)
    });
  }

  return (
    <>
      <Row className="justify-content-left">
        <Button onClick={settable}>Nuevo Usuario</Button>
      </Row>
    
      <MUIDataTable
      data = {settable.data}
      columns = {columns}
      />
    </>

  )
}



