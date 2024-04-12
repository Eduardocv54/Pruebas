import MUIDataTable from "mui-datatables"
import {Col, Button, } from 'react-bootstrap'
import { useState } from 'react';

const usuarios = [
    {
      "id": 1,
      "Nombre": "Juan",
      "PrimerApellido": "González",
      "SegundoApellido": "Pérez",
      "Correo": "juan.gonzalez@example.com",
      "Telefono": "123456789",
      "NombredeUsuario": "juang"
    },
    {
      "id": 2,
      "Nombre": "María",
      "PrimerApellido": "López",
      "SegundoApellido": "García",
      "Correo": "maria.lopez@example.com",
      "Telefono": "987654321",
      "NombredeUsuario": "marial"
    },
    {
      "id": 3,
      "Nombre": "Carlos",
      "PrimerApellido": "Martínez",
      "SegundoApellido": "Rodríguez",
      "Correo": "carlos.martinez@example.com",
      "Telefono": "456789123",
      "NombredeUsuario": "carlosm"
    },
    {
      "id": 4,
      "Nombre": "Ana",
      "PrimerApellido": "Fernández",
      "SegundoApellido": "López",
      "Correo": "ana.fernandez@example.com",
      "Telefono": "741852963",
      "NombredeUsuario": "anaf"
    },
    {
      "id": 5,
      "Nombre": "Pedro",
      "PrimerApellido": "Sánchez",
      "SegundoApellido": "Martínez",
      "Correo": "pedro.sanchez@example.com",
      "Telefono": "369258147",
      "NombredeUsuario": "pedros"
    },
    {
      "id": 6,
      "Nombre": "Laura",
      "PrimerApellido": "Díaz",
      "SegundoApellido": "Fernández",
      "Correo": "laura.diaz@example.com",
      "Telefono": "852147963",
      "NombredeUsuario": "laurad"
    },
    {
      "id": 7,
      "Nombre": "Javier",
      "PrimerApellido": "Pérez",
      "SegundoApellido": "Sánchez",
      "Correo": "javier.perez@example.com",
      "Telefono": "951753852",
      "NombredeUsuario": "javierp"
    },
    {
      "id": 8,
      "Nombre": "Sara",
      "PrimerApellido": "García",
      "SegundoApellido": "Martínez",
      "Correo": "sara.garcia@example.com",
      "Telefono": "753951852",
      "NombredeUsuario": "sarag"
    },
    {
      "id": 9,
      "Nombre": "Miguel",
      "PrimerApellido": "Hernández",
      "SegundoApellido": "Sánchez",
      "Correo": "miguel.hernandez@example.com",
      "Telefono": "159753852",
      "NombredeUsuario": "miguelh"
    },
    {
      "id": 10,
      "Nombre": "Lucía",
      "PrimerApellido": "Martín",
      "SegundoApellido": "Pérez",
      "Correo": "lucia.martin@example.com",
      "Telefono": "852963741",
      "NombredeUsuario": "luciam"
    },
    {
      "id": 11,
      "Nombre": "Daniel",
      "PrimerApellido": "Jiménez",
      "SegundoApellido": "Gómez",
      "Correo": "daniel.jimenez@example.com",
      "Telefono": "369147258",
      "NombredeUsuario": "danield"
    }
];

const columns = [
    "id", 
    "Nombre", 
    "PrimerApellido", 
    "SegundoApellido", 
    "Correo", 
    "Telefono", 
    "NombredeUsuario"
];




export default function Tablas () {
  const  Click= ()=> {
  }
  const [formularioAbierto, setFormularioAbierto] = useState(false);  //Variable constante para abrir y cerrar formulario con false/true
  const [tablaabierta, setTablaAbierta] = useState(true);

  const abrirFormulario = () => {
    setFormularioAbierto(true);
    setTablaAbierta(false);
  };

  const handleCloseFormulario = () => {
    setFormularioAbierto(false);
    setTablaAbierta(true)
  };
    return (

      <>
      <Button className="NewUser" onClick={abrirFormulario}>Nuevo Usuario</Button> 
      <MUIDataTable
      
        data = {usuarios}
        columns = {columns}
        />
      </>
        
    )
}



