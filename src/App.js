import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Alert, Breadcrumb, Card} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Card className="mb-5" style={{color:"#000", width: '30rem'}} >
        <Card.Img    
src="https://www.bootstrapcdn.com/assets/img/integrations/react-bootstrap.c4f9aa2.png" />
        <Card.Body>
<Card.Title>
This is a card Title
</Card.Title>
<Card.Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
</Card.Text>
        </Card.Body>
      </Card>
      
      <Breadcrumb>
      <Breadcrumb.Item>Link 1</Breadcrumb.Item>
      <Breadcrumb.Item>Link 2</Breadcrumb.Item>
      <Breadcrumb.Item>Link 3</Breadcrumb.Item>

      </Breadcrumb>
      <Alert variant="success">This a bigger Button</Alert>
<Button>Test Button</Button>

      </header>

    </div>
  );
}

export default App;
