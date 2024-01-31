const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('avancar')
const botaoVoltar = document.getElementById('voltar')
let nomeFaixa = document.getElementById('faixa')
let nomeAutor = document.getElementById('autor')
const audioMusica = document.getElementById('audio-musica');


const numeroMusicas = 10;

let taTocando = 0
let musicaAtual = 1 

function tocarFaixa(){
    audioMusica.play()
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}

function pausarFaixa(){
    audioMusica.pause()
    botaoPlayPause.classList.add('bi-play-circle-fill')
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
}

function tocarOuPausar(){
    if (taTocando === 0 ){
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0; 
    }
}

function trocarNomeFaixa(){
    if (musicaAtual === 2){
        nomeFaixa.innerText = 'Stranger Things'
    } else if (musicaAtual === 3){
        nomeFaixa.innerText = 'Remind Me To Forget'
    } else if (musicaAtual === 4 ){
        nomeFaixa.innerText = 'If I Lose Myself'
    } else if (musicaAtual === 5 ){
        nomeFaixa.innerText = 'Candy Paint'
    } else if (musicaAtual === 6){
        nomeFaixa.innerText = 'Eastside'
    } else if (musicaAtual === 7){
        nomeFaixa.innerText = 'Rich Love'
    } else if (musicaAtual === 8){
        nomeFaixa.innerText = 'Freeze'
    } else if (musicaAtual === 9){
        nomeFaixa.innerText = 'The One'
    } else if (musicaAtual === 10){
        nomeFaixa.innerText = 'Something Just Like This'
    } else if (musicaAtual === 1){
        nomeFaixa.innerText = 'Fast Car'
    }
}

function trocarNomeAutor(){
    if (musicaAtual === 2){
        nomeAutor.innerText = 'Kygo ft. OneRepublic'
    } else if (musicaAtual === 3){
        nomeAutor.innerText = 'Kygo ft. Miguel'
    } else if (musicaAtual === 4 ){
        nomeAutor.innerText = 'Alesso vs OneRepublic'
    } else if (musicaAtual === 5 ){
        nomeAutor.innerText = 'Post Malone'
    } else if (musicaAtual === 6){
        nomeAutor.innerText = 'benny blanco ft. Halsey & Khalid'
    } else if (musicaAtual === 7){
        nomeAutor.innerText = 'OneRepublic ft. Seeb'
    } else if (musicaAtual === 8){
        nomeAutor.innerText = 'Kygo'
    } else if (musicaAtual === 9){
        nomeAutor.innerText = 'The Chainsmokers'
    } else if (musicaAtual === 10){
        nomeAutor.innerText = 'The Chainsmokers ft. Coldplay'
    } else if (musicaAtual === 1){
        nomeAutor.innerText = 'Jonas Blue ft. Dakota'
    }
}


function proximaFaixa(){
    if (musicaAtual === numeroMusicas){
        musicaAtual = 1
    } else {
        musicaAtual = musicaAtual + 1
    }
    audioMusica.src = './audios/musica' + musicaAtual + '.mp3'
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa()
    trocarNomeAutor()
}

function voltarFaixa(){
    if (musicaAtual === 1){
        musicaAtual = numeroMusicas
    } else {
        musicaAtual = musicaAtual - 1
    }
    audioMusica.src = './audios/musica' + musicaAtual + '.mp3'
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa()
    trocarNomeAutor()
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);