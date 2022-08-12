const alertaEmBreve = () => alert ("Quiz em construção :)");
    
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
          if (contPalavra % 2 == 1){
          palavraTraduzir = palavrasEmb[contPalavra-1].en;
          palavraTraduzida = palavrasEmb[contPalavra-1].pt;
          } else {
          palavraTraduzir = palavrasEmb[contPalavra-1].pt;
          palavraTraduzida = palavrasEmb[contPalavra-1].en;
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
        if (contVerResultado == 0 && contAcerto == 0) {
          resposta = document.getElementById("resposta").value;
          resposta = resposta
            .split(" ")
            .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
            .join(" ");
      
          if (resposta == palavraTraduzida) {
            resultadoCerto();
          } else {
            resultadoErrado();
          }
        } else {
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
          (contAcertoTotal / Object.keys(palavras).length)*100 +
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

palavras = {
      0: {"pt": "Um", "en": "One" },
      1: {"pt": "Dois", "en": "Two" },
      2: {"pt": "Três", "en": "Three" },
      3: {"pt": "Quatro", "en": "Four" },
      4: {"pt": "Cinco", "en": "Five" },
      5: {"pt": "Seis", "en": "Six" },
      6: {"pt": "Sete", "en": "Seven" },
      7: {"pt": "Oito", "en": "Eight" },
      8: {"pt": "Nove", "en": "Nine" },
      9: {"pt": "Dez", "en": "Ten" },
      10: {"pt": "Vinte", "en": "Twenty" },
      11: {"pt": "Cinquenta", "en": "Fifty" },
      12: {"pt": "Cem", "en": "Hundred" },
      13: {"pt": "Azul", "en": "Blue" },
      14: {"pt": "Vermelho", "en": "Red" },
      15: {"pt": "Roxo", "en": "Purple" },
      16: {"pt": "Amarelo", "en": "Yellow" },
      17: {"pt": "Verde", "en": "Green" },
      18: {"pt": "Branco", "en": "White" },
      19: {"pt": "Preto", "en": "Black" },
      20: {"pt": "Violeta", "en": "Violet" },
      21: {"pt": "Laranja", "en": "Orange" },
      22: {"pt": "Rosa", "en": "Pink" },
      23: {"pt": "Marrom", "en": "Brown" },
      24: {"pt": "Vinho", "en": "Burgundy" },

};

pontuação = 0;
contPalavra = 1;
contAcertoTotal = 0;
palavrasEmb = shuffleArray(palavras);
console.log(palavrasEmb);
proximo();