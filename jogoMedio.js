function iniciaJogo()
{
	

	// // Vetor da dificuladde fácil
	// var vetorFacil = new Array ("fato", "saiu", "cair", "face", "obstrui", "mago", "caos", "amor", "viagem", "meça");
	// var vetorDicaFacil = new Array("Alguma coisa que aconteceu", "deixar um local", "escorregar e ir parar no chão", "superfície", "estraga", "merlin", "Estado de absoluta confusão", "sentimento", "férias", "medir, aferir");

	// Vetor da dificuldade médio
	var vetorMedio = new Array("permuta", "bermuda", "engodar", "perto", "certo", "andre", "thiago", "pato", "filhote", "musica");
	var vetorDicaMedio = new Array("Troca", "roupa", "Mentir", "próximo", "meu jogo está", "professor", "pessoa", "animal", "recém-nascido", "segredo para o sucesso");

	// // Vetor da dificuldade difícil
	// var vetorDificil = new Array("baleiro", "justapor", "pneumonia", "caju", "Figo", "Melao", "abduzir", "cominar", "cominar", "lauto");
	// var vetorDicaDificil = new Array("No nível dificil não há dicas.", "No nível dificil não há dicas.", "No nível dificil não há dicas.", "No nível dificil não há dicas.", "No nível dificil não há dicas.", "No nível dificil não há dicas.", "No nível dificil não há dicas.", "No nível dificil não há dicas.", "No nível dificil não há dicas.", "No nível dificil não há dicas.");

	//TO-DO: dividir a dificuldade

	
	// randomizando e escolhendo a palavra
	var palavraSelecionada = $("#palavraSelecionada");
	var dicaSelecionada  = $("#dicaSelecionada");
	palavraSelecionada.hide();
	var numeroRandom = Math.floor((Math.random() * vetorMedio.length));
	palavraSelecionada.text(vetorMedio[numeroRandom]);
	dicaSelecionada.text(vetorDicaMedio[numeroRandom]);

	// setando letras nos campos
	var localDaLetra = $("#letrasPosicionadas");
	var LetrasSelecionadas = palavraSelecionada.text().split('');

	var i;
	for (i = 0; i < LetrasSelecionadas.length; i++)
	{
		$("<span id=" + LetrasSelecionadas[i] + " class=\" espacoLetra LetraEscondida \">"+ LetrasSelecionadas[i] +"</span><span> </span>").appendTo(localDaLetra);
	}

	//campo Letras
	var numLetras = $("#numLetras");
	numLetras.text(LetrasSelecionadas.length);

	//campo Acertos
	var numAcertos = $("#numAcertos");
	numAcertos.text("0");

	//campo Nivel
	var numNivel  = $("#numNivel");

	//campo Erros
	var numErros  = $("#numErros");
	numErros.text("0");

	//campo de digitação da letra
	var campo = $("#campo");

	//quando digita 1 char no campo
	campo.on("input", function() 
	{
		// pega e mostra a letra digitada
        var char = campo.val();
        alert(char);

        // variavel de auxiliação a verificação de acerto ou erro.
        var acerto = false;

        // percorre todo o vetor Letras conferindo se está igual ou não
        for(i = 0; i < LetrasSelecionadas.length; i++)
        {
			if(char == LetrasSelecionadas[i])
        	{
    			//aparece a letra
    			document.getElementById(char).className = 'LetraAparece espacoLetra';

        		//conta acerto
        		acerto = true;
        		
        		//soma mais 1 no numero de acertos
        		var numeroAcerto = numAcertos.text();
        		numeroAcerto = numeroAcerto - 1 + 2;
        		numAcertos.text(numeroAcerto);
        	}
        }

    	if(!acerto)
    	{
    		//soma mais 1 no numero de erros
    		var numeroErro = numErros.text();
    		numeroErro = numeroErro - 1 + 2;
    		numErros.text(numeroErro);
    	}

    	// troca a imagem do boneco da forca
    	switch(numeroErro) 
    	{
		    case 1:
		        $("#imagem").attr('src', '../images/boneco1.png');
		        break;
		    case 2:
		        $("#imagem").attr('src', '../images/boneco2.png');
		        break;
	        case 3:
		        $("#imagem").attr('src', '../images/boneco3.png');
	    	    break;
	    	case 4:
		        $("#imagem").attr('src', '../images/boneco4.png');
		        perdeu();
		        break;
		}

		if(numAcertos.text() === numLetras.text())
		{
			var nivelAtual = numNivel.text(); 
			nivelAtual = nivelAtual - 1 + 2;
			numNivel.text(nivelAtual);

			window.location.assign("/fase"+ nivelAtual +".php");
			// window.location.href = "/fase"+ nivelAtual +".php";
		}

		// reseta os valores principais;

		// seta o campo como limpo.	
        acerto = false;
        campo.val("");
    });
}

// quando termina o jogo
function perdeu()
{
	$("<h1 class=\" jumbotron \"> Você perdeu tente novamente! </h1>" +
	"<input  type=\"submit\" onclick=\" reiniciaJogo() \" class=\"form-control jumbotron\" value=\" Jogar Novamente \"></input>").appendTo(titulo);
}

// reinicia o jogo
function reiniciaJogo()
{

	window.location.assign("/index.php");
}