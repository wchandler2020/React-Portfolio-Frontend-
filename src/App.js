import './App.css';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Portolio from './components/portfolio/Portolio';
import Resume from './components/resume/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Portolio />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
