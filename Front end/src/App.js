import so from './so.png';
import './App.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={so} className="App-logo" alt="fam" />
      
        <Form.Label >Nombre : </Form.Label>

        <Form.Control type = "Text"></Form.Control>

        <Button >Guardar</Button>
       
      </header>
    </div>
  );
}

export default App;
