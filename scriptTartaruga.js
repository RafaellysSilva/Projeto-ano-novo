const cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");

// Criando o objeto de imagem
const img1 = new Image();
img1.src = 'tartaruga.png'; // Caminho da sua imagem
const img2 = new Image();
img2.src = 'tartaruga2.png'; // Caminho da sua imagem

// Definir as coordenadas iniciais
let x = 0;  // Posição inicial no eixo X
const y = cnv.height / 2 - 225;  // Meio da tela, ajustado para o tamanho da tartaruga
const targetX = cnv.width / 2 - 150; // Meio da tela (horizontal), considerando o tamanho da tartaruga
const speed = 1; // Velocidade de movimento da tartaruga
const texto1 = "Hey! Soube que você é uma pessoa" 
const texto2 = "mais que especial para uma";
const texto3 = "menina aí.";
const texto4 = "Ela tem algo a te dizer. "
const texto5 = "Clique no coração e descubra!";


function balaoFala() {
  ctx.fillStyle = "#c1e678";
  ctx.fillRect(600, 400, 400, 180); // x , y , largura , altura
  ctx.fillStyle = 'black';
  ctx.font = '22px Times New Roman';
  ctx.fillText(texto1, 605, 440);
  ctx.fillText(texto2, 605, 470);
  ctx.fillText(texto3, 605, 500);
  ctx.fillText(texto4, 605, 530);
  ctx.fillText(texto5, 605, 560);
}

let frameCount = 0; // Para controlar o intervalo de troca de imagem

// Função de animação
function animate() {
  ctx.clearRect(0, 0, cnv.width, cnv.height); // Limpa o canvas antes de redesenhar

  // Movimento horizontal da tartaruga
  if (x < targetX) x += speed;
  if (x > targetX) x -= speed;

  // Alternar entre as imagens a cada 20 frames
  const currentImage = (frameCount % 20 < 10) ? img1 : img2;
  ctx.drawImage(currentImage, x, y, 300, 450);

  // Chama novamente a animação até a tartaruga chegar ao meio
  if (x !== targetX) {
    requestAnimationFrame(animate);
  } else {
    balaoFala();
    const divHtml = document.getElementById("div");
    const comandoHTML = `<button id='botao' style="background-image:url('heart.png'); width:120px; height:120px; background-color:#fcf8bb; border:none" onclick="execRedirecionar()"></button>`;
    divHtml.innerHTML = comandoHTML;
  }

  frameCount++; // Incrementar o contador de frames
}

// Inicia a animação após as imagens carregarem
img1.onload = function () {
  requestAnimationFrame(animate);
};

frameCount = 0  //zerar o contador

function redirecionar(){
  ctx.clearRect(0, 0, cnv.width, cnv.height); // Limpa o canvas antes de redesenhar
  if (x < cnv.width) x += speed;
  if (x > cnv.width) x -= speed;
  const currentImagem = (frameCount % 20 < 10) ? img1 : img2;
  ctx.drawImage(currentImagem, x, y, 300, 450);
  if (x !== cnv.width) {
    requestAnimationFrame(redirecionar);
  }
  else{
    window.location.href = "mensagem.html"
  }
  frameCount++;
}

function execRedirecionar(){
  requestAnimationFrame(redirecionar);
}