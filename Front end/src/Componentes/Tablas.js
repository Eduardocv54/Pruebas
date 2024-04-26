import MUIDataTable from "mui-datatables"

import {Col, Button, Row } from 'react-bootstrap'
import { useState} from 'react';
import axios from 'axios'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../Redux/Actions/Action";


const columns = [
  "idUsuario", 
  "nombre", 
  "primerApellido", 
  "segundoApellido", 
  "fechaNacimiento", 
];

export default function Tablas ({settable}) {
///
    const dispatch = useDispatch();
    const {usuarios} = useSelector((state) => state.getUsers);

    useEffect(()=> {
      dispatch(getUsers());
    },[dispatch])
  
  return (
    <>
      <div className="display: flex; justify-content: space-between; align-items: right;">
        <Button onClick={settable} >Nuevo Usuario</Button>
      </div>
  <br></br>
      <div>
        <Button onClick={settable}>Editar</Button>
      </div>
     {usuarios && usuarios.data ? (
      <MUIDataTable
      
      data = {usuarios}
      columns = {columns}
      />
     ):(null)}
     
      
    </>
  )
}



