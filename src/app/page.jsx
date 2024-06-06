'use client'
import '@/app/reset.css'
import './page.css'
import '@/app/globals.css'
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Technology from './Components/Technology/Technology';
import Projects from './Components/Projects/Projects';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/ScrollUp/ScrollUp';
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [cursosdb, setCursosdb] = useState([]);
  const [tecnologiasdb, setTecnologiasdb] = useState([]);

  useEffect(() => { // useEffect sendo usado para atualizar a nossa aplicação assim que os dados da API forem buscados
    async function buscarDados() {
      try {
        axios.get('api/getCourses.js').then((response) => setTecnologiasdb(response));
        axios.get('api/getCourses.js').then((response) => setCursosdb(response));
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        // Implementar lógica para lidar com o erro (ex: exibir mensagem, redirecionar, etc.)
      }
    }
    buscarDados()
  }, []);

  return (
    <section className='root'>
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <About></About>
        <Technology Tecnologias={tecnologiasdb}></Technology>
        <Projects></Projects>
        <Courses cursos={cursosdb}></Courses>
        <Footer></Footer>
      </div>
      <ScrollUp></ScrollUp>
    </section>
  );
}

/*// Utilizando axios para fazer a requisição dos dados na nossa api, em forma de função assíncrona  
const getCursos = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/cursosdb');
    const cursos = response.data;
    return cursos;
  } catch (error) {
    console.error(error);
    return [{
      "erro": "erro ao buscar cursosdb"
    }];
  }
};
const getTecnologias = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/tecnologiasdb');
    const tecnologias = response.data;
    return tecnologias;
  } catch (error) {
    console.error(error);
    return [{
      "erro": "erro ao buscar tecnologias db"
    }];
  }
};*/

export default App;
