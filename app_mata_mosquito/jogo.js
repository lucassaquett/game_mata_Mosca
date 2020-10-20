var altura = 0;
var largura = 0;
var vidas = 3;
var tempo = 60;
var tempoNivel = 1500;

//ajusta o Nível
var nivel = document.location.search;
nivel = nivel.replace('?', '');

if (nivel === 'normal') {
	tempoNivel = 1500;
	console.log(tempoNivel);
}
if (nivel === 'dificil') {
	tempoNivel = 1000;
	console.log(tempoNivel);
}
if (nivel === 'expert') {
	tempoNivel = 750;
	console.log(tempoNivel);
}

function tamanhoPalco(){

	altura = window.innerHeight;
	largura = window.innerWidth;
	console.log('largura =' + largura, ' altura = ' + altura);
}

tamanhoPalco();
var cronometro = setInterval(function(){
tempo--;

if (tempo < 0) {
	clearInterval(cronometro);
	clearInterval(gera_mosquito);
	window.location.href = 'vitoria.html';

}else{document.getElementById('cronometro').innerHTML = tempo;}
}, 1000);


 function geraElemento(){
//remove o mosquito
 if(document.getElementById('mosquito')){
	document.getElementById('mosquito').remove();
//Fim de Jogo	
	if (vidas == 0) {
		clearInterval(cronometro);
		clearInterval(gera_mosquito);
		window.location.href ='fim_de_jogo.html';

	}else{
	document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
	vidas--;
	console.log(vidas)
	}
}	

//Posicionando o Mosquito 
var posicaox = Math.floor(Math.random() * (largura - 80));
var posicaoy = Math.floor(Math.random() * (altura -80));

 var mosquito = document.createElement('img');
 	 mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
 	 mosquito.src = 'imagens/mosca.png';
 	 mosquito.style.position = 'absolute';
 	 mosquito.style.top = posicaoy + 'px';
 	 mosquito.style.left = posicaox + 'px';
 	 mosquito.id = 'mosquito';
 	 document.body.appendChild(mosquito);
 	 mosquito.onclick = function(){
 	 	this.remove();
 	 } 
		
}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random()*3);
	switch(classe){
		case 0:
		return 'mosquito1';

		case 1:
		return 'mosquito2';

		case 2 :
		return 'mosquito3';
	}
}

function ladoAleatorio(){
	var classe = Math.floor(Math.random()*2);
	switch(classe){
		case 0:
		return 'ladoA';

		case 1:
		return 'ladoB';

	}
}