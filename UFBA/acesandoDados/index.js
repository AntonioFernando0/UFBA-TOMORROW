const titulo = document.createElement('h1');
titulo.textContent = "Curso Tomorrow - página dinâmica";
document.body.appendChild(titulo);

const paragrafo1 = document.createElement('p');
paragrafo1.textContent = 'Relação dos cursos programados';
document.body.appendChild(paragrafo1);

const lista1 = document.createElement('ul');
lista1.id = 'lista1';

const cursos = ['Programação em JavaScript', 'Banco de dados SQL', 'Internet das Coisas'];

for (let curso of cursos) {
    const item = document.createElement('li');
    item.textContent = curso;
    item.classList.add('item');
    lista1.appendChild(item);
}
document.body.appendChild(lista1);

// Agora começa a segunda parte

const paragrafo2 = document.createElement('p');
paragrafo2.textContent = 'Outros cursos disponíveis';
document.body.appendChild(paragrafo2);

const lista2 = document.createElement('ul'); // Cria nova lista
lista2.id = 'lista2';

const cursos2 = ['Gestão de Projetos', 'Cloud Computing', 'Cibersegurança'];

for (let curso1 of cursos2) {
    const item = document.createElement('li');
    item.textContent = curso1;
    item.classList.add('item');
    lista2.appendChild(item); // Adiciona na lista2 agora
}
document.body.appendChild(lista2); // Adiciona a lista2 no body


const saudacoes = document.createElement('p');
paragrafo1.textContent = 'Bons estudos!!';
document.body.appendChild(paragrafo1);


// Adicionar um elemento na lista 1
// excluir um elemento na lista 2



// Adicionar um elemento na lista 1
const novoItem = document.createElement('li')
novoItem.textContent = "NodeJS"
novoItem.classList.add('item');

lista1.insertBefore(novoItem, lista1.firstChild)


// Adicionar um elemento na lista 2

const novoItem1 = document.createElement('li')
novoItem1.textContent = "Redes"
novoItem1.classList.add('item');

lista2.insertBefore(novoItem1, lista2.firstChild)

// excluir um elemento na lista 2

const elementlista2 = document.getElementById('lista2');

const itemlista2 = elementlista2.getElementsByTagName('li');

if (itemlista2.length > 0) {
        elementlista2.removeChild(itemlista2[1])
    }
