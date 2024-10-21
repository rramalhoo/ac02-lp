const produtos = [];
const quantidades = [];
let totalProdutos = 0;
let totalItens = 0;

document.getElementById('adicionar').addEventListener('click', () => {
    const produtoInput = document.getElementById('produto').value;
    const quantidadeInput = parseInt(document.getElementById('quantidade').value);

    if (produtoInput && quantidadeInput > 0) {
        produtos.push(produtoInput);
        quantidades.push(quantidadeInput);

        totalProdutos++;
        totalItens += quantidadeInput;

        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';
    } else {
        alert("Por favor, insira um produto e uma quantidade válida.");
    }
});

document.getElementById('finalizar').addEventListener('click', () => {
    if (totalProdutos === 0) {
        alert("Nenhum produto foi adicionado.");
        return;
    }

    const produtoMaisFrequente = encontrarProdutoMaisFrequente();
    const quantidadeProdutoEspecifico = prompt("Digite o nome do produto que deseja consultar:");

    let quantidadeEspecifica = 0;
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i] === quantidadeProdutoEspecifico) {
            quantidadeEspecifica += quantidades[i];
        }
    }

    const resultados = `
        Total de produtos inseridos: ${totalProdutos}<br>
        Quantidade total de itens no estoque: ${totalItens}<br>
        Produto mais frequente: ${produtoMaisFrequente.nome} (${produtoMaisFrequente.quantidade})<br>
        Quantidade do produto "${quantidadeProdutoEspecifico}": ${quantidadeEspecifica}
    `;

    document.getElementById('resultados').innerHTML = resultados;
});

function encontrarProdutoMaisFrequente() {
    const mapaFrequencias = {};

    for (let i = 0; i < produtos.length; i++) {
        const produto = produtos[i];
        if (!mapaFrequencias[produto]) {
            mapaFrequencias[produto] = 0;
        }
        mapaFrequencias[produto] += quantidades[i];
    }

    let produtoMaisFrequente = { nome: '', quantidade: 0 };

    for (const produto in mapaFrequencias) {
        if (mapaFrequencias[produto] > produtoMaisFrequente.quantidade) {
            produtoMaisFrequente = { nome: produto, quantidade: mapaFrequencias[produto] };
        }
    }

    return produtoMaisFrequente;
}
