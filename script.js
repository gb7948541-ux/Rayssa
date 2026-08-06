// CORAÇÃO DE PARTÍCULAS ❤️

const canvas = document.createElement("canvas");

document.body.insertBefore(canvas, document.body.firstChild);

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "1";


let particles = [];


function criarCoracao(){

    particles = [];


    for(let i = 0; i < 500; i++){

        let t = Math.random() * Math.PI * 2;


        let x = 16 * Math.pow(Math.sin(t),3);

        let y =
        -(13*Math.cos(t)
        -5*Math.cos(2*t)
        -2*Math.cos(3*t)
        -Math.cos(4*t));


        let escala = 12;


        particles.push({

            x:canvas.width/2 + x*escala,

            y:canvas.height/2 + y*escala,

            tamanho:Math.random()*3+1,

            brilho:Math.random()

        });

    }

}


function desenhar(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    particles.forEach(p=>{


        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.tamanho,
            0,
            Math.PI*2
        );


        ctx.fillStyle =
        `rgba(255,80,200,${p.brilho})`;


        ctx.fill();


    });


    requestAnimationFrame(desenhar);

}



criarCoracao();

setTimeout(()=>{

    desenhar();

},12000);


window.addEventListener("resize",()=>{

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

criarCoracao();

});// TEXTO DIGITANDO ❤️

const mensagem = `
Desde o dia 24/07, uma sexta-feira que parecia ser apenas mais um dia,
algo diferente começou.

Antes mesmo das primeiras palavras,
nossos olhos já tinham começado uma conversa.

Na academia, entre tantos momentos,
eu sempre acabava procurando o seu olhar.

Era como se alguma coisa me dissesse
que tinha algo especial ali.

Até que, mesmo com toda sua timidez,
a vida encontrou um jeito de aproximar a gente.

Seu amigo veio falar comigo,
pediu meu Instagram para você,
e naquele momento começou uma história que eu nem imaginava.

Depois disso, tudo aconteceu de uma forma tão natural...

As conversas,
as risadas,
a conexão,
e aquela sensação boa de encontrar alguém
que combina com a gente.

Rayssa, você chegou de um jeito inesperado,
mas trouxe uma felicidade que eu não esperava encontrar.

Seu olhar é como o brilho da lua:
calmo, bonito e capaz de iluminar qualquer noite.

E seu sorriso é como o sol:
aquele que aparece e muda completamente o dia.

Mesmo sendo pouco tempo,
cada momento com você tem sido especial.

Obrigado por existir,
por ser essa pessoa incrível,
e por me deixar fazer parte da sua história.

Que esse seja apenas o começo
de muitos momentos juntos.

❤️

Com carinho,

Gabriel Vitor
`;

let indice = 0;


function escrever(){

    if(indice < mensagem.length){

        document.getElementById("texto").innerHTML += mensagem.charAt(indice);

        indice++;

        setTimeout(escrever,45);

    }

}


setTimeout(escrever,3000);
// CONTADOR DESDE 24/08 ❤️

function atualizarTempo(){

    const inicio = new Date("2026-07-24T00:00:00");

    const agora = new Date();

    const diferenca = agora - inicio;


    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );


    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );


    const contador = document.getElementById("tempo");


   if(contador){

    contador.innerHTML =
    `${dias} dias, ${horas} horas e ${minutos} minutos ❤️`;

}



setInterval(atualizarTempo,1000);

atualizarTempo();


setInterval(atualizarTempo,1000);

atualizarTempo();


function abrirGalaxia(){

    const galaxia = document.getElementById("galaxiaSecret");

    galaxia.style.display = "block";

    galaxia.classList.add("entradaGalaxia");


    const botao = document.querySelector(".botaoSurpresa");

    if(botao){

        botao.style.display="none";

    }

}

}const galaxia = document.querySelector(".orbita");

let girando = false;
let inicioX = 0;
let rotacao = 0;


galaxia.addEventListener("mousedown", function(e){

    girando = true;

    inicioX = e.clientX;

});


document.addEventListener("mouseup", function(){

    girando = false;

});


document.addEventListener("mousemove", function(e){

    if(!girando) return;


    let movimento = e.clientX - inicioX;

    rotacao += movimento * 0.5;


    galaxia.style.transform =
    `translate(-50%, -50%) rotate(${rotacao}deg)`;


    inicioX = e.clientX;

});



// CELULAR

galaxia.addEventListener("touchstart", function(e){

    girando = true;

    inicioX = e.touches[0].clientX;

});


document.addEventListener("touchend", function(){

    girando = false;

});


document.addEventListener("touchmove", function(e){

    if(!girando) return;


    let movimento =
    e.touches[0].clientX - inicioX;


    rotacao += movimento * 0.5;


    galaxia.style.transform =
    `translate(-50%, -50%) rotate(${rotacao}deg)`;


    inicioX = e.touches[0].clientX;

});function atualizarTempo(){

    const inicio = new Date("2026-07-24T00:00:00");
    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);

    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);

    const segundos = Math.floor((diferenca / 1000) % 60);


    document.getElementById("tempo").innerHTML =
    dias + " dias, " +
    horas + " horas, " +
    minutos + " minutos e " +
    segundos + " segundos ❤️";

}


setInterval(atualizarTempo,1000);

atualizarTempo();

setInterval(function(){

    const inicio = new Date("2026-07-24T00:00:00");
    const agora = new Date();

    const diferenca = agora - inicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("tempo").innerHTML =
    dias + " dias, " +
    horas + " horas, " +
    minutos + " minutos e " +
    segundos + " segundos ❤️";

},1000);

function abrirGalaxia(){

    const galaxia = document.getElementById("galaxiaSecret");

    galaxia.style.display = "block";


    const botao = document.querySelector(".botaoSurpresa");

    if(botao){

        botao.style.display = "none";

    }

}