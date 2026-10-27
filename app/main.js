const $ = id => document.getElementById(id);
const bug = () => $('defeitos').checked;

// Array em memória para rastrear registos e detectar duplicados
const listaVendedores = [];

$('defeitos').addEventListener('change', () => {$('modo').textContent = bug() ? 'Com defeitos' : 'Correcto';
});

$('entrar').addEventListener('click', () => {
  const valid = $('email').value.trim() === 'admin@g3.test' && $('senha').value === 'Teste123!';
  $('loginMsg').textContent = valid || (bug() && $('email').value.trim() === 'admin@g3.test')
    ? 'Login efectuado com sucesso'
    : 'Credenciais inválidas';
});

// Guardar vendedor com validação de campos vazios e de duplicados
$('guardar').addEventListener('click', () => {
  const nome = $('nome').value.trim();
  const mercado = $('mercado').value.trim();

  // Validação de campos vazios (ativa no modo sem defeitos)
  if (!bug() && (!nome || !mercado)) {
    $('cadMsg').textContent = 'Preencha todos os campos';
    return;
  }

  // Validação de duplicados (ativa no modo sem defeitos)
  if (!bug()) {
    const jaExiste = listaVendedores.some(
      v => v.nome.toLowerCase() === nome.toLowerCase() && v.mercado.toLowerCase() === mercado.toLowerCase()
    );

    if (jaExiste) {
      $('cadMsg').textContent = 'Vendedor já registado';
      return; // Bloqueia inserção de duplicado
    }
  }

  // Registo do vendedor
  listaVendedores.push({ nome, mercado });
  $('cadMsg').textContent = 'Vendedor guardado';
  
  const li = document.createElement('li');
  li.textContent = `${nome || '(sem nome)'} — ${mercado || '(sem mercado)'}`;
  $('lista').appendChild(li);
});

// Pesquisa de produtos
const itens = ['Tomate', 'Batata', 'Cebola', 'Banana'];
function render() {
  const q = $('busca').value.trim().toLowerCase();
  const results = bug() ? itens : itens.filter(p => p.toLowerCase().includes(q));
  $('produtos').replaceChildren(...results.map(p => {
    const li = document.createElement('li');
    li.textContent = p;
    return li;
  }));
}

$('pesquisar').addEventListener('click', render);
render();