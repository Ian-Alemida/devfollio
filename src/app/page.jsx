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

  useEffect(() => {
    getCursos().then((data) => setCursosdb(data));
  }, []);

  return (
    <section className='root'>
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <About></About>
        <Technology></Technology>
        <Projects></Projects>
        <Courses cursos={cursosdb}></Courses>
        <Footer></Footer>
      </div>
      <ScrollUp></ScrollUp>
    </section>
  );
}

const getCursos = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/cursosdb');
    const cursos = response.data;
    return cursos;
  } catch (error) {
    console.error(error);
    return [{
      "erro": "erro"
    }];
  }
};

export default App;
