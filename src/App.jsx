import './App.css';
import './reset.css'
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Technology from './Components/Technology/Technology';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Technology></Technology>
      <Projects></Projects>
    </div>
  );
}

export default App;
