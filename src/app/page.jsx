'use client'
import '@/app/reset.css'
import './page.css'
import '@/app/globals.css'
import BackgroundStars from './Components/Background-stars/Background-stars';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Technology from './Components/Technology/Technology';
import Projects from './Components/Projects/Projects';
import Courses from './Components/Courses/Courses';
import Footer from './Components/Footer/Footer';
import ScrollUp from './Components/ScrollUp/ScrollUp';
import styled from 'styled-components';
import ChatbotGemini from './Components/ChatbotGemini/ChatbotGemini';


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
      <ChatbotGemini />
    </Container>
  );
}

export default App;