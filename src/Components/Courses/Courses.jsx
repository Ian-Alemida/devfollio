import CardTecnologo from './Cards/CardTecnologo';
import CardCourses from './Cards/CardCourses';
import './courses.css'

function Courses () {
    return(
        <section className='content-courses'>
            <h2>Formação<span>.</span></h2>
            <div className='content-courses-row'>
                <CardTecnologo></CardTecnologo>
                <CardCourses curso='Formação HTML e CSS' plataform='Alura' time='65h - 2022' link='https://cursos.alura.com.br/degree/certificate/41d45351-1690-4a75-b7dc-6a3b2aff321c?lang=pt_BR'></CardCourses>
                <CardCourses curso='JavaScript: Logica de programação' plataform='Alura' time='16h - 2022' link='https://cursos.alura.com.br/certificate/15294591-d288-4137-b240-23b906d2db17?lang=pt_BR'></CardCourses>
            </div>
            <div className='content-courses-row'>
                <CardCourses curso='HTML & CSS parte1 - 4' plataform='Alura' time='36h - 2022' link='https://cursos.alura.com.br/certificate/55b528c5-dfa7-40e1-aea8-249c7048d6a3?lang=pt_BR'></CardCourses>
                <CardCourses curso='CSS: Flexbox e Grid' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/d41eda21-76ed-449e-8270-98ae934aa558?lang=pt_BR'></CardCourses>
                <CardCourses curso='HTML e CSS: praticando HTML/CSS' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/2a5140b9-bc6f-420c-9a8f-76740327991f?lang=pt_BR'></CardCourses>
                <CardCourses curso='Responsividade com mobile-first' plataform='Alura' time='12h - 2022' link='https://cursos.alura.com.br/certificate/bd20bb5d-d697-4d48-96d8-770a63a2d555?lang=pt_BR'></CardCourses>
            </div>
            <div className='content-courses-row'>
                <CardCourses curso='Arquitetura de CSS' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/a2d4daf2-7b26-4d48-9bfe-b6ab0e6d63c7?lang=pt_BR'></CardCourses>
                <CardCourses curso='JavaScript: tipos, variáveis e funções' plataform='Alura' time='12h - 2022' link='https://cursos.alura.com.br/certificate/b78d90a3-2ef7-458e-a0f2-87ef4b8a2fe3?lang=pt_BR'></CardCourses>
                <CardCourses curso='Git e GitHub: commit, repositório e versões' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/ec317584-eaa5-471f-bb72-9fa2369c214f?lang=pt_BR'></CardCourses>
                <CardCourses curso='Flexbox: posicione elementos na tela' plataform='Alura' time='9h - 2022' link='https://cursos.alura.com.br/certificate/8a408a55-9bd5-41d5-b9c9-b330db9e41fa?lang=pt_BR'></CardCourses>
            </div>
            <div className='content-courses-row'>
                <CardCourses curso='JavaScript: Arrays' plataform='Alura' time='10h - 2022' link='https://cursos.alura.com.br/certificate/851492e3-ad55-4b04-9ad2-834d2a16a8f7?lang=pt_BR'></CardCourses>
                <CardCourses curso='Trabalhando com layouts mobile' plataform='Alura' time='7h - 2022' link='https://cursos.alura.com.br/certificate/ffd81190-8a9f-4d75-b68a-1f86a335f3e1?lang=pt_BR'></CardCourses>
                <CardCourses curso='CSS Grid: simplificando layouts' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/5f929371-aba7-4a30-920d-094fc5623e4e?lang=pt_BR'></CardCourses>
                <CardCourses curso='Acessibilidade Web parte 1 e 2' plataform='Alura' time='14h - 2022' link='https://cursos.alura.com.br/certificate/9f23fc99-df9d-4dc2-8c49-ed9eb6a93ff9?lang=pt_BR'></CardCourses>
            </div>
            <div className='content-courses-row'>
                <CardCourses curso='SEO: otimização de sites' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/e0bfb7bf-5209-4e94-b16c-5188e0d289f9?lang=pt_BR'></CardCourses>
                <CardCourses curso='JavaScript para Web: páginas dinâmicas' plataform='Alura' time='10h - 2022' link='https://cursos.alura.com.br/certificate/75558db9-fb85-4cb7-afb7-b2250f3f73e0?lang=pt_BR'></CardCourses>
                <CardCourses curso='JS: programando na linguagem da web' plataform='Alura' time='20h - 2022' link='https://cursos.alura.com.br/certificate/0e37e5cb-8eda-4a5c-a0f0-7fcbcc8caecc?lang=pt_BR'></CardCourses>
                <CardCourses curso='Expressões regulares: Capturando Textos' plataform='Alura' time='12h - 2022' link='https://cursos.alura.com.br/certificate/d5502a39-efc6-4355-b3d5-fc78a23ddfa9?lang=pt_BR'></CardCourses>
            </div>
            <div className='content-courses-row'>
                <CardCourses curso='SEO: otimização de sites' plataform='Alura' time='8h - 2022' link='https://cursos.alura.com.br/certificate/e0bfb7bf-5209-4e94-b16c-5188e0d289f9?lang=pt_BR'></CardCourses>
                <CardCourses curso='JavaScript para Web: páginas dinâmicas' plataform='Alura' time='10h - 2022' link='https://cursos.alura.com.br/certificate/75558db9-fb85-4cb7-afb7-b2250f3f73e0?lang=pt_BR'></CardCourses>
                <CardCourses curso='JS: programando na linguagem da web' plataform='Alura' time='20h - 2022' link='https://cursos.alura.com.br/certificate/0e37e5cb-8eda-4a5c-a0f0-7fcbcc8caecc?lang=pt_BR'></CardCourses>
                <CardCourses curso='Expressões regulares: Capturando Textos' plataform='Alura' time='12h - 2022' link='https://cursos.alura.com.br/certificate/d5502a39-efc6-4355-b3d5-fc78a23ddfa9?lang=pt_BR'></CardCourses>
            </div>
        </section>
    )
}

export default Courses;