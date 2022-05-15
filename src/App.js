import './App.css';
import NavBar from './components/NavComponent';
import Category from './components/CategoryComponent'
import { Container } from './elements';

function App() {
  return (
    <div className="App">
      <Container>
        <NavBar/>
        <Category/>
      </Container>
    </div>
  );
}

export default App;
