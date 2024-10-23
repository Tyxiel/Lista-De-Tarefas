function exibirAdicionarTarefa() {
  let form = document.querySelector(".formPrincipal");
  
  if (form.style.display === "flex") {
    form.style.display = "none";
  } else {
    form.style.display = "flex";
  }
}

function adicionarTarefa() {
  let li = document.createElement("LI");
  let tituloDiv = document.createElement("div");
  tituloDiv.className = "titulo";
  
  let span = document.createElement("SPAN");
  let input = document.formPrincipal.inputTarefa.value;

  if (input.trim() === "") return;

  let texto = document.createTextNode(input);
  span.appendChild(texto);
  tituloDiv.appendChild(span);

  let icon = document.createElement("i");
  icon.className = 'bx bx-checkbox';
  tituloDiv.prepend(icon);
  li.appendChild(tituloDiv);

  criarBotaoFechar(li);
  document.querySelector("#lista-para-fazer").appendChild(li);
  
  document.formPrincipal.inputTarefa.value = '';
}

function criarBotaoFechar(li) {
  let rotulo = document.createElement("SPAN");
  let fechar = document.createTextNode("\u00D7");

  rotulo.className = "concluirTarefa";
  rotulo.appendChild(fechar);
  li.appendChild(rotulo);

  rotulo.onclick = () => {
    li.remove();
  };
}

document.querySelectorAll("li > span").forEach(criarBotaoFechar);

const listaParaFazer = document.querySelector("#lista-para-fazer");
const listaConcluido = document.querySelector("#lista-concluido");

listaParaFazer.addEventListener("click", (e) => {
  if (e.target.tagName !== "SPAN" || e.target.className === "concluirTarefa") {
    if (e.currentTarget.contains(e.target)) {
      let li = e.target.closest("li");
      if (li) {
        li.querySelector('i').className = 'bx bx-checkbox-checked';
        listaConcluido.appendChild(li);
      }
    }
  }
});

listaConcluido.addEventListener("click", (e) => {
  if (e.target.tagName !== "SPAN" || e.target.className === "concluirTarefa") {
    if (e.currentTarget.contains(e.target)) {
      let li = e.target.closest("li");
      if (li) {
        li.querySelector('i').className = 'bx bx-checkbox';
        listaParaFazer.appendChild(li);
      }
    }
  }
});
