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
            (<Formulario setform={chvalue}></Formulario>) 
            : (<Tablas settable={chvalue} ></Tablas>)
    );
  }


export default UserIndex;
