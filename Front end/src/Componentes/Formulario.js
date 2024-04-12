import {Col, Button, Row, Form, Control, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap'
import {FormControl} from 'react-bootstrap'
function Formulario ({ personaNombre, onCloseFormulario}){
    function Click(){
         console.log (personaNombre);

         
    }

    const handleCancel = () => {
      onCloseFormulario(); // Cierra el formulario al hacer clic en "Cancelar"
  };

    return (
       <Row sm={7}>
        <Card >
            <CardHeader> Titulo</CardHeader>

            <CardBody>
              <Row>
                <Col>
                  <Form.Label htmlFor='nombre'>Nombre : </Form.Label>
                </Col>
                <Col>
                  <Form.Control className='form-control'> </Form.Control>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                  <Form.Label htmlFor='Primer Apellido'>Primer Apellido : </Form.Label>
                </Col>
                <Col>
                  <Form.Control className='form-control'> </Form.Control>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                  <Form.Label htmlFor='Segundo Apellido'>Segundo Apellido : </Form.Label>
                </Col>
                <Col>
                  <Form.Control className='form-control'> </Form.Control>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                  <Form.Label htmlFor='Nombre de usuario'>Nombre de usuario : </Form.Label>
                </Col>
                <Col>
                  <Form.Control className='form-control'> </Form.Control>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                  <Form.Label htmlFor='Contraseña'>Contraseña : </Form.Label>
                </Col>
                <Col>
                  <Form.Control className='form-control'>  </Form.Control>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                <Form.Label htmlFor='Confirmar Contraseña'>Confirmar Contraseña : </Form.Label>
                </Col>
                <Col>
                  <Form.Control className='form-control'> </Form.Control>
                </Col>
              </Row>
  <br></br>
            </CardBody>

            <CardFooter>
                <Col>
                  <Button onClick = {Click()}> Guardar</Button> 
                  <Button variant="danger" onClick={handleCancel}> Cancelar</Button> 
                </Col>
                
            
            </CardFooter>
        </Card>
      </Row>
    );
}

 
export default Formulario;