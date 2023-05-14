var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
const boneco = new Image();
boneco.src = "img/pato.png";
const cano_cima = new Image();
cano_cima.src = "img/cano_cima.png";
const cano_baixo = new Image();
cano_baixo.src = "img/cano_baixo.png";
var bonecoX = 10;
var interval = 20;
var bonecoY = 300;
var bonecoDY = 0
var gravidade = 0.5;
var canoX = 1000;
var cano2X = 1500;
var cano1_bocaCimaY = 350
var cano2_bocaCimaY = 80
var score = 0
var recorde = 0
function clicou() {
    bonecoDY = 10
}
setInterval(function () {
    context.clearRect(0, 0, 1000, 600);
    bonecoY -= bonecoDY -= gravidade;
    context.drawImage(boneco, bonecoX, bonecoY, 46, 75);
    context.fillStyle = "#00ff00";
    context.fillRect(canoX, 0, 50, cano1_bocaCimaY);
    context.fillRect(canoX, cano1_bocaCimaY + 200, 50, 600);
    canoX -= 8
    context.fillRect(cano2X, 0, 50, cano2_bocaCimaY);
    context.fillRect(cano2X, cano2_bocaCimaY + 200, 50, 600);
    cano2X -= 8
    context.fillStyle = "#000000"
    context.fillText(`Ponutação: ${score++}`, 9, 25)
    context.fillText(`Recorde: ${recorde}`, 9, 50)
    if (canoX < -50) {
        canoX = 1000
        cano1_bocaCimaY = 200 * Math.random()
    }
    if (cano2X < -50) {
        cano2X = 1000
        cano2_bocaCimaY = 200 * Math.random()
    }
    if (bonecoY > 600) { // boneco caiu da tela
        bonecoDY = 0
        bonecoY = 300
        canoX = 1000
        cano2X = 1500
        score = 0
    }
    if ((bonecoY < cano1_bocaCimaY || bonecoY > (cano1_bocaCimaY + 200)) && canoX < (bonecoX)) {
        bonecoDY = 0
        bonecoY = 300
        canoX = 1000
        cano2X = 1500
        score = 0
    } // boneco bateu no cano
    if ((bonecoY < cano2_bocaCimaY || bonecoY > (cano2_bocaCimaY + 200)) && cano2X < (bonecoX)) {
        bonecoDY = 0
        bonecoY = 300
        canoX = 1000
        cano2X = 1500
        score = 0
    } // boneco bateu no cano
    if (recorde < score) {
        recorde = score
    }
}, interval);
