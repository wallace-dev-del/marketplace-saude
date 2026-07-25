const profissionais = [
  {
    nome: "Danielle Casemiro",
    inicial: "D",
    especialidade: "Psicólogo",
    cidade: "Nova Iguaçu",
    preco: "R$ 160",
    convenio: "Particular",
    teleconsulta: true,
    nota: 4.9,
    avaliacoes: 112
  },
  {
    nome: "Bruna Alves",
    inicial: "B",
    especialidade: "Psicólogo",
    cidade: "Nova Iguaçu",
    preco: "R$ 180",
    convenio: "Amil",
    teleconsulta: true,
    nota: 4.8,
    avaliacoes: 52
  },
  {
    nome: "Felipe Lima",
    inicial: "F",
    especialidade: "Psicólogo",
    cidade: "Rio de Janeiro",
    preco: "R$ 130",
    convenio: "Particular",
    teleconsulta: false,
    nota: 4.7,
    avaliacoes: 29
  },
  {
    nome: "Cinthia Ribeiro Machado",
    inicial: "C",
    especialidade: "Psicólogo",
    cidade: "Nilópolis",
    preco: "R$ 150",
    convenio: "Bradesco Saúde",
    teleconsulta: true,
    nota: 4.9,
    avaliacoes: 125
  }
];

const listaDiv = document.getElementById("listaProfissionais");
const inputEspecialidade = document.getElementById("inputEspecialidade");
const inputCidade = document.getElementById("inputCidade");
const inputConvenio = document.getElementById("inputConvenio");
const btnBuscar = document.getElementById("btnBuscar");

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

    card.innerHTML = `
      <div class="card-topo">
        <div class="avatar">${prof.inicial}</div>
        <div class="card-info">
          <h3>${prof.nome}</h3>
          <p class="especialidade">${prof.especialidade} · ${prof.cidade}</p>
          <p class="nota">⭐ ${prof.nota} <span class="opinioes">(${prof.avaliacoes} opiniões)</span></p>
        </div>
      </div>
      <div class="card-detalhes">
        <span class="tag">${prof.convenio}</span>
        ${teleTag}
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