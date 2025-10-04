const inputBusca = document.getElementById("busca");
const btnBuscar = document.getElementById("btn-buscar");
const selectGenero = document.getElementById("filtro-genero");
const selectClassificacao = document.getElementById("filtro-classificacao");
const selectAno = document.getElementById("filtro-ano");
const catalogo = document.getElementById("catalogo");

const filmes = [
  { titulo: "Vingadores: Ultimato", genero: "Ação", classificacao: "12 anos", ano: 2019, imagem: "Capas/Vingadores Ultimato.webp" },
  { titulo: "O Rei do Show", genero: "Drama", classificacao: "Livre", ano: 2017, imagem: "Capas/O Rei do Show.webp" },
  { titulo: "Deadpool", genero: "Ação", classificacao: "18 anos", ano: 2016, imagem: "Capas/Deadpool.webp" },
  { titulo: "As Branquelas", genero: "Comédia", classificacao: "12 anos", ano: 2004, imagem: "Capas/As Branquelas.webp" },
  { titulo: "Invocação do Mal", genero: "Terror", classificacao: "16 anos", ano: 2013, imagem: "Capas/Invocação do Mal.webp" },
  { titulo: "Oppenheimer", genero: "Drama", classificacao: "16 anos", ano: 2023, imagem: "Capas/Oppenheimer.webp" },
  { titulo: "John Wick", genero: "Ação", classificacao: "16 anos", ano: 2014, imagem: "Capas/John Wick.webp" },
  { titulo: "Venom", genero: "Ação", classificacao: "14 anos", ano: 2018, imagem: "Capas/Venom.webp" },
  { titulo: "Homem-Aranha", genero: "Ação", classificacao: "Livre", ano: 2002, imagem: "Capas/Homem-Aranha.webp" },
  { titulo: "Homem-Aranha 2", genero: "Ação", classificacao: "Livre", ano: 2004, imagem: "Capas/Homem-Aranha 2.webp" },
  { titulo: "Homem-Aranha 3", genero: "Ação", classificacao: "12 anos", ano: 2007, imagem: "Capas/Homem-Aranha 3.webp" },
  { titulo: "Halloween", genero: "Terror", classificacao: "18 anos", ano: 2018, imagem: "Capas/Halloween.webp" },
  { titulo: "Sexta-Feira 13", genero: "Terror", classificacao: "18 anos", ano: 2009, imagem: "Capas/Sexta-Feira 13.webp" },
  { titulo: "Blade Runner 2049", genero: "Ficção Científica", classificacao: "14 anos", ano: 2017, imagem: "Capas/Blade Runner 2049.webp" },
  { titulo: "Interestelar", genero: "Ficção Científica", classificacao: "10 anos", ano: 2014, imagem: "Capas/Interestelar.webp" },
  { titulo: "À Espera de um Milagre", genero: "Drama", classificacao: "14 anos", ano: 2000, imagem: "Capas/À Espera de um Milagre.webp" },
  { titulo: "Transformers", genero: "Ficção Científica", classificacao: "10 anos", ano: 2007, imagem: "Capas/Transformers.webp" },
  { titulo: "Avatar", genero: "Ficção Científica", classificacao: "Livre", ano: 2009, imagem: "Capas/Avatar.webp" },
];

function mostrarFilmes(lista) {
  catalogo.innerHTML = "";
  lista.forEach(filme => {
    const card = document.createElement("div");
    card.classList.add("filme");

    // 👇 Verifica se o filme tem uma imagem (para não quebrar os outros)
    const imagemHTML = filme.imagem
      ? `<img src="${filme.imagem}" alt="${filme.titulo}" class="capa-filme">`
      : "";

    card.innerHTML = `
      ${imagemHTML}
      <h2>${filme.titulo}</h2>
      <p>Gênero: ${filme.genero}</p>
      <p>Classificação: ${filme.classificacao}</p>
      <p>Ano: ${filme.ano}</p>
    `;
    catalogo.appendChild(card);
  });
}

mostrarFilmes(filmes);

function filtrarFilmes() {
  const termo = inputBusca.value.toLowerCase();
  const generoSelecionado = selectGenero.value;
  const classificacaoSelecionada = selectClassificacao.value;
  const anoSelecionado = selectAno.value;

  const resultado = filmes.filter(filme => {
    const combinaBusca = filme.titulo.toLowerCase().includes(termo);
    const combinaGenero = generoSelecionado === "todos" || filme.genero === generoSelecionado;
    const combinaClassificacao =
      classificacaoSelecionada === "todas" ||
      filme.classificacao.includes(classificacaoSelecionada);
    const combinaAno = anoSelecionado === "todos" || filme.ano === parseInt(anoSelecionado);

    return combinaBusca && combinaGenero && combinaClassificacao && combinaAno;
  });

  mostrarFilmes(resultado);
}

btnBuscar.addEventListener("click", filtrarFilmes);
selectGenero.addEventListener("change", filtrarFilmes);
selectClassificacao.addEventListener("change", filtrarFilmes);
selectAno.addEventListener("change", filtrarFilmes);
inputBusca.addEventListener("keypress", (event) => {
  if (event.key === "Enter") filtrarFilmes();
});
