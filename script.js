const profissionais = [
  {
    nome: "Danielle Casemiro",
    especialidade: "Psicólogo",
    cidade: "Nova Iguaçu",
    preco: "R$ 160",
    convenio: "Particular",
    teleconsulta: true,
    nota: 4.9,
    avaliacoes: 112,
    endereco: "Rua Professor Venina Correa Torres, 23 - Nova Iguaçu",
    local: "Espaço Florescer Psicologia Clínica",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: [] },
      { dia: "Amanhã", data: "26 Jul", horarios: [] },
      { dia: "Segunda", data: "27 Jul", horarios: ["13:00", "17:00"] },
      { dia: "Ter", data: "28 Jul", horarios: ["09:00", "10:00", "11:00"] }
    ]
  },
  {
    nome: "Bruna Alves",
    especialidade: "Psicólogo",
    cidade: "Nova Iguaçu",
    preco: "R$ 180",
    convenio: "Amil",
    teleconsulta: true,
    nota: 4.8,
    avaliacoes: 52,
    endereco: "Av. Governador Amaral Peixoto, 500 - Nova Iguaçu",
    local: "Clínica Bem Estar",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: [] },
      { dia: "Amanhã", data: "26 Jul", horarios: ["11:00"] },
      { dia: "Segunda", data: "27 Jul", horarios: [] },
      { dia: "Ter", data: "28 Jul", horarios: ["12:00", "14:00"] }
    ]
  },
  {
    nome: "Felipe Lima",
    especialidade: "Psicólogo",
    cidade: "Rio de Janeiro",
    preco: "R$ 130",
    convenio: "Particular",
    teleconsulta: false,
    nota: 4.7,
    avaliacoes: 29,
    endereco: "Rua das Laranjeiras, 45 - Rio de Janeiro",
    local: "Consultório Laranjeiras",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: ["15:00"] },
      { dia: "Amanhã", data: "26 Jul", horarios: [] },
      { dia: "Segunda", data: "27 Jul", horarios: ["09:00"] },
      { dia: "Ter", data: "28 Jul", horarios: [] }
    ]
  },
  {
    nome: "Cinthia Ribeiro Machado",
    especialidade: "Psicólogo",
    cidade: "Nilópolis",
    preco: "R$ 150",
    convenio: "Bradesco Saúde",
    teleconsulta: true,
    nota: 4.9,
    avaliacoes: 125,
    endereco: "Rua Getúlio Vargas, 88 - Nilópolis",
    local: "Espaço Terapêutico Vargas",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: [] },
      { dia: "Amanhã", data: "26 Jul", horarios: ["10:00", "16:00"] },
      { dia: "Segunda", data: "27 Jul", horarios: [] },
      { dia: "Ter", data: "28 Jul", horarios: ["09:00"] }
    ]
  },
  {
    nome: "Marcos Andrade",
    especialidade: "Dentista",
    cidade: "Nova Iguaçu",
    preco: "R$ 120",
    convenio: "Particular",
    teleconsulta: false,
    nota: 4.6,
    avaliacoes: 84,
    endereco: "Rua Marechal Deodoro, 200 - Nova Iguaçu",
    local: "Clínica OdontoVida",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: [] },
      { dia: "Amanhã", data: "26 Jul", horarios: [] },
      { dia: "Segunda", data: "27 Jul", horarios: ["08:00", "09:00"] },
      { dia: "Ter", data: "28 Jul", horarios: [] }
    ]
  },
  {
    nome: "Renata Souza",
    especialidade: "Dentista",
    cidade: "Mesquita",
    preco: "R$ 140",
    convenio: "Amil",
    teleconsulta: false,
    nota: 4.8,
    avaliacoes: 61,
    endereco: "Rua Cabo Frio, 10 - Mesquita",
    local: "Sorria Odontologia",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: ["14:00"] },
      { dia: "Amanhã", data: "26 Jul", horarios: [] },
      { dia: "Segunda", data: "27 Jul", horarios: [] },
      { dia: "Ter", data: "28 Jul", horarios: ["10:00"] }
    ]
  },
  {
    nome: "Paulo Henrique Costa",
    especialidade: "Nutricionista",
    cidade: "Nova Iguaçu",
    preco: "R$ 110",
    convenio: "Particular",
    teleconsulta: true,
    nota: 4.7,
    avaliacoes: 47,
    endereco: "Rua Bela Vista, 33 - Nova Iguaçu",
    local: "Nutrir Consultório",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: [] },
      { dia: "Amanhã", data: "26 Jul", horarios: ["08:00"] },
      { dia: "Segunda", data: "27 Jul", horarios: [] },
      { dia: "Ter", data: "28 Jul", horarios: ["13:00", "15:00"] }
    ]
  },
  {
    nome: "Juliana Ferreira",
    especialidade: "Nutricionista",
    cidade: "Rio de Janeiro",
    preco: "R$ 150",
    convenio: "Bradesco Saúde",
    teleconsulta: true,
    nota: 4.9,
    avaliacoes: 98,
    endereco: "Rua Barata Ribeiro, 500 - Rio de Janeiro",
    local: "Espaço Nutrição Viva",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: ["17:00"] },
      { dia: "Amanhã", data: "26 Jul", horarios: [] },
      { dia: "Segunda", data: "27 Jul", horarios: ["09:00"] },
      { dia: "Ter", data: "28 Jul", horarios: [] }
    ]
  },
  {
    nome: "Ricardo Nunes",
    especialidade: "Cardiologista",
    cidade: "Nilópolis",
    preco: "R$ 250",
    convenio: "Particular",
    teleconsulta: false,
    nota: 4.9,
    avaliacoes: 156,
    endereco: "Av. Getúlio Vargas, 900 - Nilópolis",
    local: "CardioCenter Nilópolis",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: [] },
      { dia: "Amanhã", data: "26 Jul", horarios: [] },
      { dia: "Segunda", data: "27 Jul", horarios: ["11:00"] },
      { dia: "Ter", data: "28 Jul", horarios: ["14:00"] }
    ]
  },
  {
    nome: "Camila Duarte",
    especialidade: "Fisioterapeuta",
    cidade: "Nova Iguaçu",
    preco: "R$ 100",
    convenio: "Amil",
    teleconsulta: false,
    nota: 4.5,
    avaliacoes: 33,
    endereco: "Rua Ana Neri, 60 - Nova Iguaçu",
    local: "Fisio Vida Ativa",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: ["10:00"] },
      { dia: "Amanhã", data: "26 Jul", horarios: [] },
      { dia: "Segunda", data: "27 Jul", horarios: [] },
      { dia: "Ter", data: "28 Jul", horarios: ["08:00"] }
    ]
  },
  {
    nome: "Thiago Martins",
    especialidade: "Fisioterapeuta",
    cidade: "Mesquita",
    preco: "R$ 95",
    convenio: "Particular",
    teleconsulta: false,
    nota: 4.6,
    avaliacoes: 22,
    endereco: "Rua Aurora, 15 - Mesquita",
    local: "Clínica Movimento",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: [] },
      { dia: "Amanhã", data: "26 Jul", horarios: ["16:00"] },
      { dia: "Segunda", data: "27 Jul", horarios: [] },
      { dia: "Ter", data: "28 Jul", horarios: [] }
    ]
  },
  {
    nome: "Vanessa Lopes",
    especialidade: "Dermatologista",
    cidade: "Rio de Janeiro",
    preco: "R$ 280",
    convenio: "Bradesco Saúde",
    teleconsulta: true,
    nota: 4.8,
    avaliacoes: 203,
    endereco: "Rua Visconde de Pirajá, 300 - Rio de Janeiro",
    local: "Espaço Dermato Ipanema",
    agenda: [
      { dia: "Hoje", data: "25 Jul", horarios: [] },
      { dia: "Amanhã", data: "26 Jul", horarios: ["13:00"] },
      { dia: "Segunda", data: "27 Jul", horarios: [] },
      { dia: "Ter", data: "28 Jul", horarios: ["10:00", "11:00"] }
    ]
  }
];

const listaDiv = document.getElementById("listaProfissionais");
const inputEspecialidade = document.getElementById("inputEspecialidade");
const inputCidade = document.getElementById("inputCidade");
const inputConvenio = document.getElementById("inputConvenio");
const btnBuscar = document.getElementById("btnBuscar");

function gerarUrlFoto(nome) {
  const nomeCodificado = encodeURIComponent(nome);
  return `https://ui-avatars.com/api/?name=${nomeCodificado}&background=2b7a78&color=fff&size=128&bold=true`;
}

function montarColunaAgenda(diaInfo) {
  if (diaInfo.horarios.length === 0) {
    return `
      <div class="dia-coluna">
        <div class="dia-cabecalho">${diaInfo.dia}<br>${diaInfo.data}</div>
        <div class="horario-vazio">-</div>
      </div>
    `;
  }

  const botoes = diaInfo.horarios
    .map(h => `<div class="horario-btn">${h}</div>`)
    .join("");

  return `
    <div class="dia-coluna">
      <div class="dia-cabecalho">${diaInfo.dia}<br>${diaInfo.data}</div>
      ${botoes}
    </div>
  `;
}

function mostrarProfissionais(lista) {
  listaDiv.innerHTML = "";

  if (lista.length === 0) {
    listaDiv.innerHTML = "<p class='sem-resultado'>Nenhum profissional encontrado.</p>";
    return;
  }

  lista.forEach(prof => {
    const card = document.createElement("div");
    card.className = "card-profissional";

    const teleTag = prof.teleconsulta
      ? `<span class="tag tele">Teleconsulta</span>`
      : "";

    const colunasAgenda = prof.agenda.map(montarColunaAgenda).join("");

    card.innerHTML = `
      <div class="card-esquerda">
        <img class="foto" src="${gerarUrlFoto(prof.nome)}" alt="${prof.nome}">
        <div class="card-info">
          <h3>${prof.nome}</h3>
          <p class="especialidade">${prof.especialidade} · ${prof.cidade}</p>
          <p class="nota">⭐ ${prof.nota} <span class="opinioes">(${prof.avaliacoes} opiniões)</span></p>
          <div class="card-detalhes">
            <span class="tag">${prof.convenio}</span>
            ${teleTag}
          </div>
          <div class="card-endereco">
            <p class="local-nome">${prof.local}</p>
            <p class="endereco-texto">${prof.endereco}</p>
          </div>
        </div>
      </div>

      <div class="card-agenda">
        ${colunasAgenda}
      </div>

      <div class="card-rodape">
        <span class="preco">${prof.preco}</span>
        <button class="btn-agendar">Agendar consulta</button>
      </div>
    `;
    listaDiv.appendChild(card);
  });
}

function buscarProfissionais() {
  const especialidade = inputEspecialidade.value.toLowerCase();
  const cidade = inputCidade.value.toLowerCase();
  const convenio = inputConvenio.value.toLowerCase();

  const filtrados = profissionais.filter(prof => {
    const combinaEspecialidade = prof.especialidade.toLowerCase().includes(especialidade);
    const combinaCidade = prof.cidade.toLowerCase().includes(cidade);
    const combinaConvenio = prof.convenio.toLowerCase().includes(convenio);
    return combinaEspecialidade && combinaCidade && combinaConvenio;
  });

  mostrarProfissionais(filtrados);
}

btnBuscar.addEventListener("click", buscarProfissionais);

mostrarProfissionais(profissionais);