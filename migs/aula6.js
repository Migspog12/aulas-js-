function salvarTexto(){
    texto = document.getElementById('texto').value
    localStorage.setItem('texto',texto)
    document.getElementById('saida').innerText = texto
}



function resgatarTexto(){
    texto = localStorage.getItem('texto')
    if(texto){
        document.getElementById('saida').innerText = texto

    }
}

window.onload = resgatarTexto