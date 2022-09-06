function resultadoCerto() {
  if (contAcerto == 0) {

    document.getElementById("verSignificado").setAttribute("hidden", "true");
    document.getElementById("resultado").innerHTML = "Parabéns, você acertou! Continue assim.";
    document.getElementById("pts").innerHTML = "+40 pts";
    pontuação += 40;
    document.getElementById("pontuacao").innerHTML = "Pontuação: " + pontuação;
    contAcerto = 1;
    contAcertoTotal += 1;
    myTimeout = setTimeout(proximo, 1500);
  }
}

function resultadoErrado() {
  pontuação -= 8;
  contErro -= 1;
  if (contErro < 1) {
    verSignificado();
  } else {
    document.getElementById("resultado").innerHTML =
      "Infelizmente você errou, " + contErro + " tentativa(s) restante(s)";
    document.getElementById("pts").innerHTML = "-8 pts";
    document.getElementById("verSignificado").removeAttribute("hidden");
  }
  document.getElementById("pontuacao").innerHTML = "Pontuação: " + pontuação;
  document.getElementById("resposta").value = "";
}

function proximo() {
  contVerResultado = 0;
  contAcerto = 0;
  contErro = 5;

  if (contPalavra <= Object.keys(palavras).length) {
    if (contPalavra % 2 == 1) {
      palavraTraduzir = palavras[contPalavra - 1].en[0];
      palavraTraduzida = palavras[contPalavra - 1].pt;
    } else {
      palavraTraduzir = palavras[contPalavra - 1].pt[0];
      palavraTraduzida = palavras[contPalavra - 1].en;
    }
    document.getElementById("palavra").innerHTML = palavraTraduzir;
    contPalavra += 1;
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("pts").innerHTML = "";
    document.getElementById("resposta").value = "";
  } else {
    final();
  }
}

function verificar() {
  let acertou = 0;

  if (contVerResultado == 0 && contAcerto == 0) {

    resposta = document.getElementById("resposta").value;
    resposta = resposta
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
      .join(" ");


    for (let i = 0; i < palavraTraduzida.length; i++) {
      if (resposta == palavraTraduzida[i]) {
        resultadoCerto();
        acertou = 1;
      }
    }

    if (acertou != 1) {
      resultadoErrado();
    }

  }
  else {
    document.getElementById("resposta").value = "";
  }
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    var btn = document.querySelector("#verificar");

    btn.click();
  }
});

function verSignificado() {
  contVerResultado = 1;
  document.getElementById("verSignificado").setAttribute("hidden", "true");
  document.getElementById("resultado").innerHTML = "O significado era: " + palavraTraduzida;
  document.getElementById("pts").innerHTML = "";
  myTimeout = setTimeout(proximo, 2000);
}

function final() {
  listaRemover = [
    "resposta",
    "verificar",
    "resultado",
    "pts",
    "pontuacao"
  ];
  for (i = 0; i < listaRemover.length; i++) {
    document.getElementById(listaRemover[i]).remove();
  }
  document.getElementById("label").innerHTML =
    "Você acertou um total de " +
    (contAcertoTotal / Object.keys(palavras).length) * 100 +
    "% das questões";
  document.getElementById("palavra").innerHTML = "Sua pontuação foi: " + pontuação;
  document.getElementById("voltar").removeAttribute("hidden");
}

function shuffleArray(arr) {
  for (let i = Object.keys(arr).length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let pontuação = 0;
let contPalavra = 1;
let contAcerto = 0;
let contAcertoTotal = 0;
let contVerResultado = 0;
let contErro = 5;
