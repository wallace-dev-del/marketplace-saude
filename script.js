const profissionais = [
  { nome: "Danielle Casemiro", especialidade: "Psicólogo", cidade: "Nova Iguaçu", preco: "R$ 160", convenio: "Particular", teleconsulta: true, nota: 4.9, avaliacoes: 112 },
  { nome: "Bruna Alves", especialidade: "Psicólogo", cidade: "Nova Iguaçu", preco: "R$ 180", convenio: "Amil", teleconsulta: true, nota: 4.8, avaliacoes: 52 },
  { nome: "Felipe Lima", especialidade: "Psicólogo", cidade: "Rio de Janeiro", preco: "R$ 130", convenio: "Particular", teleconsulta: false, nota: 4.7, avaliacoes: 29 },
  { nome: "Cinthia Ribeiro Machado", especialidade: "Psicólogo", cidade: "Nilópolis", preco: "R$ 150", convenio: "Bradesco Saúde", teleconsulta: true, nota: 4.9, avaliacoes: 125 },
  { nome: "Marcos Andrade", especialidade: "Dentista", cidade: "Nova Iguaçu", preco: "R$ 120", convenio: "Particular", teleconsulta: false, nota: 4.6, avaliacoes: 84 },
  { nome: "Renata Souza", especialidade: "Dentista", cidade: "Mesquita", preco: "R$ 140", convenio: "Amil", teleconsulta: false, nota: 4.8, avaliacoes: 61 },
  { nome: "Paulo Henrique Costa", especialidade: "Nutricionista", cidade: "Nova Iguaçu", preco: "R$ 110", convenio: "Particular", teleconsulta: true, nota: 4.7, avaliacoes: 47 },
  { nome: "Juliana Ferreira", especialidade: "Nutricionista", cidade: "Rio de Janeiro", preco: "R$ 150", convenio: "Bradesco Saúde", teleconsulta: true, nota: 4.9, avaliacoes: 98 },
  { nome: "Ricardo Nunes", especialidade: "Cardiologista", cidade: "Nilópolis", preco: "R$ 250", convenio: "Particular", teleconsulta: false, nota: 4.9, avaliacoes: 156 },
  { nome: "Camila Duarte", especialidade: "Fisioterapeuta", cidade: "Nova Iguaçu", preco: "R$ 100", convenio: "Amil", teleconsulta: false, nota: 4.5, avaliacoes: 33 },
  { nome: "Thiago Martins", especialidade: "Fisioterapeuta", cidade: "Mesquita", preco: "R$ 95", convenio: "Particular", teleconsulta: false, nota: 4.6, avaliacoes: 22 },
  { nome: "Vanessa Lopes", especialidade: "Dermatologista", cidade: "Rio de Janeiro", preco: "R$ 280", convenio: "Bradesco Saúde", teleconsulta: true, nota: 4.8, avaliacoes: 203 }
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
      <img class="foto" src="${gerarUrlFoto(prof.nome)}" alt="${prof.nome}">

      <div class="card-info">
        <h3>${prof.nome}</h3>
        <p class="especialidade">${prof.especialidade} · ${prof.cidade}</p>
        <p class="nota">⭐ ${prof.nota} <span class="opinioes">(${prof.avaliacoes} opiniões)</span></p>
        <div class="card-detalhes">
          <span class="tag">${prof.convenio}</span>
          ${teleTag}
        </div>
      </div>

      <div class="card-acao">
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