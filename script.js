const cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");

// Criando o objeto de imagem
const img = new Image();
img.src = 'tartaruga.png'; // Caminho da sua imagem

// Aguarde a imagem carregar antes de desenhá-la
img.onload = function () {
  ctx.drawImage(img, 200, 100, 300, 450); // x, y, largura, altura
};

