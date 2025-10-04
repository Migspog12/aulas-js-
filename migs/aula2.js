function mensagem(){
   
    // Entrada de informações
    nome = document.getElementById('nome').value
    idade = Number(document.getElementById('idade').value)
    cidade = document.getElementById('cidade').value
    genero = document.getElementById('genero').value

    // Saída de informações
    document.getElementById('texto').innerHTML = 
    '<b>Informações do usuário:</b>'+
    '<br>Nome: '+nome+
    '<br>Idade: '+idade+
    '<br>Cidade: '+cidade+
    '<br>Gênero: '+genero
}

function somar(){
    n1 = Number(document.getElementById('n1').value)
    n2 = Number(document.getElementById('n2').value)
    soma = n1+n2
    document.getElementById('resultado').innerHTML = 
    'a soma entre <b>' +n1+ '</b> + <b>' +n2+ '</b> resulta em: <mark>' +soma+ '</mark>. '
}