import './App.css';
import Description from './components/Description';
import Name from './components/Name';
import Navigbar from './components/Navigbar';
import {Card, Button} from 'react-bootstrap';
import Price from './components/Price';
import ProdImg from './components/ProdImg';
import profile from './assets/profile.png';


function App() {
  const firstName = "Yahia"
  return (
    <div className="App">
      <Navigbar/>
      <h1>Checkpoint React JS</h1>
      {/* *******************************
       */}
       <Card style={{ width: '18rem', margin: 'auto'}}>
      <ProdImg/>
      <Card.Body>
        <Name/>
        <Price/>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Button variant="primary">Check it out</Button>
      </Card.Body>
    </Card>
    <h2> {firstName? `Hello ${firstName}`: 'Hello there !'} </h2>
    {firstName && <img src={profile} alt='Pic'/>}
    </div>
  );
}

export default App;
