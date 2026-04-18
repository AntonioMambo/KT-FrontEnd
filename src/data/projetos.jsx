import { HandsoffFotos } from "./ExtractFoto.jsx";
import img1 from "/images/Projetos/PINK2.jpg";
import img2 from "/images/Projetos/conhecerpoder.jpg";
import img3 from "/EmpreenderOrgulho.jpg";
import img4 from "/images/Projetos/MaisPorNos.jpg";
import img5 from "/images/Projetos/handsoff.jpg";
import img6 from "/images/Projetos/visaomais.jpg";
import img7 from "/images/Projetos/WeBelong.jpg";
import img8 from "/ConhecerPoder.jpg";
import img9 from "/VisaoJovem.png";

const projetos = [
  {
    id: 1,
    nome: "Pink Money",
    banner: img1,
    objetivo:
      "Criação de espaços seguros e inclusivos de advocacia para promoção dos direitos socioeconômicos de pessoas LGBTQIA..",
    descricao: [
      "O programa Pink Money, financiado pela HIVOS e implementado pela Kutchindja nos anos de 2024/25 concentra-se especificamente na promoção do empoderamento económico de pessoas LGBTQIA+ nos setores formal e informal, além de colaborar com multinacionais",
      "No ano de 2024 o projeto Pink Money implementou apenas as auscultações comunitárias com empreendedores e aspirantes a empreendedores, devido ao desembolso tardio de fundos pela HIVOS (valor desembolsado em dezembro de 2024)",
    ],
    fotos: Object.values(
      import.meta.glob("../assets/PinkMoney/*.{png,jpg,JPG,jpeg,svg,gif}", {
        eager: true,
        as: "url",
      })
    ),
    Estado: "Ativo",
    patrocinadores: ["UNICEF", "Plan International"],
  },
  {
    id: 2,
    nome: "Mais por nós",
    banner: img4,
    objetivo:
      "Promover servicos de saude sexual e reprodutiva inclusivos e adequados para as necessidades de homens que fazem sexo e pessoas transgenero do sexo masculino",
    descricao: [
      "Nos anos de 2023/24/25 com financiamento do CDC, através de um subacordo entre a Fundação Ariel Glaser e a Associação Kutchindja, desenvolveu se o projeto + Por Nos em 3 unidades sanitarias do distrito da Matola visando melhorar o acesso aos serviços integrados em saúde e HIV, promover espaços seguros e acolhedores para indivíduos gays, bissexuais, queers e HSH (Homens que fazem Sexo com Homens).",
      "O referido projecto tem o seu enfoque na realização de atividades de prevenção positiva e redução de novas infecções do HIV, adotando uma abordagem multifacetada, que inclui o alcance de novos beneficiários, realização de palestras, grupos de apoio, sessões de cinema, rodas de conversa, brigadas móveis, referência a serviços de saúde, disponibilização de insumos de prevenção, diálogos comunitários, buscas a pacientes faltosos e abandonos, literacia legal e referência a apoio legal nas US de São Dâmaso, Boquisso e Tsalala.",
      "Para a realização das atividades de campo, foi contratada uma equipa composta por um coordenador, um oficial de monitoria e avaliação, um assistente financeiro e sete defensores comunitários. Esta equipa foi distribuída por três unidades de saúde na província de Maputo, no distrito da Matola, nomeadamente: Centro de Saúde do Boquisso, Tsalala e São Dâmaso.",
    ],
    fotos:Object.values(
      import.meta.glob("../assets/Por/*.{png,jpg,JPG,jpeg,svg,gif}", {
        eager: true,
        as: "url",
      })
    ),
    Estado: "Ativo",
    patrocinadores: ["USAID", "Plan International"],
  },
  {
    id: 3,
    nome: "We belong África",
    banner: img7,
    objetivo:
      "Apoiar entidades estatais na África Subsariana a tornarem-se cada vez mais responsáveis, responsivas e inclusivas para pessoas lésbicas, gays, bissexuais, transgéneros, queers e jovens de populações-chave",
    descricao: "Campanha de sensibilização e workshops comunitários.",
    fotos:Object.values(
      import.meta.glob("../assets/We/*.{png,jpg,JPG,jpeg,svg,gif}", {
        eager: true,
        as: "url",
      })
    ) ,
    Estado: "Ativo",
    patrocinadores: ["Ministerio da Cultura", "Plan International"],
  },
  {
    id: 4,
    nome: "Handsoff ",
    banner: img5,
    objetivo:
      "Influenciar na criação de um ambiente favorável a aceitação da pessoa trabalhador/a de sexo juntos aos principais stakeholders e reforçar a actuação da Associação no seguimento dos casos de estigma e discriminação contra as minorias sexuais. ",
    descricao: "Campanha de sensibilização e workshops comunitários.",
    fotos: Object.values(
      import.meta.glob("../assets/Handsoff/*.{png,jpg,JPG,jpeg,svg,gif}", {
        eager: true,
        as: "url",
      })
    ),
    Estado: "Inativo",
    patrocinadores: ["Ministerio da Cultura", "Plan International"],
  },
  {
    id: 5,
    nome: "Empreender com orgulho",
    banner: img3,
    objetivo:
      "Promover a inclusão e o empoderamento económico promover a inclusão e o empoderamento económico de jovens LGBTQIA+ em Moçambique ",
    descricao: "Campanha de sensibilização e workshops comunitários.",
    fotos: Object.values(
      import.meta.glob("../assets/Empreender/*.{png,jpg,JPG, jpeg,svg,gif}", {
        eager: true,
        as: "url",
      })
    ),
    Estado: "Inativo",
    patrocinadores: ["Ministerio do Trabalho", "Plan International"],
  },
  {
    id: 6,
    nome: "Conhecer e poder",
    banner: img8,
    objetivo:
      "Utilizar o artivismo Promocao de  debates virtuais e presenciais sobre temáticas dos DH com enfoque no estigma e discriminação contra a comunidade LGBTQIA+.",
    descricao:
      "O projecto Conhecer é Poder, realizado em 2023 pelo consórcio entre a Kutchindja e a TRANSformar, com apoio financeiro da Ready Academia, teve como objectivo empoderar jovens LGBTQIA+ entre 15 e 24 anos, utilizando a arte e a educação como ferramentas para conscientizar sobre diversidade, saúde sexual e direitos humanos. A iniciativa foi dividida em duas fases principais, combinando expressão artística e engajamento digital.",
    fotos: Object.values(
      import.meta.glob("../assets/Conhecer/*.{png,jpg,JPG,jpeg,svg,gif}", {
        eager: true,
        as: "url",
      })
    ),
    Estado: "Inativo",
    patrocinadores: ["Ministerio do Trabalho", "Plan International"],
  },
  {
    id: 7,
    nome: "Visão jovem mais",
    banner: img9,
    objetivo:
      "Capacitar e empoderar os jovens gays e bissexuais para  advogarem pelos direitos sexuais e influenciarem o ambiente legal e político",
    descricao:
      "O projecto Conhecer é Poder, realizado em 2023 pelo consórcio entre a Kutchindja e a TRANSformar, com apoio financeiro da Ready Academia, teve como objectivo empoderar jovens LGBTQIA+ entre 15 e 24 anos, utilizando a arte e a educação como ferramentas para conscientizar sobre diversidade, saúde sexual e direitos humanos. A iniciativa foi dividida em duas fases principais, combinando expressão artística e engajamento digital.",
    fotos: Object.values(
      import.meta.glob("../assets/Visao/*.{png,jpg,JPG,jpeg,svg,gif}", {
        eager: true,
        as: "url",
      })
    ),
    Estado: "Inativo",
    patrocinadores: ["Ministerio do Trabalho", "Plan International"],
  },
  // {
  //   id: 8,
  //   nome: "Handsoff 2",
  //   banner: img5,
  //   objetivo:
  //     "Capacitar e empoderar os jovens gays e bissexuais para  advogarem pelos direitos sexuais e influenciarem o ambiente legal e político",
  //   descricao:
  //     "Implementado pela Kutchindja (2024-2025), com financiamento da Pathfinder Internacional e parceria da Plataforma Nacional dos Direitos dos Trabalhadores do Sexo, o projeto focou-se na redução da violência de género e violações de direitos humanos contra trabalhadores do sexo, especialmente homens gays, bissexuais e queer. Através de workshops de advocacia com instituições governamentais e líderes comunitários, promoveu estratégias para combater estigma e discriminação, abordando temas como SOGIE, direitos humanos e acesso à justiça. Uma campanha digital (#Kutchindja) amplificou mensagens contra a discriminação, enquanto um grupo de monitoria acompanhou casos de violência, encaminhando 4 situações para resolução legal. Treinamentos em APSS (Apoio Psicossocial) fortaleceram a capacidade de apoio a sobreviventes de violência, reforçando a proteção e inclusão social desses grupos.",
  //   fotos: [
  //     "https://img.freepik.com/free-psd/pride-month-celebration-template_23-2151435428.jpg?uid=R78469827&ga=GA1.1.1129599235.1741291614&semt=ais_hybrid&w=740",
  //     "https://img.freepik.com/free-photo/people-enjoying-celebrations-pride-month_23-2151264166.jpg?uid=R78469827&ga=GA1.1.1129599235.1741291614&semt=ais_hybrid&w=740",
  //     "https://img.freepik.com/free-photo/young-people-celebrating-pride-month_23-2149333033.jpg?uid=R78469827&ga=GA1.1.1129599235.1741291614&semt=ais_hybrid&w=740",
  //   ],
  //   Estado: "Inativo",
  //   patrocinadores: ["Ministerio do Trabalho", "Plan International"],
  // },
];
export default projetos;
