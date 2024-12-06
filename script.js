const projetos = [
  {
    nome: "E-commerce",
    descricao: "Loja de jogos para PC, PS5 e Xbox",
    link: "https://github.com/Brunordsilva/Front-end/tree/main/aula%207"
  },
  {
    nome: "Billboard",
    descricao: "Top 3 músicas populares",
    link: "https://github.com/Brunordsilva/Front-end/tree/main/aula%205"
  },
  {
    nome: "Pokedex",
    descricao: "Pokedex interativa",
    link: "https://github.com/Brunordsilva/Front-end/tree/main/aula%2021"
  }
];

function exibirProjetos() {
  const projetosSection = document.getElementById("projetos");
  projetos.forEach(projeto => {
    const divProjeto = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const a = document.createElement("a");

    h3.textContent = projeto.nome;
    p.textContent = projeto.descricao;
    a.textContent = "Ver Repositório";
    a.href = projeto.link;
    a.target = "_blank";

    divProjeto.appendChild(h3);
    divProjeto.appendChild(p);
    divProjeto.appendChild(a);

    projetosSection.appendChild(divProjeto);
  });
}

document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  document.getElementById("formFeedback").style.display = "block";
  setTimeout(() => {
    document.getElementById("formFeedback").style.display = "none";
  }, 3000);

  this.reset();
});

window.onload = exibirProjetos;
