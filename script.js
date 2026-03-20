function comprar(jogo) {
  const numero = "5511993170532";
  const mensagem = `Olá, tenho interesse no ${jogo}`;
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}

