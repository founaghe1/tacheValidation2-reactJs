import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Navbarr } from './Components/NavBar/Navbarr';
import { Section1 } from './Components/Sections/Section1';
import { Section2 } from './Components/Sections/Section2';
import { Section3 } from './Components/Sections/Section3';
import { Testmonial } from './Components/Sections/Testmonial';

function App() {
  return (
    <div className="App">
      <Navbarr />
      <Header />
      <Section1 />
      <Section2 />
      <Testmonial />
      <Section3 />
      <Footer />
    </div>
  );
}

export default App;
