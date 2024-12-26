const cnv = document.getElementById("canvas");
    let ctx = cnv.getContext("2d");

    // Criando o objeto de imagem
    const img = new Image();
    img.src = 'tartaruga.png'; // Caminho da sua imagem

    // Definir as coordenadas iniciais
    let x = 0;  // Posição inicial no eixo X
    const y = cnv.height / 2 - 75;  // Meio da tela, ajustado para o tamanho da tartaruga
    const targetX = cnv.width / 2 - 50; // Meio da tela (horizontal), considerando o tamanho da tartaruga **como carambolas isso funciona???
    const speed = 2; // Velocidade de movimento da tartaruga

    // Aguarde a imagem carregar antes de desenhá-la
    img.onload = function () {
      // Função de animação
      function animate() {
        ctx.clearRect(0, 0, cnv.width, cnv.height); // Limpa o canvas antes de redesenhar

        // Movimento horizontal da tartaruga
        if (x < targetX) x += speed;
        if (x > targetX) x -= speed;

        ctx.drawImage(img, x, y, 100, 150); // Desenha a tartaruga

        // Chama novamente a animação até a tartaruga chegar ao meio
        if (x !== targetX) {
          requestAnimationFrame(animate);
        }
      }

      animate(); // Inicia a animação
    };