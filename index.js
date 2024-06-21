let placarPontos = document.getElementById('Pontos');
let upgrade1 = document.getElementById('Upgrade1');
let upgrade2 = document.getElementById('Upgrade2');
let upgrade3 = document.getElementById('Upgrade3');
let clique = document.getElementById('Clique');
let placarAcumulador = document.getElementById('AcumuladorClique');
let reset = document.getElementById('reset');
let acumulador = 1;
let pontuação = 0;

let updatePonto = () => {
    placarPontos.innerHTML = pontuação;
    if(pontuação >= 500){
        window.alert('Você Ganhou o jogo')
    }
};

let updateAcumulador = () => {
    placarAcumulador.innerHTML = (`Cliques Acumulados: ${acumulador}`);
}

clique.addEventListener('click', () => {
    if(pontuação < 500){
        pontuação += acumulador;
    } else {
        window.alert('Você Ganhou o jogo, se quiser reinicie');
    }
    updatePonto();
});

upgrade1.addEventListener('click', () => {
    if(pontuação >= 10){
        pontuação -= 10;
        acumulador += 1;
    } else if(pontuação >= 500) {
        window.alert('Você ja ganhou, caso queira continuar reinicie seu jogo')
    } else{
        window.alert('Você não possui dinheiro suficiente');
    }
    updateAcumulador();
    updatePonto();
});

upgrade2.addEventListener('click', () => {
    if(pontuação >= 50){
        pontuação -= 50;
        acumulador += 8;
    } else if(pontuação >= 500) {
        window.alert('Você ja ganhou, caso queira continuar reinicie seu jogo')
    } else{
        window.alert('Você não possui dinheiro suficiente');
    }
    updateAcumulador();
    updatePonto();
});

upgrade3.addEventListener('click', () => {
    if(pontuação >= 100){
        pontuação -= 100;
        acumulador += 20;
    } else if(pontuação >= 500) {
        window.alert('Você ja ganhou, caso queira continuar reinicie seu jogo')
    } else{
        window.alert('Você não possui dinheiro suficiente');
    }
    updateAcumulador();
    updatePonto();
});

reset.addEventListener('click', () => {
    pontuação = 0;
    acumulador = 1;
    updatePonto();
    updateAcumulador();
});
