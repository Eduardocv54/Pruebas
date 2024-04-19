import React, { Component, useState } from 'react';
import Formulario from './Formulario';
import Tablas from './Tablas';

import {Provider} from 'react-redux'
import store from '../Redux/Store';


ReactDOM.render(
   <React.StrictMode>
     <Provider>
       <App />
     </Provider>
   </React.StrictMode>,
   document.getElementById('root')
 );

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
