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

  const cursos = [{
    curso: 'Formação HTML e CSS', 
    plataform: 'Alura', 
    time: '65h - 2022', 
    link: 'https://cursos.alura.com.br/degree/certificate/41d45351-1690-4a75-b7dc-6a3b2aff321c?lang=pt_BR'
  },
  {
    curso: 'JavaScript : Logica de programação',
    plataform: 'Alura', 
    time: '16h - 2022',
    link: 'https://cursos.alura.com.br/certificate/15294591-d288-4137-b240-23b906d2db17?lang=pt_BR'
  },
  {
    curso: 'HTML & CSS parte1 - 4', 
    plataform: 'Alura', 
    time: '36h - 2022', 
    link: 'https://cursos.alura.com.br/certificate/55b528c5-dfa7-40e1-aea8-249c7048d6a3?lang=pt_BR'
  },
  {
    curso: 'JS: programando na linguagem da web',
    plataform: 'Alura', 
    time: '20h - 2022', 
    link: 'https://cursos.alura.com.br/certificate/0e37e5cb-8eda-4a5c-a0f0-7fcbcc8caecc?lang=pt_BR'
  },
  {
    curso: 'JavaScript para Web: páginas dinâmicas', 
    plataform: 'Alura', 
    time: '10h - 2022', 
    link: 'https://cursos.alura.com.br/certificate/75558db9-fb85-4cb7-afb7-b2250f3f73e0?lang=pt_BR'
  }
]
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
