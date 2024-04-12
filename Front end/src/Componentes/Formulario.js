
import {Col, Button, Row, Form, Card, CardHeader, CardBody, CardFooter} from 'react-bootstrap'

function Formulario ({setform}){
    
    return (
       <Row sm={7}>
        <Card >
            <CardHeader> Titulo</CardHeader>

            <CardBody>
              <Row>
                <Col>
                  <Form.Label>Nombre : </Form.Label>
                </Col>
                <Col>
                  <Form.Control/>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                  <Form.Label>Primer Apellido : </Form.Label>
                </Col>
                <Col>
                  <Form.Control/>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                  <Form.Label>Segundo Apellido : </Form.Label>
                </Col>
                <Col>
                  <Form.Control/>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                  <Form.Label>Nombre de usuario : </Form.Label>
                </Col>
                <Col>
                  <Form.Control/>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                  <Form.Label>Contraseña : </Form.Label>
                </Col>
                <Col>
                  <Form.Control/>
                </Col>
              </Row>
  <br></br>
              <Row>
                <Col>
                  <Form.Label>Confirmar Contraseña : </Form.Label>
                </Col>
                <Col>
                  <Form.Control/>
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