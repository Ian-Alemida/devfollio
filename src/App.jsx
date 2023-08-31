import './App.css';
import './reset.css'
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Technology from './Components/Technology/Technology';
import Projects from './Components/Projects/Projects';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/ScrollUp/ScrollUp';

function App() {
  return (
    <section>
      <div className="App">
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Technology></Technology>
      <Projects></Projects>
      <Courses></Courses>
      <Footer></Footer>
    </div>
    <ScrollUp></ScrollUp>
    </section>
  );
}

export default App;
