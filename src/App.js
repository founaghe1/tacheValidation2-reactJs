import './App.css';
import { Header } from './Components/Header/Header';
import { Navbarr } from './Components/NavBar/Navbarr';
import { Section1 } from './Components/Sections/Section1';
import { Section2 } from './Components/Sections/Section2';

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Header />
      <Section1 />
      <Section2 />
    </div>
  );
}

export default App;
