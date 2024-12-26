const cnv = document.getElementById("canvas");
  let ctx = cnv.getContext("2d");

  // Criando o objeto de imagem
  const img = new Image();
  img.src = 'tartaruga.png'; // Caminho da sua imagem
  const coracao = new Image();
  coracao.src = 'heart.png'

  // Definir as coordenadas iniciais
  let x = 0;  // Posição inicial no eixo X
  const y = cnv.height / 2 - 225;  // Meio da tela, ajustado para o tamanho da tartaruga
  const targetX = cnv.width / 2 - 150; // Meio da tela (horizontal), considerando o tamanho da tartaruga **como carambolas isso funciona???
  const speed = 5; // Velocidade de movimento da tartaruga
  const texto1 = "Hey! Soube que você é uma pessoa mais"
  const texto2 = "que especial para uma menina aí."
  const texto3 = "Ela tem algo a te dizer, clique no coração e"
  const texto4 = "descubra!"

const coracaoX = 325;
const coracaoY = 730;
const coracaoWidth = 200; // Largura do coração
const coracaoHeight = 200; // Altura do coração

  function balaoFala(){
    ctx.fillStyle = "#c1e678"
    ctx.fillRect(600 , 450 , 350 , 100) //x , y , largura , altura
    ctx.fillStyle = 'black'
    ctx.font = '15px Times New Roman'
    ctx.fillText(texto1 , 605 , 470)
    ctx.fillText(texto2 , 605 , 490)
    ctx.fillText(texto3 , 605 , 510)
    ctx.fillText(texto4 , 605 , 530)
    let coracaoImg = ctx.drawImage(coracao , 390 , 900 , 200 , 200)
    console.log(coracao.getWidth)
  }
  
function verificarClique(event) {
  const mouseX = event.offsetX;
  const mouseY = event.offsetY;
  console.log("mouseX: " + mouseX +" mouseY: " + mouseY)

  // Verificar se o clique ocorreu dentro da área do coração (simulando o clique na imagem)
  if (mouseX > coracaoX && mouseX < coracaoX + coracaoWidth && mouseY > coracaoY && mouseY < coracaoY + coracaoHeight) {
    // Redireciona para o YouTube
    window.location.href = 'https://www.youtube.com'; // Substitua com o link desejado
  }
}

  // Adiciona o evento de clique ao canvas
cnv.addEventListener('click', verificarClique);

  // Aguarde a imagem carregar antes de desenhá-la
  img.onload = function () {
    // Função de animação
    function animate() {
      ctx.clearRect(0, 0, cnv.width, cnv.height); // Limpa o canvas antes de redesenhar

      // Movimento horizontal da tartaruga
      if (x < targetX) x += speed;
      if (x > targetX) x -= speed;

      ctx.drawImage(img, x, y, 300, 450); // Desenha a tartaruga

      // Chama novamente a animação até a tartaruga chegar ao meio
      if (x !== targetX) {
        requestAnimationFrame(animate);
      }
      else{
        balaoFala()
      }
    }

    animate(); // Inicia a animação
  };
