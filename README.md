# Devfollio

O Devfollio é um portfólio SPA (Single Page Application) dinâmico e interativo,, construído com **React**, **Next.js** e **MongoDB**. O projeto destaca-se pelos seus componentes interativos e responsivos, aproveitando os principais hooks do React e a renderização condicional para criar uma experiência dinâmica. Além disso, utiliza recursos do Next.js, como a renderização de páginas dinâmicas e estáticas com SSR e SSG, e a API integrada do Next.js para buscar dados do MongoDB Atlas. O projeto segue o padrão de arquitetura de pasta do Next.js, proporcionando uma organização clara e facilitando a manutenção.


## Principais Funcionalidades

- **API Next.js**: Utiliza a API do Next.js para recuperar dados do MongoDB Atlas, permitindo que o portfólio seja atualizado com novos projetos e informações sem a necessidade de redeploy.
- **Componentes Interativos**: Efeitos visuais atraentes, como animações, transições e efeitos de hover, tornam a navegação mais intuitiva e engajadora.
- **Hooks do React**: Utiliza os principais hooks do React para gerenciar o estado e o ciclo de vida dos componentes do portfólio, tornando o código mais modular e fácil de manter.
- **Renderização Dinâmica & Estática**: Otimização do desempenho e da experiência do usuário com 'useClient' do Next.js, que permite renderizar páginas dinâmicas ou estáticas conforme necessário.


## Tecnologias e Conceitos Utilizados

- **React & Next.js**: As tecnologias centrais que impulsionam o desenvolvimento deste portfólio, escolhidas por sua robustez na construção de interfaces de usuário interativas.
- **Renderização do Lado do Cliente**: 'useClient' do Next.js oferece decisões inteligentes sobre a renderização de conteúdo no cliente, otimizando o desempenho.
- **Banco de dados MongoDB Atlas**: Conecta-se com o MongoDB Atlas para requisitar dados que são utilizados em várias partes do portfólio.
- **Hooks do React**:useEffect, useState, useContext e outros aprimoram a organização e a funcionalidade do código.
- **Bootstrap**: Biblioteca CSS comumente utilizada para auxiliar no desenvolvimento de interfaces responsivas.
- **Renderização condicional**: Um conceito fundamental do React para exibir elementos apenas quando as condições forem atendidas.


## Impacto e Aprendizados

O desenvolvimento deste portfólio pessoal não apenas aprimorou minhas habilidades técnicas em React e Next.js, mas também aprofundou meu entendimento sobre gerenciamento de estado, arquitetura baseada em componentes e práticas de desenvolvimento full-stack cruciais para aplicações web modernas. Mais especificamente, esse projeto me ajudou a evoluir em:
- **Aprimoramento de Habilidades em React e Next.js**: Domínio de conceitos essenciais como gerenciamento de estado, arquitetura de componentes e boas práticas de desenvolvimento full-stack.
- **Desenvolvimento Front-end**: Aprofundamento do conhecimento sobre as capacidades do Next.js, incluindo SSR e SSG, e aprimoramento das habilidades de design e programação front-end.
- **Habilidades Back-end Sólidas**: Compreensão e aplicação de conceitos importantes de criação de API e ambientes de servidor Node.js.
- **Integração de Banco de Dados**: Desenvolvimento de habilidades na integração do MongoDB em APIs Node.js, expandindo as possibilidades do projeto.

Como resultado, me sinto mais confiante para desenvolver projetos web complexos e de alta qualidade.


## Bibliotecas Utilizadas

- **axios**: Usada para fazer requisições HTTP.
- **bootstrap**: Framework CSS para estilização rápida e responsiva.
- **cors**: Middleware para habilitar CORS em aplicações web.
- **express**: Framework para aplicações web Node.js.
- **mongodb**: Driver oficial para interação com o MongoDB.
- **mongoose**: Biblioteca para modelagem de dados do MongoDB.
- **next**: Framework React para renderização de páginas e roteamento.
- **react**: Biblioteca JavaScript para criar interfaces de usuário.
- **react-bootstrap**: Integração do Bootstrap com componentes React.
- **react-dom**: Pacote para manipulação do DOM em aplicações React.
- **react-inspector**: Ferramenta para inspeção de estados e props no React.
- **react-scripts**: Conjunto de scripts para criação de aplicações React.
- **web-vitals**: Biblioteca para medição de métricas de qualidade da web.
- **Styled-components**: Biblioteca utilizada para customizar componentes, foi usada para criar o background juntamente com o keyframes para criar animações.

### Dependências de Desenvolvimento

Também utilizei as seguintes bibliotecas para auxiliar em tempo de desenvolvimento:

- **ESLint**: Ajuda a encontrar e corrigir problemas no código.
- **Prettier**: Ferramenta que faz a formatação do código, corrigindo aspectos como espaçamentos, vírgulas, identação, entre outros.
  
### Notas de atualização
<details>
  <summary>v1.0 - O portfólio é hospedado na Vercel.</summary>
  <ul>
    <li>v1.1 - Alterando valores de fontes e espaçamentos para responder dinamicamente ao tamanho da tela, utilizando medidas como vw e rem.</li>
    <li>v1.2 - Modificando o layout do site.</li>
    <li>v1.3 - Os projetos agora são exibidos em um carrossel.</li>
    <li>v1.4 - Mudanças nas customizações do site, criando variáveis globais para armazenar valores como tamanhos de fontes e cores</li>
    <li>v1.5 - Mudanças na forma de visualizar as formações, separando por categorias e deixanndo mais dinâmico</li>
    <li>v2.0 - Todo o projeto foi migrado para o framework NextJS.</li>
    <li>v2.1 - Os dados são requisitados para o MongoDB Atlas fazendo uma chamada de API utilizando os recursos do próprio NextJS.</li>
    <li>v2.2 - Alterando background para um bg dinâmico de céu estrelado, utilizando styled-components + atualização nos textos da página.</li>
  </ul>
</details>


# Como Rodar Este Projeto em sua Maquina?

Você pode acessar o link e ver o projeto na vercel: [Portfolio pessoal](https://devfollio.vercel.app/)

Ou siga as instruções abaixo para rodar o projeto no seu computador:

## Pré-requisitos

Antes de começar, certifique-se de que você tem o seguinte instalado:
- Node.js
- npm (geralmente vem com o Node.js)
- Git


## passo a passo

1. **Clone o repositório**: Primeiro, você precisa clonar o repositório do GitHub para o seu computador. Abra o terminal e execute o seguinte comando:

```bash
git clone <URL_DO_REPOSITÓRIO>
```
Substitua <URL_DO_REPOSITÓRIO> pela URL do repositório do projeto.

2. **Navegue até o diretório do projeto**: Use o comando cd para navegar até o diretório do projeto:

```bash
cd <NOME_DO_DIRETÓRIO>
```
Substitua <NOME_DO_DIRETÓRIO> pelo nome do diretório do projeto.

3. **Instale as dependências**: Agora, você precisa instalar todas as dependências listadas no arquivo package.json. Para isso, execute o seguinte comando:

```bash
npm install
```

4. **Inicie o servidor de desenvolvimento**: Por fim, você pode iniciar o servidor de desenvolvimento executando o seguinte comando:

````bash
npm run dev
````
Agora, você deve ser capaz de acessar o projeto no seu navegador através da URL: http://localhost:3000.
