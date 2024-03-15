import {Col, Button, Row, Form} from 'react-bootstrap'

function Formulario (personaNombre){
    function Click(){
         console.log (personaNombre);
    }
   
    return (
       <Row >
            <Col>
                <Form.Label >CASINO ROYALE  </Form.Label>
            </Col>
            <Col>
                <Form.Label >Nombre : </Form.Label>
            </Col>
            <Col>
                <Form.Control type = "Text" value = {personaNombre.personaNombre}> </Form.Control>
            </Col>
            <Col>
                <Button onClick = {Click()}> Guardar</Button> 
            </Col>
          
        </Row>
    );
}

 
export default Formulario;