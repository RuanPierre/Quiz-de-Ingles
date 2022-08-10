function alertaEmBreve() {
    alert ("Quiz em construção :)");
    }
function resultadoCerto() {
        if (contAcerto == 0) {
          if (contErro != 5) {
            document.getElementById("verSignificado").remove();
          }
      
          resultado = document.getElementById("resultado");
          resultado.innerHTML = "Parabéns, você acertou! Continue assim.";
          pontos = document.getElementById("pts");
          pontos.innerHTML = "+10 pts";
          pont = document.getElementById("pontuacao");
          pontuação += 10;
          pont.innerHTML = "Pontuação: " + pontuação;
          contAcerto = 1;
          contAcertoTotal += 1;
          console.log("acertei" + contAcertoTotal);
          myTimeout = setTimeout(proximo, 1750);
        }
      }
      
      function resultadoErrado() {
        pontuação -= 5;
        contErro -= 1;
        if (contErro < 1) {
          verSignificado();
        } else {
          resultado = document.getElementById("resultado");
          resultado.innerHTML =
            "Infelizmente você errou, " + contErro + " tentativa(s) restante(s)";
          pontos = document.getElementById("pts");
          pontos.innerHTML = "-5 pts";
          document.getElementById("verSign").innerHTML =
            '<button class="btn" type="submit" id="verSignificado" onclick="verSignificado()">Resposta</button>';
        }
        pont = document.getElementById("pontuacao");
        pont.innerHTML = "Pontuação: " + pontuação;
        document.getElementById("resposta").value = "";
      }
      
      function proximo() {
        contVerResultado = 0;
        contAcerto = 0;
        contErro = 5;
      
        if (contPalavra < listaTraduzir.length) {
          palavraTraduzir = listaTraduzir[contPalavra];
          palavraTraduzida = listaTraduzida[contPalavra];
      
          palavra = document.getElementById("palavra");
          palavra.innerHTML = palavraTraduzir;
          contPalavra += 1;
          resultado = document.getElementById("resultado");
          resultado.innerHTML = " ";
          pontos = document.getElementById("pts");
          pontos.innerHTML = " ";
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
        document.getElementById("verSignificado").remove();
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "O significado era: " + palavraTraduzida;
        pontos = document.getElementById("pts");
        pontos.innerHTML = "";
        myTimeout = setTimeout(proximo, 4000);
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
        txt = document.getElementById("label");
        txt.innerHTML =
          "Você acertou um total de " +
          contAcertoTotal +
          "/" +
          listaTraduzir.length +
          " questões";
        txt = document.getElementById("palavra");
        txt.innerHTML = "Sua pontuação foi: " + pontuação;
        var img = document.createElement("IMG");
        img.src =
          "https://img.freepik.com/free-vector/congratulations-poster-celebration-vector-illustration-background_95561-59.jpg?size=338&ext=jpg";
        document.getElementById("parabens").appendChild(img);
      }
      listaTraduzir = [
        "Blue",
        "Dois",
        "Red",
        "Roxo",
        "Yellow",
        "Um",
        "Green",
        "Três",
        "Four",
        "Cinco",
        "Zero",
        "Seis",
        "Seven",
        "Oito",
        "Nine",
        "Dez",
        "Branco",
        "Doze",
        "Thirteen",
        "Preto",
        "Fifteen",
        "Dezesseis",
        "Seventeen",
        "Dezoito",
        "Nineteen",
        "Vinte",
        "Thirty",
        "Violet",
        "Fifty",
        "Sessenta",
        "Seventy",
        "Oitenta",
        "Laranja",
        "Cem",
        "Two Hundred",
        "Trezentos",
        "Rosa",
        "Marrom",
        "Six Hundred",
        "Setecentos",
        "Eight Hundred",
        "Novecentos",
        "One Thousand",
        "Eleven",
        "Cinza",
        "Ninety",
        "Quinhentos",
        "Quatorze",
        "Four Hundred",
        "Quarenta",
        "Burgundy"
      ];
      listaTraduzida = [
        "Azul",
        "Two",
        "Vermelho",
        "Purple",
        "Amarelo",
        "One",
        "Verde",
        "Three",
        "Quatro",
        "Five",
        "Zero",
        "Six",
        "Sete",
        "Eight",
        "Nove",
        "Ten",
        "White",
        "Twelve",
        "Treze",
        "Black",
        "Quinze",
        "Sixteen",
        "Dezessete",
        "Eighteen",
        "Dezenove",
        "Twenty",
        "Trinta",
        "Violeta",
        "Cinquenta",
        "Sixty",
        "Setenta",
        "Eighty",
        "Orange",
        "One Hundred",
        "Duzentos",
        "Three Hundred",
        "Pink",
        "Brown",
        "Seiscentos",
        "Seven Hundred",
        "Oitocentos",
        "Nine Hundred",
        "Mil",
        "Onze",
        "Grey",
        "Noventa",
        "Five Hundred",
        "Fourteen",
        "Quatrocentos",
        "Forty",
        "Vinho"
      ];
      
      pontuação = 100;
      contPalavra = 0;
      contAcertoTotal = 0;
      proximo();
