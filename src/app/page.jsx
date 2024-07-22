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
import BackgroundStars from './Components/Background-stars/Background-stars';
import styled from 'styled-components';


const Container = styled.section`
color: white;
`
function App() {

  return (
    <Container>
      <BackgroundStars />
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
    </Container>
  );
}

export default App;