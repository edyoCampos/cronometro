let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000;//Quantos milésimos valem 1 segundo?
let cron;

//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

function reverse() {
    pause()
    cron = setInterval(() => { timerReverse(); }, tempo);
}

//Faz a contagem do tempo e exibição
function timer() {
    ss++; //Incrementa +1 na variável ss

    if (ss == 59) { //Verifica se deu 59 segundos

        ss = 0; //Volta os segundos para 0
        mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    //return format;
}

function timerReverse() {

    ss--; // Decrementa -1 na variável ss

    if (hh == 0 && mm == 0 && ss == 0) {
        stop();
    } else if (ss == 0) {  // Verifica se está em 0 segundos

        ss = 59;   // Volta os segundos para 59
        mm--;     //  Diminui -1 na variável mm

        if (mm == 0) { // Verifica se está em 0 segundos
            mm = 59;   //  Volta os minutos para 0
            hh--;    //   Diminui -1 na variável hora
        }
    }





    //Cria uma variável com o valor tratado HH:MM:SS
    let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}


