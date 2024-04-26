import React, { Component, useState } from 'react';
import Formulario from './Formulario';
import Tablas from './Tablas';


function UserIndex () {

   const [showform, setshowform] = useState (true);

   function chvalue (){
      setshowform (!showform);
   }
   return (
      showform ?
         (<Tablas settable={chvalue} ></Tablas>) 
         : (<Formulario setform={chvalue}></Formulario>)
   );
}


export default UserIndex;
