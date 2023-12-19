import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyNav from './components/MyNav'
import MyJumbotron from './components/MyJumbotron';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Container fluid className='containerFluid'>
      <MyNav />
      <Container>
        <MyJumbotron />
        <AllTheBooks />
      </Container>
      <MyFooter />
    </Container>
  );
}

export default App;
