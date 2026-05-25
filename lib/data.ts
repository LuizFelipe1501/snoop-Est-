// lib/data.ts — toda a informação do site em um único lugar

export const SITE = {
  name: "Clínica Veterinária Casa do Snoopy",
  tagline: "Cuidado veterinário com excelência, carinho e responsabilidade",
  phone: "(61) 99366-8386",
  phoneTel: "5561993668386",
  address: "SHPS, Chácara 2A, Lote 09, Casa 02 — Ceilândia, DF",
  addressMap: "SHPS+,+Chácara+2+A+Lote+09+Casa+02",
  waMessage:
    "Olá, vim do site e gostaria de mais informações, pois preciso de atendimento para o meu pet.",
  logoUrl:
    "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/09/Logo-Clinica-veterinaria-casa-do-Snoopy-1-2.png",
  heroImg:
    "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/10/Clinica-Veterinaria-Casa-do-Snoopy-1024x431.png",
  aboutImg:
    "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/09/img_about_home01-PVJ5A33.jpg",
  aboutImg2:
    "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/09/img_about_home02-SQEFRT4.jpg",
};

export function waUrl(msg = SITE.waMessage) {
  return `https://wa.me/${SITE.phoneTel}?text=${encodeURIComponent(msg)}`;
}

export const NAV = [
  { label: "Início",    href: "/" },
  { label: "Sobre",     href: "/sobre" },
  { label: "Serviços",  href: "/servicos" },
  { label: "Equipe",    href: "/equipe" },
  { label: "Contato",   href: "/contato" },
];

export const STATS = [
  { value: "24h",  label: "Todos os dias" },
  { value: "2",    label: "Unidades no DF" },
  { value: "10+",  label: "Anos de experiência" },
];

export const CHECKLIST = [
  "Profissionais com registro ativo no CRMV",
  "Equipamentos de diagnóstico modernos",
  "Ambiente acolhedor e higienizado",
  "Atendimento emergencial imediato",
  "Convênios Petlove e Dog Life aceitos",
];

export const SERVICES = [
  {
    slug: "consulta",
    title: "Consulta Veterinária",
    desc: "Avaliação clínica completa e personalizada com diagnóstico preciso, escuta ativa e acompanhamento dedicado a cada animal.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/10/clinica-veterinaria.png",
  },
  {
    slug: "vacinacao",
    title: "Vacinação",
    desc: "Vacinas nacionais e importadas com conservação ideal. Esquema vacinal personalizado para cada fase da vida do seu pet.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/10/Vacinacao.png",
  },
  {
    slug: "exames",
    title: "Exames Laboratoriais",
    desc: "Sangue, urina, imagem e muito mais. Diagnóstico ágil e preciso para garantir o tratamento correto.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/10/clinica-veterinaria-1.png",
  },
  {
    slug: "cirurgia",
    title: "Cirurgias e Castração",
    desc: "Procedimentos cirúrgicos com anestesia segura, monitoramento constante e cuidados pré e pós-operatórios completos.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/10/cirurgia-veterinaria.png",
  },
  {
    slug: "hotel",
    title: "Hotel para Cães",
    desc: "Hospedagem supervisionada 24h com alimentação equilibrada, área recreativa e atenção veterinária diária.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/10/hotel-para-cachorro.png",
  },
  {
    slug: "creche",
    title: "Creche para Pets",
    desc: "Ambiente acolhedor com atividades diárias, brincadeiras supervisionadas e cuidados constantes de profissionais apaixonados.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/10/creche-para-cachorro-.png",
  },
];

export const TEAM = [
  {
    name: "Elizabeth",
    role: "Médica Veterinária",
    bio: "Especialista em clínica geral de pequenos animais com mais de 8 anos de experiência.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/09/img_our_home01-RNJNFNK.jpg",
  },
  {
    name: "Marcos",
    role: "Gerente",
    bio: "Responsável pela gestão operacional da clínica e pelo atendimento humanizado aos tutores.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/09/img_testimonial_home01-FSMCK2D.jpg",
  },
  {
    name: "Hilixer D. Browni",
    role: "Veterinária",
    bio: "Dedicada à medicina preventiva e ao acompanhamento de animais seniores.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/09/img_our_home01-W73EUUE.jpg",
  },
  {
    name: "Yokolili Y. Yankee",
    role: "Secretária",
    bio: "Responsável pelo agendamento e pelo primeiro acolhimento dos tutores na clínica.",
    img: "https://clinicaveterinariadosnoopy.com.br/wp-content/uploads/2025/09/img_our_home01-WDL9YXT.jpg",
  },
];

export const HOURS = [
  { day: "Seg", time: "24h" },
  { day: "Ter", time: "24h" },
  { day: "Qua", time: "24h" },
  { day: "Qui", time: "24h" },
  { day: "Sex", time: "24h" },
  { day: "Sáb", time: "24h" },
  { day: "Dom", time: "24h" },
];

export const SPECIALTIES = [
  { num: "01", title: "Castração",          desc: "Procedimento seguro a partir do 3º mês, avaliado individualmente." },
  { num: "02", title: "Vacinas Completas",  desc: "Protocolo vacinal para filhotes, adultos e idosos." },
  { num: "03", title: "Diagnóstico Rápido", desc: "Exames com alta precisão e resultado ágil." },
  { num: "04", title: "Cirurgia Segura",    desc: "Anestesia controlada e monitoramento completo." },
  { num: "05", title: "Acompanhamento",     desc: "Check-ups e plano de cuidados personalizado." },
  { num: "06", title: "Prevenção",          desc: "Protocolos preventivos contra doenças e parasitas." },
];

export const FAQ = [
  {
    q: "Quanto custa uma consulta veterinária?",
    a: "O custo varia conforme a necessidade do seu pet. Recomendamos trazer seu animal para uma avaliação — nossos profissionais indicarão o melhor cuidado. Entre em contato pelo WhatsApp para mais informações.",
  },
  {
    q: "É necessário agendar horário?",
    a: "Para consultas é ideal agendar para garantir o atendimento adequado. Emergências são tratadas com prioridade e sem agendamento prévio, a qualquer hora.",
  },
  {
    q: "Castração pode ser feita em qualquer idade?",
    a: "A recomendação é a partir do 3º mês de vida, mas cada caso deve ser avaliado individualmente pelo veterinário, considerando porte, raça e saúde do animal.",
  },
  {
    q: "A clínica aceita convênios?",
    a: "Sim. Aceitamos os convênios Petlove e Dog Life. Entre em contato para confirmar coberturas e procedimentos inclusos.",
  },
  {
    q: "Meu pet pode ser vacinado na primeira visita?",
    a: "Sim, desde que esteja saudável e com a idade adequada. O veterinário avalia e orienta sobre o esquema vacinal no próprio atendimento.",
  },
  {
    q: "Filhotes precisam de cuidados especiais?",
    a: "Sim. Filhotes exigem atenção redobrada em vacinação, vermifugação, alimentação e socialização. A primeira consulta é fundamental.",
  },
  {
    q: "Como funciona o hotel para pets?",
    a: "O animal fica hospedado com supervisão veterinária 24h, alimentação, recreação e cuidados diários. Você viaja tranquilo sabendo que seu pet está em boas mãos.",
  },
  {
    q: "Quais espécies a clínica atende?",
    a: "Atendemos cães e gatos em todas as fases da vida, do filhote ao geriátrico, em consultas, cirurgias, vacinas, internação e hospedagem.",
  },
];
