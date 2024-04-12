
import {Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap'

function Formulario ({setform}){
    
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
                  <Form.Control > </Form.Control>
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
                <Button> Guardar</Button> 
                <Button onClick = {setform}>Cancelar</Button>
            </Col></CardFooter>
      
        </Card>
      </Row>
    );
}

 
export default Formulario;