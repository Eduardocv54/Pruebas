import MUIDataTable from "mui-datatables"
import {Button} from 'react-bootstrap'
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

    const dispatch = useDispatch();
    const {users} = useSelector((state)=>state.getUsers);

    useEffect(()=> {
      dispatch(getUsers());
    },[dispatch])
  
  return (
    <>
      <Button onClick={settable}>Nuevo Usuario</Button>
      <Button onClick={settable}>Editar</Button>
    
      <MUIDataTable
        data = {users}
        columns = {columns}
      />
    </>
  )
}



