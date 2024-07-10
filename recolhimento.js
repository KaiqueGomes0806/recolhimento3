

function calcular(){
    var le = parseFloat(document.getElementById('saldoLe').value);
    var jb = parseFloat(document.getElementById('saldoJb').value);
    var despesa = parseFloat(document.getElementById('despesas').value);
    var premioFut = parseFloat(document.getElementById('premioFut').value);

    var boletim = (le + jb);
    var custos = (despesa + premioFut);
    var resultado3 = (boletim - custos);

    //document.getElementById('log').innerHTML = 'A recolher: ' + resultado3;
    alert('A recolher: R$ ' + resultado3.toFixed(2));
}

function diferenca(){
    var le = parseFloat(document.getElementById('saldoLe').value);
    var jb = parseFloat(document.getElementById('saldoJb').value);
    var despesa = parseFloat(document.getElementById('despesas').value);
    var premioFut = parseFloat(document.getElementById('premioFut').value);

    var boletim = (le + jb);
    var custos = (despesa + premioFut);
    var resultado3 = (boletim - custos);
    var caixa = parseFloat(document.getElementById('caixa').value);
    var diferenca = (resultado3 - caixa);

    alert('Diferença de caixa: R$ ' + diferenca.toFixed(2))
}

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}