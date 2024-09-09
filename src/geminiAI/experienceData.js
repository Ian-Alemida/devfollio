const tragetoria =
  "Minha trajetória com a tecnologia: Desde criança, sempre gostei muito de tecnologia. Tive meu primeiro computador aos 8 anos. Naquela época, eu o usava principalmente para jogar e acessar o Orkut. Apesar disso, isso despertou meu interesse pela tecnologia. Quando fiquei um pouco mais velho, comecei a assistir vídeos sobre componentes de computadores e eu mesmo fazia a manutenção e trocava peças do meu computador quando necessário.  Após concluir o ensino médio, acabei ingressando na faculdade de Engenharia Civil pelo ENEM, por pressão da família. No segundo período, por não me identificar com o curso e devido à pandemia, resolvi trancar o curso e resgatei minha antiga paixão pela computação. Comecei estudando o básico: algoritmos, lógica de programação, estrutura de dados, design system. Após decidir que realmente gostaria de seguir carreira nessa área, comecei a me aprofundar, direcionando meus estudos para o front-end. Então, comecei a estudar HTML, CSS e JavaScript. Alguns meses depois, descobri o Flutter. Este framework me pareceu muito interessante, então resolvi estudá-lo também. Passei alguns meses estudando Flutter e até desenvolvi algumas telas. No entanto, posteriormente decidi retomar os estudos focados no front-end. Então, decidi usar os conhecimentos que já tinha e migrar para o React. Ao começar com o React, me dei muito bem, devido à base que já tinha e também à grande similaridade com o Flutter. O conceito de widget no Flutter se parece com o de componentes no React, e o de props se parece com os argumentos. Devido a esses fatores, não foi tão difícil me familiarizar com o React, pois a base eu já tinha e uma parte das diferenças eu já tinha absorvido do tempo em que estudei Flutter. Ao conhecer o React, me apaixonei de vez pelo mundo do desenvolvimento e quis me aprofundar cada vez mais. Então, saí da minha cidade no interior e vim para BH para tentar entrar no mercado de tecnologia e também começar oficialmente uma faculdade, pois até então estava aprendendo tudo de maneira autodidata, através de cursos e documentações. Chegando em BH, tive a oportunidade de trabalhar como aprendiz na Hotmart. Mesmo que não fosse na área da tecnologia, isso me ajudou a ter uma vivência em um ambiente corporativo. Simultaneamente a essa vaga de aprendiz, também fiz um curso de programação. Era um curso bem introdutório, então pude revisitar a base de algoritmos, lógica de programação, etc. Me dei muito bem no curso, acho que por já ter o conhecimento de grande parte das coisas que ensinavam lá. Inclusive, até ganhei uma lembrança como aluno destaque. Simultaneamente a isso, continuei estudando programação e, no começo deste ano, decidi dar um passo a mais. Evoluí do React para o Next, por ser um framework mais completo que supre as lacunas que o React deixava. Então, me familiarizei com os conceitos de SSR (Server Side Render) e CSR (Client Side Render). Com o Next, também decidi que ia começar a puxar para um lado mais ‘full-stack’ também e comecei a estudar banco de dados. Fiz até modificações em meu portfólio para consolidar o conhecimento. O portfólio continha alguns dados meus, então peguei esses dados e, em vez de colocá-los junto do código, os subi para um cluster no MongoDB Atlas e recebo os dados utilizando uma chamada de API para renderizá-los na tela. Também estou trabalhando em mais uma melhoria do portfólio agora. Trata-se de um chatbot que estou criando utilizando a API do Gemini. Esse chatbot será alimentado com meus dados e estou desenvolvendo métodos para identificar o que o usuário quer saber e dar ao bot apenas o que faça sentido para responder à pergunta, pensando em economizar tokens. O objetivo desse bot será responder perguntas de possíveis recrutadores ou pessoas que entrem em meu perfil. Dessa forma, o recrutador pode enviar suas perguntas e já receber a informação de maneira fácil, sem precisar ficar procurando por todo o portfólio. Em maio, após o término do meu contrato com a Hotmart, recebi uma proposta para ser estagiário em consultoria técnica de TI na Fi Group. A experiência na Fi tem sido muito enriquecedora, pois minha função lá é coletar e entender informações técnicas sobre projetos de PD&I. Com base nessas informações, escrevo um relatório técnico sobre esses projetos, que é enviado para o MCTI. O órgão, então, decide se o projeto está elegível para usufruir dos benefícios da Lei do Bem. Essa experiência aprimorou significativamente minha visão da área de tecnologia como um todo, pois me permite ter uma visão ampla de muitos projetos, inclusive dos mais modernos que estão sendo desenvolvidos e das tecnologias que estão sendo utilizadas.";

const experiencias = [
  {
    Empresa: "FI GROUP",
    Cargo: "Consultoria Técnica TI - Estagiário ",
    tempo: "Maio/2024 - atual",
    atividades:
      "Elaboração de relatórios de defesa para submissão ao MCTI; Validação de NFs para cálculo de benefícios tributários; Participação de reuniões com clientes para coleta de informações técnicas; Elaboração de planilhas no Excel",
    conclusão:
      "Meu papel atual me permitiu fortalecer minhas habilidades analíticas para análise técnica de projetos em TI e me proporcionou uma ampla visão da área de tecnologia como um todo, auxiliando o meu entendimento sobre os processos envolvidos na concepção de uma tecnologia inovadora.",
  },
  {
    Empresa: "Hotmart",
    Cargo: "CS - Customer Success (programa de aprendizagem)",
    tempo: "Abril/2023 - Abril/2024",
    atividades:
      "SalesForce e BackOffice; Cadastro de infoprodutos; Elaboração de relatórios de performance e planilhas no Excel; Análise de contas cadastradas.",
    conclusão:
      "Meu papel na Hotmart me permitiu desenvolver habilidades interpessoais, organizacionais e de resolução de problemas. Através dessa experiência, fortaleci minha capacidade de adaptação a ambientes dinâmicos",
  },
  {
    Empresa: "AGROTEK",
    Cargo: "vendedor",
    tempo: "Julho/2020 - Janeiro/2023",
    atividades:
      "Planejamento e gestão das atividades operacionais; Controle de estoque; Gerenciamento do financeiro",
  },
];

module.exports = { tragetoria, experiencias };
