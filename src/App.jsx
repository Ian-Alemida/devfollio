import './reset.css';
import './App.css';
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
    "nome": 'React: desenvolvendo com JavaScript',
    "plataform": 'Alura',
    "time": '14h - 2023',
    "link": 'https://cursos.alura.com.br/user/iangtaonline1/course/react-desenvolvendo-javascript/certificate'
  },
  {
    "nome": 'React: como os componentes funcionam',
    "plataform": 'Alura',
    "time": '8h - 2023',
    "link": 'https://cursos.alura.com.br/user/iangtaonline1/course/react-componentes-funcionam/certificate'
  },
  {
    "nome": 'Formação HTML e CSS',
    "plataform": 'Alura',
    "time": '65h - 2022',
    "link": 'https://cursos.alura.com.br/degree/certificate/41d45351-1690-4a75-b7dc-6a3b2aff321c?lang=pt_BR'
  },
  {
    "nome": 'JavaScript : Logica de programação',
    "plataform": 'Alura',
    "time": '16h - 2022',
    "link": 'https://cursos.alura.com.br/certificate/15294591-d288-4137-b240-23b906d2db17?lang=pt_BR'
  },
  {
    "nome": 'HTML & CSS parte1 - 4',
    "plataform": 'Alura',
    "time": '36h - 2022',
    "link": 'https://cursos.alura.com.br/certificate/55b528c5-dfa7-40e1-aea8-249c7048d6a3?lang=pt_BR'
  },
  {
    "nome": 'JS: programando na linguagem da web',
    "plataform": 'Alura',
    "time": '20h - 2022',
    "link": 'https://cursos.alura.com.br/certificate/0e37e5cb-8eda-4a5c-a0f0-7fcbcc8caecc?lang=pt_BR'
  },
  {
    "nome": 'JavaScript para Web: páginas dinâmicas',
    "plataform": 'Alura',
    "time": '10h - 2022',
    "link": 'https://cursos.alura.com.br/certificate/75558db9-fb85-4cb7-afb7-b2250f3f73e0?lang=pt_BR'
  },
  {
    "nome": "Responsividade com mobile-first",
    "plataform": "Alura",
    "time": "12h - 2022",
    "link": "https://cursos.alura.com.br/certificate/bd20bb5d-d697-4d48-96d8-770a63a2d555?lang=pt_BR"
  },
  {
    "nome": "Flutter: Widgets, Imagens e Animações",
    "plataform": "Alura",
    "time": "16h - 2022",
    "link": "https://cursos.alura.com.br/certificate/ea9ecb16-8183-4cb6-a4ee-5ac44266a4e4?lang=pt_BR"
  },
  {
    "nome": "Flutter: Controller, navegação e estados",
    "plataform": "Alura",
    "time": "10h - 2022",
    "link": "https://cursos.alura.com.br/certificate/e0756453-0b33-4f7f-9f53-7955d1f269e2?lang=pt_BR"
  },
  {
    "nome": "Flutter: aplicando persistência de dados",
    "plataform": "Alura",
    "time": "10h - 2022",
    "link": "https://cursos.alura.com.br/certificate/cec59a3d-2c00-483a-8e9c-462136548588?lang=pt_BR"
  },
  {
    "nome": "Flutter com WebAPI: integrando aplicações",
    "plataform": "Alura",
    "time": "10h - 2022",
    "link": "https://cursos.alura.com.br/certificate/1a1f7a1a-84d1-4018-8f53-2b290a6f0dbf?lang=pt_BR"
  },
  {
    "nome": "Dart: entendendo a Orientação a Objetos",
    "plataform": "Alura",
    "time": "12h - 2022",
    "link": "https://cursos.alura.com.br/certificate/a4d56fcb-f43e-4675-b939-45e383a4433f?lang=pt_BR"
  },
  {
    "nome": "Dart: lidando com Exceptions e Null Safety",
    "plataform": "Alura",
    "time": "12h - 2022",
    "link": "https://cursos.alura.com.br/certificate/db593eb5-2a1f-44fb-9dff-3396a8ce4ec7?lang=pt_BR"
  },
  {
    "nome": "Dart: sintaxe, coleções e dinamismo",
    "plataform": "Alura",
    "time": "8h - 2022",
    "link": "https://cursos.alura.com.br/certificate/5d0853bb-737a-4fa7-85d6-51a74a05d2b5?lang=pt_BR"
  },
  {
    "nome": "Dart: Manipulando variáveis e listas",
    "plataform": "Alura",
    "time": "10h - 2022",
    "link": "https://cursos.alura.com.br/certificate/380932f7-d728-4456-8cbc-b5c4bb79a641?lang=pt_BR"
  },
  {
    "nome": "Git e GitHub: commit, repositório e versões",
    "plataform": "Alura",
    "time": "8h - 2022",
    "link": "https://cursos.alura.com.br/certificate/ec317584-eaa5-471f-bb72-9fa2369c214f?lang=pt_BR"
  },
  {
    "nome": "Acessibilidade Web parte 1 e 2",
    "plataform": "Alura",
    "time": "14h - 2022",
    "link": "https://cursos.alura.com.br/certificate/9f23fc99-df9d-4dc2-8c49-ed9eb6a93ff9?lang=pt_BR"
  },
  {
    "nome": "JavaScript : tipos, variáveis e funções",
    "plataform": "Alura",
    "time": "12h - 2022",
    "link": "https://cursos.alura.com.br/certificate/b78d90a3-2ef7-458e-a0f2-87ef4b8a2fe3?lang=pt_BR"
  },
  {
    "nome": "Expressões regulares: Capturando Textos",
    "plataform": "Alura",
    "time": "12h - 2022",
    "link": "https://cursos.alura.com.br/certificate/d5502a39-efc6-4355-b3d5-fc78a23ddfa9?lang=pt_BR"
  },
  {
    "nome": "JavaScript : Arrays",
    "plataform": "Alura",
    "time": "10h - 2022",
    "link": "https://cursos.alura.com.br/certificate/851492e3-ad55-4b04-9ad2-834d2a16a8f7?lang=pt_BR"
  },
  {
    "nome": "Trabalhando com layouts mobile",
    "plataform": "Alura",
    "time": "7h - 2022",
    "link": "https://cursos.alura.com.br/certificate/ffd81190-8a9f-4d75-b68a-1f86a335f3e1?lang=pt_BR"
  },
  {
    "nome": "CSS Grid: simplificando layouts",
    "plataform": "Alura",
    "time": "8h - 2022",
    "link": "https://cursos.alura.com.br/certificate/5f929371-aba7-4a30-920d-094fc5623e4e?lang=pt_BR"
  },
  {
    "nome": "Flexbox: posicione elementos na tela",
    "plataform": "Alura",
    "time": "9h - 2022",
    "link": "https://cursos.alura.com.br/certificate/8a408a55-9bd5-41d5-b9c9-b330db9e41fa?lang=pt_BR"
  }, {
    "nome": "SEO: otimização de sites",
    "plataform": "Alura",
    "time": "8h - 2022",
    "link": "https://cursos.alura.com.br/certificate/e0bfb7bf-5209-4e94-b16c-5188e0d289f9?lang=pt_BR"
  },
  {
    "nome": "HTML e CSS: praticando HTML/CSS",
    "plataform": "Alura",
    "time": "8h - 2022",
    "link": "https://cursos.alura.com.br/certificate/2a5140b9-bc6f-420c-9a8f-76740327991f?lang=pt_BR"
  },
  {
    "nome": "CSS: Flexbox e Grid",
    "plataform": "Alura",
    "time": "8h - 2022",
    "link": "https://cursos.alura.com.br/certificate/d41eda21-76ed-449e-8270-98ae934aa558?lang=pt_BR"
  },
  {
    "nome": "Arquitetura de CSS",
    "plataform": "Alura",
    "time": "8h - 2022",
    "link": "https://cursos.alura.com.br/certificate/a2d4daf2-7b26-4d48-9bfe-b6ab0e6d63c7?lang=pt_BR"
  }]

  return (
    <section>
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <About></About>
        <Technology></Technology>
        <Projects></Projects>
        <Courses cursos={cursos}></Courses>
        <Footer></Footer>
      </div>
      <ScrollUp></ScrollUp>
    </section>
  );
}

export default App;
