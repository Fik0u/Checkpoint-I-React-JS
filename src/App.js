import './App.css';
//Making all the necessary imports
import {Card, Button} from 'react-bootstrap';
import Navigbar from './components/Navigbar';
import Description from './components/Description';
import Name from './components/Name';
import Price from './components/Price';
import ProdImg from './components/ProdImg';
import profile from './assets/prof.png';

// All components will be imported in the card 
function App() {
  const firstName = "Yahia"
  return (
    <div className="App">
      <Navigbar/>
       <Card style={{ width: '25rem', margin: 'auto', marginTop: '70px', marginBottom:'50px', padding:'10px'}}>
      <ProdImg/>
      <Card.Body>
        <Name/>
        <Price/>
         <hr></hr>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Button variant="primary">Buy now</Button>
      </Card.Body>
      </Card>

{/* The greetings whether there's a first name or not  */}
      <div className='greetings'>
        <h2 style={{fontFamily:'Georgia, serif', color:'white'}}> {firstName? `Hello ${firstName}`: 'Hello there !'} </h2>
        {firstName && <img src={profile} alt='Pic'/>}
      </div>
    </div>
  );
}

export default App;
