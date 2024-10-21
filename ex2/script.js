let vendas = [];

document.getElementById("adicionarVenda").addEventListener("click", () => {
    const valorVenda = parseFloat(document.getElementById("vendaInput").value);

    if (valorVenda === -1) {
        calcularResultados();
    } else if (!isNaN(valorVenda) && valorVenda >= 0) {
        vendas.push(valorVenda);
        document.getElementById("vendaInput").value = '';
    } else {
        alert("Por favor, insira um valor válido ou -1 para finalizar.");
    }
});

function calcularResultados() {
    if (vendas.length === 0) {
        alert("Nenhuma venda foi registrada.");
        return;
    }

    const maiorVenda = Math.max(...vendas);
    const menorVenda = Math.min(...vendas);
    const totalVendas = vendas.length;
    const somaVendas = vendas.reduce((acc, curr) => acc + curr, 0);
    const mediaVendas = somaVendas / totalVendas;

    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <h2>Resultados das Vendas</h2>
        <p>Maior Venda: R$ ${maiorVenda.toFixed(2)}</p>
        <p>Menor Venda: R$ ${menorVenda.toFixed(2)}</p>
        <p>Média das Vendas: R$ ${mediaVendas.toFixed(2)}</p>
        <p>Total de Vendas: ${totalVendas}</p>
    `;

    vendas = [];
}
