
const addVeiculo = document.getElementById("addButton");
// Função para adicionar um veículo ao armazenamento local e à lista na página
function adicionarVeiculo() {
    const placa = document.getElementById('placa').value;
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = document.getElementById('ano').value;
  
    if (placa && marca && modelo && ano) {
      const veiculo = { placa, marca, modelo, ano };
  
      // Recuperar a lista de veículos existente ou inicializar uma nova
      const listaVeiculos = JSON.parse(localStorage.getItem('listaVeiculos')) || [];
  
      // Adicionar o novo veículo à lista
      listaVeiculos.push(veiculo);
  
      // Atualizar o armazenamento local com a lista atualizada
      localStorage.setItem('listaVeiculos', JSON.stringify(listaVeiculos));
  
      // Limpar os campos do formulário
      document.getElementById('veiculoForm').reset();
  
      // Atualizar a lista na página
      exibirListaVeiculos();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
  
  // Função para exibir a lista de veículos na página
  function exibirListaVeiculos() {
    const listaVeiculos = JSON.parse(localStorage.getItem('listaVeiculos')) || [];
    const listaVeiculosElement = document.getElementById('listaVeiculos');
  
    // Limpar a lista atual
    listaVeiculosElement.innerHTML = '';
  
    // Adicionar cada veículo à lista na página
    listaVeiculos.forEach(veiculo => {
      const listItem = document.createElement('li');
      listItem.textContent = `Placa: ${veiculo.placa}, Marca: ${veiculo.marca}, Modelo: ${veiculo.modelo}, Ano: ${veiculo.ano}`;
      listaVeiculosElement.appendChild(listItem);
    });
  }
  
  // Exibir a lista de veículos ao carregar a página
  exibirListaVeiculos();
  

  addVeiculo.addEventListener("click",adicionarVeiculo);