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
import imag from './Components/Projects/images/AluraBooks.png'

function App() {

  const Tecnologias = [{
    "img": "/static/media/html5.0430e6560d324b0fc31354614335c703.svg",
    "nome": "HTML5",
    "text": "HTML é uma linguagem de marcação utilizada na construção de paginas web."
  },
  {
    "img": "/static/media/css3.c87f005c0a4ef485769c2affbd2f3591.svg",
    "nome": "CSS3",
    "text": "Utilizado  para estilizar elementos  escritos em linguagem de marcação."
  },
  {
    "img": "/static/media/js.69772427946005069a393e09c99f81db.svg",
    "nome": "JavaScript",
    "text": "Utilizo JavaScript para criar aplicações com comportamento interativo e complexo."
  },
  {
    "img": "/static/media/react.de77132174efc89046a215afb4cacfa4.svg",
    "nome": "ReactJS",
    "text": "FrameWork usado para proporcionar interatividade ao usuario e componetizar a pagina."
  },
  {
    "img": "/static/media/tailwind.3549d9e451d7abb96934.png",
    "nome": "Tailwind",
    "text": "O tailwind é um FrameWork do CSS utilizado para estilizar os elementos atraves de classes."
  },
  {
    "img": 'data:image/png;base64,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',
    "nome": "Flutter",
    "text": "Utilizo  o Flutter juntamente com o Dart para a criação de telas para dispositivos mobile."
  },
  {
    "img": "/static/media/git.0e948555c2340e4961f9973d0877f89c.svg",
    "nome": "Git e GitHub",
    "text": "Utilizo  o git como programa de versionamento das minhas aplicações."
  },
  {
    "img": "/static/media/node.971dfb1ed7935160807e965d8582c35e.svg",
    "nome": "NodeJS",
    "text": "Utilizo Node.JS para criação de API's no padrão REST."
  }
  ]

  const cursos = [{
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
  },{
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
        <Technology tecnologias={Tecnologias}></Technology>
        <Projects></Projects>
        <Courses cursos={cursos}></Courses>
        <Footer></Footer>
      </div>
      <ScrollUp></ScrollUp>
    </section>
  );
}

export default App;
