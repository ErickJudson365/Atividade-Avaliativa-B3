// Mensagem de boas-vindas ao carregar a página inicial
window.onload = function() {
    if (window.location.pathname.includes('index.html')) {
      alert('Bem-vindo ao Portfólio de João Silva!');
    }
  };
  
  // Botão "Voltar ao topo"
  window.onscroll = function() {
    const btnTopo = document.getElementById('btnTopo');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  };
  
  function voltarAoTopo() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  // Validação do formulário de contato
  document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
  
    if (nome && email && mensagem) {
      alert('Mensagem enviada com sucesso!');
      document.getElementById('formContato').reset();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  // Validação básica do formulário
document.getElementById('formContato').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensagem enviada com sucesso!');
  this.reset();
});

// Mostrar/ocultar botão "Voltar ao topo"
window.addEventListener('scroll', function () {
  const btnTopo = document.getElementById('btnTopo');
  if (window.scrollY > 200) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

// Função para voltar ao topo
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
