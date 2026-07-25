// Lista de profissionais de exemplo (depois isso vai vir de um banco de dados)
const profissionais = [
  {
    nome: "Danielle Casemiro",
    especialidade: "Psicólogo",
    cidade: "Nova Iguaçu",
    preco: "R$ 160"
  },
  {
    nome: "Bruna Alves",
    especialidade: "Psicólogo",
    cidade: "Nova Iguaçu",
    preco: "R$ 180"
  },
  {
    nome: "Felipe Lima",
    especialidade: "Psicólogo",
    cidade: "Rio de Janeiro",
    preco: "R$ 130"
  },
  {
    nome: "Cinthia Ribeiro Machado",
    especialidade: "Psicólogo",
    cidade: "Nilópolis",
    preco: "R$ 150"
  }
];

const listaDiv = document.getElementById("listaProfissionais");
const inputEspecialidade = document.getElementById("inputEspecialidade");
const inputCidade = document.getElementById("inputCidade");
const btnBuscar = document.getElementById("btnBuscar");

// Função que desenha os cards na tela
function mostrarProfissionais(lista) {
  listaDiv.innerHTML = "";

  if (lista.length === 0) {
    listaDiv.innerHTML = "<p>Nenhum profissional encontrado.</p>";
    return;
  }

  lista.forEach(prof => {
    const card = document.createElement("div");
    card.className = "card-profissional";
    card.innerHTML = `
      <h3>${prof.nome}</h3>
      <p><strong>${prof.especialidade}</strong> - ${prof.cidade}</p>
      <p>Consulta: ${prof.preco}</p>
    `;
    listaDiv.appendChild(card);
  });
}

// Função que filtra a lista com base no que foi digitado
function buscarProfissionais() {
  const especialidade = inputEspecialidade.value.toLowerCase();
  const cidade = inputCidade.value.toLowerCase();

  const filtrados = profissionais.filter(prof => {
    const combinaEspecialidade = prof.especialidade.toLowerCase().includes(especialidade);
    const combinaCidade = prof.cidade.toLowerCase().includes(cidade);
    return combinaEspecialidade && combinaCidade;
  });

  mostrarProfissionais(filtrados);
}

btnBuscar.addEventListener("click", buscarProfissionais);

// Mostra todos os profissionais assim que a página carrega
mostrarProfissionais(profissionais);